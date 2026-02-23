<?php
/**
 * Add height field to ACF WYSIWYG
 */
function wysiwyg_render_field_settings( $field ) {
	acf_render_field_setting( $field, array(
		'label'			=> __('Height of Editor'),
		'instructions'	=> __('Height of Editor after Init'),
		'name'			=> 'wysiwyg_height',
		'type'			=> 'number',
	));
}
add_action('acf/render_field_settings/type=wysiwyg', 'wysiwyg_render_field_settings', 10, 1 );


/**
 * Render height on ACF WYSIWYG 
 */
function wysiwyg_render_field( $field ) {
	$field_class = '.acf-'.str_replace('_', '-', $field['key']);
?>
	<style type="text/css">
	<?php echo $field_class; ?> iframe {
		min-height: <?php echo $field['wysiwyg_height']; ?>px; 
	}
	</style>
	<script type="text/javascript">
	jQuery(window).load(function() {
		jQuery('<?php echo $field_class; ?>').each(function() {
			jQuery('#'+jQuery(this).find('iframe').attr('id')).height( <?php echo $field['wysiwyg_height']; ?> );
		});
	});
	</script>
<?php
}
add_action( 'acf/render_field/type=wysiwyg', 'wysiwyg_render_field', 10, 1 );

