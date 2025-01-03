<?php

// Do the removal of paged & offset parameters
add_filter( 'fl_builder_loop_query_args', array( $module, 'override_query_args' ), 10 );

// Get the query data.
$query = $module->get_query();

// Remove filter to prevent breaking other modules
remove_filter( 'fl_builder_loop_query_args', array( $module, 'override_query_args' ), 10 );

// Render the posts.
if ( $query->have_posts() ) :

	?>

	<div class="fl-post-slider"<?php FLBuilder::print_schema( ' itemscope="itemscope" itemtype="https://schema.org/Blog"' ); ?>>
		<div class="fl-post-slider-wrapper">

			<?php

			while ( $query->have_posts() ) {

				$query->the_post();

				ob_start();

				include apply_filters( 'fl_builder_posts_slider_layout_path', $module->dir . 'includes/post-loop.php', $settings, $module );

				// Do shortcodes here so they are parsed in context of the current post.
				echo do_shortcode( ob_get_clean() );

			}

			?>
		</div>
	<?php

	// Render the navigation.
	if ( 'yes' == $settings->navigation && $query->have_posts() ) :
		?>
		<div class="fl-post-slider-navigation" aria-label="post slider buttons">
			<a class="slider-prev" href="#" aria-label="previous" role="button"><div class="fl-post-slider-svg-container"><?php include FL_BUILDER_DIR . 'img/svg/arrow-left.svg'; ?></div></a>
			<a class="slider-next" href="#" aria-label="next" role="button"><div class="fl-post-slider-svg-container"><?php include FL_BUILDER_DIR . 'img/svg/arrow-right.svg'; ?></div></a>
		</div>
	<?php endif; ?>
	</div>
	<div class="fl-clear"></div>
<?php endif; ?>

<?php wp_reset_postdata(); ?>
