<?php
/**
 * Feature: Block outlines.
 *
 * Draws dashed boundaries around editor blocks so their edges are visible.
 * Mode is 'off', 'hover', or 'always'.
 *
 * Enqueued on `enqueue_block_assets` (guarded to admin) rather than
 * `enqueue_block_editor_assets`, because in WP 6.3+ the editor canvas is an
 * iframe and only `enqueue_block_assets` styles reach inside it.
 *
 * @package GutenView
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue the block-outline stylesheet into the editor canvas, per mode.
 *
 * @return void
 */
function gutenview_block_outlines_enqueue() {
	// Editor canvas only (this hook also fires on the front end).
	if ( ! is_admin() ) {
		return;
	}

	if ( ! gutenview_is_enabled() ) {
		return;
	}

	$mode = gutenview_get_setting( 'block_outlines' );

	if ( 'hover' !== $mode && 'always' !== $mode ) {
		return;
	}

	$rel_path = ( 'always' === $mode )
		? 'assets/css/block-outlines-always.css'
		: 'assets/css/block-outlines-hover.css';

	$abs_path = GUTENVIEW_DIR . $rel_path;
	$version  = file_exists( $abs_path ) ? (string) filemtime( $abs_path ) : GUTENVIEW_VERSION;

	wp_enqueue_style(
		'gutenview-block-outlines',
		GUTENVIEW_URL . $rel_path,
		array(),
		$version
	);
}
add_action( 'enqueue_block_assets', 'gutenview_block_outlines_enqueue' );
