<?php
/**
 * Plugin Name: Custom Beaver Builder Modules
 * Plugin URI: https://illusio.com
 * Description: A plugin for custom builder modules.
 * Version: 1.0
 * Author: Illusio
 * Author URI: https://illusio.com/
 */
define( 'CUSTOM_BB_MODULES_DIR', plugin_dir_path( __FILE__ ) );
define( 'CUSTOM_BB_MODULES_URL', plugins_url( '/', __FILE__ ) );

require_once CUSTOM_BB_MODULES_DIR . 'classes/custom-bb-modules-loader.php';