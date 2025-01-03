<?php if ( ! empty( $menu_data ) ) : ?>
<div class="fl-field-connections-toggle">
	<i class="fas fa-plus-circle"></i>
</div>
<?php endif; ?>
<div class="fl-field-connection
<?php
if ( $connection ) {
	echo ' fl-field-connection-visible';}
?>
	"
	<?php
	if ( $form ) {
		echo ' data-form="' . $form . '"';}
	?>
>
	<div class="fl-field-connection-content">
		<div class="fl-field-connection-label"><?php FLThemeBuilderFieldConnections::render_label( $connection ); ?></div>
		<i class="fl-field-connection-edit fas fa-wrench"></i>
		<i class="fl-field-connection-remove fas fa-times"></i>
	</div>
</div>
<?php
	$field_connection = ! empty( $connection ) ? json_encode( $connection ) : '';
?>
<input class="fl-field-connection-value" type="hidden" name="connections[][<?php echo $name; ?>]" value="<?php echo esc_attr( $field_connection ); ?>" />
<script> FLThemeBuilderFieldConnections._menus['<?php echo $name; ?>'] = <?php echo json_encode( $menu_data ); ?></script>
