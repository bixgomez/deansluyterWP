<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Fezziwig_Base_2019
 */

get_header();
?>



<div class="front-page-grid">

	<div class="item item-1">
    <h3>Item One.</h3>
    <p>
      Here's my idea... That we break the page up into equal (or maybe not so equal) sections...
    </p>
    <p class="extra-content">
      Some extra-content could appear at a certain breakpoint.
    </p>
	</div>

	<div class="item item-2">
    <h3>Item Two.</h3>
    <p>
      At mobile screen widths, they would just stack.  At these sizes, perhaps there is less text,
      so that there is less of a chance of losing any content below the fold.
    </p>
    <p class="extra-content">
      Some extra-content could appear at a certain breakpoint.
    </p>
	</div>

	<div class="item item-3">
    <h3>Item Three.</h3>
    <p>
      Once we get to a certain breakpoint (say, when the menu changes from a hamburger into a full menu),
      our layout would become a 2-column layout, and maybe have more descriptive content.
    </p>
    <p class="extra-content">
      Some extra-content could appear at a certain breakpoint.
    </p>
	</div>

	<div class="item item-4">
    <h3>Item Four.</h3>
    <p>
      On desktop-sized browser windows, we'd "lightly" control the height of each box so that
      there is less of a chance of disappearing below the fold.
    </p>
    <p class="extra-content">
      Some extra-content could appear at a certain breakpoint.
    </p>
	</div>

	<div class="item item-5">
    <h3>Item Five.</h3>
    <p>
      Obvuously this requires more thought and experimentation, but I think it's a good way to display
      display the "five or six" main "call to action" featured links.
    </p>
    <p class="extra-content">
      Some extra-content could appear at a certain breakpoint.
    </p>
	</div>

	<div class="item item-6">
    <h3>Item Six.</h3>
    <p>
      What do you think?  I will see if I can find any examples of this out in the wild.
    </p>
    <p class="extra-content">
      Some extra-content could appear at a certain breakpoint.
    </p>
	</div>

</div>










		<?php
        /*
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		*/
        ?>

<?php
get_sidebar();
get_footer();
