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
    $build_dir = __DIR__ . '/build';

    if (! is_dir($build_dir)) {
        return;
    }

    $iterator = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($build_dir, FilesystemIterator::SKIP_DOTS)
    );

    foreach ($iterator as $file) {
        if (! $file instanceof SplFileInfo) {
            continue;
        }

        if ($file->getFilename() !== 'block.json') {
            continue;
        }

        register_block_type($file->getPathname());
    }
}
add_action('init', 'deansluyter_blocks_register_blocks');
