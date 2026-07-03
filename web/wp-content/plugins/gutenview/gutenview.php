<?php
/**
 * Plugin Name:       GutenView
 * Plugin URI:        https://example.com/gutenview
 * Description:       Makes the WordPress block editor's hidden editing affordances visible and discoverable.
 * Version:           0.1.0
 * Requires at least: 6.5
 * Requires PHP:      7.4
 * Author:            Richard Gilbert
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenview
 *
 * @package GutenView
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Plugin version.
 */
define( 'GUTENVIEW_VERSION', '0.1.0' );

/**
 * Absolute path to the main plugin file.
 */
define( 'GUTENVIEW_FILE', __FILE__ );

/**
 * Absolute path to the plugin directory (with trailing slash).
 */
define( 'GUTENVIEW_DIR', plugin_dir_path( __FILE__ ) );

/**
 * URL to the plugin directory (with trailing slash).
 */
define( 'GUTENVIEW_URL', plugin_dir_url( __FILE__ ) );

/**
 * Bootstrap the plugin.
 *
 * Feature modules are wired up here as they are built (see the friction-point
 * inventory / roadmap).
 *
 * @return void
 */
function gutenview_bootstrap() {
	if ( is_admin() ) {
		require_once GUTENVIEW_DIR . 'includes/admin/settings-page.php';
	}
}
add_action( 'plugins_loaded', 'gutenview_bootstrap' );
