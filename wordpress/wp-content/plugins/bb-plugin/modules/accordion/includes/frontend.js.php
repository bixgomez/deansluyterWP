(function($) {

	$(function() {

		new FLBuilderAccordion({
			id: '<?php echo $id; ?>',
			defaultItem: <?php echo ( isset( $settings->open_first ) && $settings->open_first ) ? '1' : 'false'; ?>,
			labelIcon: '<?php echo $settings->label_icon; ?>',
			activeIcon: '<?php echo $settings->label_active_icon; ?>',
			expandOnTab: <?php echo wp_validate_boolean( $settings->expand_on_tab ) ? 'true' : 'false'; ?>, 
		});
	});

})(jQuery);
