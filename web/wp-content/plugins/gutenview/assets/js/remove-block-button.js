/**
 * GutenView — Remove-block button.
 *
 * Adds a "minus" button beside the "+" that core shows on a new, empty block
 * (`.block-editor-block-list__empty-block-inserter`), so an accidentally added
 * block can be removed right there instead of digging through the block toolbar's
 * overflow menu.
 *
 * The button reuses core's own button classes so it is visually identical to the
 * "+", and removes the currently selected block via the public block-editor store
 * action. Removal is undoable with the editor's normal undo.
 *
 * Core renders that inserter transiently (it appears and disappears as empty
 * blocks come and go), so we watch for it and re-inject as needed.
 *
 * @package GutenView
 */

( function () {
	'use strict';

	/* Matches the geometry of core's plus icon, so the pair look like a set. */
	var MINUS_SVG =
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M6 11H17.5V12.5H6V11Z"></path></svg>';

	var watched = [];

	/**
	 * Translated button label, if wp.i18n is available.
	 *
	 * @return {string}
	 */
	function label() {
		if ( window.wp && window.wp.i18n && window.wp.i18n.__ ) {
			return window.wp.i18n.__( 'Remove block', 'gutenview' );
		}
		return 'Remove block';
	}

	/**
	 * Remove the block currently selected (the empty one the inserter belongs to).
	 */
	function removeCurrentBlock() {
		if ( ! window.wp || ! window.wp.data ) {
			return;
		}
		try {
			var clientId = window.wp.data
				.select( 'core/block-editor' )
				.getSelectedBlockClientId();
			if ( clientId ) {
				window.wp.data.dispatch( 'core/block-editor' ).removeBlock( clientId );
			}
		} catch ( e ) {
			// Store API changed / unavailable — fail silently.
		}
	}

	/**
	 * Inject the minus button into one empty-block inserter.
	 *
	 * @param {Element} inserter
	 */
	function decorate( inserter ) {
		if ( ! inserter || inserter.querySelector( '.gutenview-remove-block' ) ) {
			return;
		}

		var doc = inserter.ownerDocument;
		var btn = doc.createElement( 'button' );

		btn.type = 'button';
		btn.className =
			'components-button block-editor-inserter__toggle is-next-40px-default-size has-icon gutenview-remove-block';
		btn.setAttribute( 'aria-label', label() );
		btn.setAttribute( 'title', label() );
		btn.innerHTML = MINUS_SVG;

		// Don't let the editor treat this as a canvas click / selection change.
		btn.addEventListener( 'mousedown', function ( e ) {
			e.preventDefault();
			e.stopPropagation();
		} );
		btn.addEventListener( 'click', function ( e ) {
			e.preventDefault();
			e.stopPropagation();
			removeCurrentBlock();
		} );

		inserter.insertBefore( btn, inserter.firstChild );
	}

	/**
	 * Decorate every empty-block inserter currently in a document.
	 *
	 * @param {Document} doc
	 */
	function scan( doc ) {
		if ( ! doc || ! doc.querySelectorAll ) {
			return;
		}
		var found = doc.querySelectorAll( '.block-editor-block-list__empty-block-inserter' );
		for ( var i = 0; i < found.length; i++ ) {
			decorate( found[ i ] );
		}
	}

	/**
	 * Observe a document for the inserter appearing. rAF-throttled, since the
	 * editor mutates constantly.
	 *
	 * @param {Document} doc
	 */
	function watch( doc ) {
		if ( ! doc || watched.indexOf( doc ) !== -1 ) {
			return;
		}
		var target = doc.body || doc.documentElement;
		if ( ! target ) {
			return;
		}
		watched.push( doc );
		scan( doc );

		var win = doc.defaultView || window;
		var MO = win.MutationObserver || window.MutationObserver;
		if ( ! MO ) {
			return;
		}

		var queued = false;
		var obs = new MO( function () {
			if ( queued ) {
				return;
			}
			queued = true;
			win.requestAnimationFrame( function () {
				queued = false;
				scan( doc );
			} );
		} );
		obs.observe( target, { childList: true, subtree: true } );
	}

	/**
	 * Core may render this inserter in the outer document or inside the canvas
	 * iframe depending on context, so cover both.
	 */
	function ensure() {
		watch( document );
		var iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe && iframe.contentDocument ) {
			watch( iframe.contentDocument );
		}
	}

	function boot() {
		ensure();
		setInterval( ensure, 1000 );
	}

	if ( document.readyState !== 'loading' ) {
		boot();
	} else {
		document.addEventListener( 'DOMContentLoaded', boot );
	}
} )();
