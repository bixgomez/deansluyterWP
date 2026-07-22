<?php
/**
 * Feature: Remove-block button.
 *
 * Adds a "minus" button beside the "+" that core shows on a new, empty block, so
 * an accidentally added block can be removed on the spot.
 *
 * Core renders that inserter as a positioned popover, which may live in the outer
 * editor document or inside the canvas iframe depending on context. The script
 * watches both; the stylesheet is enqueued on both hooks so it applies wherever
 * the button ends up.
 *
 * @package GutenView
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Whether this feature should load.
 *
 * @return bool
 */
function gutenview_remove_block_button_enabled() {
	return gutenview_is_enabled() && gutenview_get_setting( 'remove_block_button' );
}

/**
 * Enqueue the remove-block script.
 *
 * @return void
 */
function gutenview_remove_block_button_enqueue_script() {
	if ( ! gutenview_remove_block_button_enabled() ) {
		return;
	}

	$rel_path = 'assets/js/remove-block-button.js';
	$abs_path = GUTENVIEW_DIR . $rel_path;
	$version  = file_exists( $abs_path ) ? (string) filemtime( $abs_path ) : GUTENVIEW_VERSION;

	wp_enqueue_script(
		'gutenview-remove-block-button',
		GUTENVIEW_URL . $rel_path,
		array( 'wp-data', 'wp-i18n' ),
		$version,
		true
	);
}
add_action( 'enqueue_block_editor_assets', 'gutenview_remove_block_button_enqueue_script' );

/**
 * Enqueue the remove-block stylesheet.
 *
 * @return void
 */
function gutenview_remove_block_button_enqueue_style() {
	if ( ! is_admin() || ! gutenview_remove_block_button_enabled() ) {
		return;
	}

	$rel_path = 'assets/css/remove-block-button.css';
	$abs_path = GUTENVIEW_DIR . $rel_path;
	$version  = file_exists( $abs_path ) ? (string) filemtime( $abs_path ) : GUTENVIEW_VERSION;

	wp_enqueue_style(
		'gutenview-remove-block-button',
		GUTENVIEW_URL . $rel_path,
		array(),
		$version
	);
}
add_action( 'enqueue_block_editor_assets', 'gutenview_remove_block_button_enqueue_style' );
add_action( 'enqueue_block_assets', 'gutenview_remove_block_button_enqueue_style' );
