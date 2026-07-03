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
 * Register the plugin's setting, sections, and fields.
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

	// General section — the master enable switch.
	add_settings_section(
		'gutenview_section_general',
		__( 'General', 'gutenview' ),
		'__return_false',
		'gutenview'
	);

	add_settings_field(
		'gutenview_field_enabled',
		__( 'Enable GutenView', 'gutenview' ),
		'gutenview_render_checkbox_field',
		'gutenview',
		'gutenview_section_general',
		array(
			'key'         => 'enabled',
			'label_for'   => 'gutenview_enabled',
			'label'       => __( 'Enable GutenView editor enhancements', 'gutenview' ),
			'description' => __( 'Master switch. Turn every GutenView enhancement off at once without losing your individual toggle choices.', 'gutenview' ),
		)
	);

	// View & Save section — quality-of-life editor tweaks.
	add_settings_section(
		'gutenview_section_view',
		__( 'View &amp; Save', 'gutenview' ),
		'gutenview_render_view_section',
		'gutenview'
	);

	add_settings_field(
		'gutenview_field_view_same_tab',
		__( 'View in same tab', 'gutenview' ),
		'gutenview_render_checkbox_field',
		'gutenview',
		'gutenview_section_view',
		array(
			'key'         => 'view_same_tab',
			'label_for'   => 'gutenview_view_same_tab',
			'label'       => __( 'Add a "View" button that opens the post in the same tab', 'gutenview' ),
			'description' => __( 'Adds a same-tab View button next to the stock one (which keeps opening a new tab), so you stop piling up browser tabs while editing.', 'gutenview' ),
		)
	);

	add_settings_field(
		'gutenview_field_reposition_snackbar',
		__( 'Reposition save notice', 'gutenview' ),
		'gutenview_render_checkbox_field',
		'gutenview',
		'gutenview_section_view',
		array(
			'key'         => 'reposition_snackbar',
			'label_for'   => 'gutenview_reposition_snackbar',
			'label'       => __( 'Move the "saved" notice up near the Save button', 'gutenview' ),
			'description' => __( 'Relocates the block editor snackbar from the far bottom-left corner to the top-right, near where you clicked Save.', 'gutenview' ),
		)
	);

	// Discoverability section — affordance toggles land here as features are built.
	add_settings_section(
		'gutenview_section_discoverability',
		__( 'Discoverability', 'gutenview' ),
		'gutenview_render_discoverability_section',
		'gutenview'
	);
}
add_action( 'admin_init', 'gutenview_register_settings' );

/**
 * Sanitize the settings array on save.
 *
 * @param mixed $input Raw submitted value.
 * @return array Sanitized settings.
 */
function gutenview_sanitize_settings( $input ) {
	$input = is_array( $input ) ? $input : array();

	$output = array();

	// All current settings are booleans (checkbox present === on).
	$output['enabled']             = ! empty( $input['enabled'] );
	$output['view_same_tab']       = ! empty( $input['view_same_tab'] );
	$output['reposition_snackbar'] = ! empty( $input['reposition_snackbar'] );

	return $output;
}

/**
 * Render a boolean checkbox field.
 *
 * @param array $args {
 *     @type string $key         Setting key within the GutenView option.
 *     @type string $label_for   Input id.
 *     @type string $label       Checkbox label.
 *     @type string $description Optional help text.
 * }
 * @return void
 */
function gutenview_render_checkbox_field( $args ) {
	$key = isset( $args['key'] ) ? $args['key'] : '';

	if ( '' === $key ) {
		return;
	}

	$id          = isset( $args['label_for'] ) ? $args['label_for'] : 'gutenview_' . $key;
	$label       = isset( $args['label'] ) ? $args['label'] : '';
	$description = isset( $args['description'] ) ? $args['description'] : '';
	?>
	<label for="<?php echo esc_attr( $id ); ?>">
		<input
			type="checkbox"
			id="<?php echo esc_attr( $id ); ?>"
			name="<?php echo esc_attr( GUTENVIEW_OPTION ); ?>[<?php echo esc_attr( $key ); ?>]"
			value="1"
			<?php checked( (bool) gutenview_get_setting( $key ) ); ?>
		/>
		<?php echo esc_html( $label ); ?>
	</label>
	<?php if ( '' !== $description ) : ?>
		<p class="description"><?php echo esc_html( $description ); ?></p>
	<?php endif; ?>
	<?php
}

/**
 * Intro copy for the View & Save section.
 *
 * @return void
 */
function gutenview_render_view_section() {
	echo '<p>' . esc_html__( 'Small quality-of-life tweaks around viewing and saving.', 'gutenview' ) . '</p>';
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
