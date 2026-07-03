<?php
/**
 * GutenView admin settings page (Settings -> GutenView).
 *
 * @package GutenView
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register the GutenView settings page under the Settings menu.
 *
 * @return void
 */
function gutenview_register_settings_page() {
	add_options_page(
		__( 'GutenView', 'gutenview' ),   // Page <title>.
		__( 'GutenView', 'gutenview' ),   // Menu label.
		'manage_options',                 // Capability.
		'gutenview',                      // Menu slug.
		'gutenview_render_settings_page'  // Render callback.
	);
}
add_action( 'admin_menu', 'gutenview_register_settings_page' );

/**
 * Register the plugin's setting, section, and (eventually) fields.
 *
 * @return void
 */
function gutenview_register_settings() {
	register_setting(
		'gutenview_settings_group',
		'gutenview_settings',
		array(
			'type'              => 'array',
			'sanitize_callback' => 'gutenview_sanitize_settings',
			'default'           => array(),
		)
	);

	add_settings_section(
		'gutenview_section_discoverability',
		__( 'Discoverability', 'gutenview' ),
		'gutenview_render_discoverability_section',
		'gutenview'
	);

	// Toggle fields will be registered here (add_settings_field) as features land.
}
add_action( 'admin_init', 'gutenview_register_settings' );

/**
 * Sanitize the settings array on save.
 *
 * No fields exist yet, so this returns an empty array. Each field will add its
 * own validated/sanitized value here as it is introduced.
 *
 * @param mixed $input Raw submitted value.
 * @return array Sanitized settings.
 */
function gutenview_sanitize_settings( $input ) {
	$output = array();

	// Per-field sanitization will be added here.

	return $output;
}

/**
 * Intro copy for the Discoverability section.
 *
 * @return void
 */
function gutenview_render_discoverability_section() {
	echo '<p>' . esc_html__( 'Editor affordance toggles will appear here.', 'gutenview' ) . '</p>';
}

/**
 * Render the settings page.
 *
 * @return void
 */
function gutenview_render_settings_page() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	?>
	<div class="wrap">
		<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>

		<p><?php esc_html_e( "Make the block editor's hidden editing affordances visible and discoverable.", 'gutenview' ); ?></p>

		<form action="options.php" method="post">
			<?php
			settings_fields( 'gutenview_settings_group' );
			do_settings_sections( 'gutenview' );
			submit_button();
			?>
		</form>
	</div>
	<?php
}
