/**
 * GutenView — View in same tab.
 *
 * Adds a "View" button to the block editor header that opens the current post
 * in the same tab, next to the stock button (which opens a new tab). Also makes
 * the "saved" snackbar's View link open in the same tab.
 *
 * @package GutenView
 */

( function () {
	'use strict';

	// WordPress visibility (eye) icon.
	var eyeIconSVG =
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>';

	/**
	 * Locate the editor header's settings area.
	 *
	 * @return {Element|null} The header settings container, or null.
	 */
	function getHeaderSettings() {
		return (
			document.querySelector( '.editor-header__settings' ) ||
			document.querySelector( '.edit-post-header__settings' )
		);
	}

	/**
	 * Add the same-tab view button next to the stock (new-tab) view link.
	 *
	 * The stock link is matched by its target="_blank" within the header rather
	 * than by its (translated) aria-label, so this works in any locale.
	 *
	 * @return {boolean} True once the button exists (or was just added).
	 */
	function addSameTabButton() {
		var headerSettings = getHeaderSettings();
		if ( ! headerSettings ) {
			return false;
		}

		// Already added.
		if ( headerSettings.querySelector( '.gutenview-view-same-tab' ) ) {
			return true;
		}

		// The stock "View" link opens in a new tab.
		var viewLink = headerSettings.querySelector( 'a[target="_blank"]' );
		if ( ! viewLink || ! viewLink.href ) {
			return false;
		}

		// Build our same-tab twin.
		var sameTabLink = document.createElement( 'a' );
		sameTabLink.href = viewLink.href;
		sameTabLink.className =
			'components-button is-compact has-icon gutenview-view-same-tab';
		sameTabLink.setAttribute( 'aria-label', 'View (same tab)' );
		sameTabLink.setAttribute( 'title', 'View (same tab)' );
		sameTabLink.innerHTML = eyeIconSVG;

		// Clarify what the stock button does.
		viewLink.setAttribute( 'aria-label', 'View (new tab)' );
		viewLink.setAttribute( 'title', 'View (new tab)' );

		viewLink.parentNode.insertBefore( sameTabLink, viewLink );

		return true;
	}

	/**
	 * Make the snackbar's "View" link open in the same tab, and hide its
	 * now-irrelevant external-link icon.
	 *
	 * @return {void}
	 */
	function fixSnackbarLinks() {
		var snackbarLinks = document.querySelectorAll(
			'.components-snackbar a[target="_blank"]'
		);
		snackbarLinks.forEach( function ( link ) {
			link.removeAttribute( 'target' );
			link.removeAttribute( 'rel' );
			var icon = link.querySelector( '.components-external-link__icon' );
			if ( icon ) {
				icon.style.display = 'none';
			}
		} );
	}

	/**
	 * Retry until the editor header is present.
	 *
	 * @return {void}
	 */
	function init() {
		var attempts = 0;
		var maxAttempts = 50; // ~5 seconds.

		var interval = setInterval( function () {
			attempts++;
			if ( addSameTabButton() || attempts >= maxAttempts ) {
				clearInterval( interval );
			}
		}, 100 );
	}

	if ( window.wp && window.wp.domReady ) {
		window.wp.domReady( init );
	} else {
		document.addEventListener( 'DOMContentLoaded', init );
	}

	// Re-apply when the editor re-renders (e.g. navigating between posts).
	var observer = new MutationObserver( function () {
		clearTimeout( window.gutenviewViewSameTabDebounce );
		window.gutenviewViewSameTabDebounce = setTimeout( function () {
			addSameTabButton();
			fixSnackbarLinks();
		}, 200 );
	} );

	document.addEventListener( 'DOMContentLoaded', function () {
		if ( document.body ) {
			observer.observe( document.body, {
				childList: true,
				subtree: true,
			} );
		}
	} );
} )();
