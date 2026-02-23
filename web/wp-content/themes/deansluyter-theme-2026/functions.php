<?php
/**
 * Basic theme setup and assets.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function deansluyter_theme_2026_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
}
add_action( 'after_setup_theme', 'deansluyter_theme_2026_setup' );

function deansluyter_theme_2026_assets() {
	$theme_version = wp_get_theme()->get( 'Version' );

	$css_rel_path = '/dist/css/styles.css';
	$css_abs_path = get_theme_file_path( $css_rel_path );

	if ( file_exists( $css_abs_path ) ) {
		wp_enqueue_style(
			'deansluyter-theme-2026-styles',
			get_theme_file_uri( $css_rel_path ),
			array(),
			(string) filemtime( $css_abs_path )
		);
	} else {
		wp_enqueue_style(
			'deansluyter-theme-2026-style-fallback',
			get_stylesheet_uri(),
			array(),
			$theme_version
		);
	}

	$js_rel_path = '/dist/js/script.js';
	$js_abs_path = get_theme_file_path( $js_rel_path );

	if ( file_exists( $js_abs_path ) ) {
		wp_enqueue_script(
			'deansluyter-theme-2026-script',
			get_theme_file_uri( $js_rel_path ),
			array(),
			(string) filemtime( $js_abs_path ),
			true
		);
	}
}
add_action( 'wp_enqueue_scripts', 'deansluyter_theme_2026_assets' );
