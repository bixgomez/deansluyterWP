<?php
/*
 * Plugin Name: Mr. Fezziwig's Gutenberg Blocks
 * Description: A set of blocks for use in WordPress 5.0 and above.
 * Version: 0.1.0
 * Author: Richard Gilbert
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

if ( ! function_exists( 'image_paragraph' ) ) {

  function image_paragraph() {
    // Register the block-building script
    wp_register_script(
      'image-paragraph-editor',
      plugins_url('/blocks/image-paragraph/editor-script.js', __FILE__),
      array('wp-blocks', 'wp-element')
    );

    // Register global block CSS
    wp_register_style(
      'image-paragraph',
      plugins_url('/blocks/image-paragraph/style.css', __FILE__),
      array('wp-edit-blocks'),
      filemtime( plugin_dir_path( __FILE__ ) . '/blocks/image-paragraph/style.css' )
    );

    // Register editor only block CSS
    wp_register_style(
      'image-paragraph-editor',
      plugins_url('/blocks/image-paragraph/editor-style.css', __FILE__),
      array('wp-edit-blocks'),
      filemtime( plugin_dir_path( __FILE__ ) . '/blocks/image-paragraph/editor-style.css' )
    );

    // Register the block type
  }
}