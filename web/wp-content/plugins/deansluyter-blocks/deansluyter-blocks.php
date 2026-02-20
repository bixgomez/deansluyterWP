<?php
/**
 * Plugin Name: Deansluyter Blocks
 * Description: Native Gutenberg blocks for deansluyter.com.
 * Version: 0.1.0
 * Author: Richard Gilbert
 * Text Domain: deansluyter-blocks
 */

if (! defined('ABSPATH')) {
    exit;
}

function deansluyter_blocks_register_blocks(): void {
    $block_build_path = __DIR__ . '/build/block.json';

    if (! file_exists($block_build_path)) {
        return;
    }

    register_block_type($block_build_path);
}
add_action('init', 'deansluyter_blocks_register_blocks');
