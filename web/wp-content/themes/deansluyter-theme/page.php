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
 * @package Deansluyter_Theme
 */

get_header();
?>

<?php
while ( have_posts() ) :
	the_post();

	get_template_part( 'template-parts/content', 'page' );

	$featured_book = get_field('featured_book');
	$related_books = get_field('related_books');

	if( $featured_book ):
		echo '<div class="featured-book-wrapper">';
		$post = $featured_book;
			setup_postdata($post);
			get_template_part('template-parts/featured-book', get_post_format());
		  wp_reset_postdata();
		echo '</div>';
	endif;

	if( $related_books ):
		echo '<div class="related-books">';
		foreach( $related_books as $post ):
			setup_postdata($post);
			get_template_part('template-parts/related-book', get_post_format());
		endforeach;
		wp_reset_postdata();
		echo '</div>';
	endif;

	// If comments are open or we have at least one comment, load up the comment template.
	if ( comments_open() || get_comments_number() ) :
		comments_template();
	endif;

endwhile; // End of the loop.
?>

<?php
get_sidebar();
get_footer();
