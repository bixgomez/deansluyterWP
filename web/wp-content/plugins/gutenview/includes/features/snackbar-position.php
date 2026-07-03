<?php
/**
 * Feature: Reposition the save snackbar.
 *
 * Moves the block editor's "saved" snackbar notice from the far bottom-left
 * corner up to the top-right, near the Save button.
 *
 * @package GutenView
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue the snackbar-position stylesheet in the block editor, if enabled.
 *
 * @return void
 */
function gutenview_snackbar_position_enqueue() {
	if ( ! gutenview_is_enabled() || ! gutenview_get_setting( 'reposition_snackbar' ) ) {
		return;
	}

	$rel_path = 'assets/css/snackbar-position.css';
	$abs_path = GUTENVIEW_DIR . $rel_path;
	$version  = file_exists( $abs_path ) ? (string) filemtime( $abs_path ) : GUTENVIEW_VERSION;

	wp_enqueue_style(
		'gutenview-snackbar-position',
		GUTENVIEW_URL . $rel_path,
		array(),
		$version
	);
}
add_action( 'enqueue_block_editor_assets', 'gutenview_snackbar_position_enqueue' );
