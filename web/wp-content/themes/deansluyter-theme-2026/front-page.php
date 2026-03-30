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

$hero_image_path = get_template_directory() . '/assets/dean-portrait__optimized.jpg';
$hero_image_uri  = get_template_directory_uri() . '/assets/dean-portrait__optimized.jpg';

if ( file_exists( $hero_image_path ) ) {
	$hero_image_uri = add_query_arg( 'ver', (string) filemtime( $hero_image_path ), $hero_image_uri );
}
?>

    <div class="front-page-header--wrapper">
        <div class="front-page-header">
            <div class="front-page-image" style="background-image: none;">
                <img
                    class="front-page-image__media"
                    src="<?php echo esc_url( $hero_image_uri ); ?>"
                    alt="<?php echo esc_attr__( 'Portrait of Dean Sluyter', 'deansluyter-theme' ); ?>"
                    width="1076"
                    height="768"
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                />
                <div class="front-page-text">
                    <div class="inner">
                        <?php while ( have_posts() ) : the_post(); ?>
                            <?php  ?>
                            <h1 class="site-name">Dean Sluyter</h1>
                            <?php  ?>
                            <p class="home-page-intro-text">
                                <?php the_field('intro_text'); ?>
                            </p>
                        <?php endwhile; ?>
                    </div>
                </div>
            </div>
            <div class="front-page-cta">
                <a class="new-book-link" rel="nofollow" href="/books/"><span class="new-book-link__text">New Book</span></a>
            </div>
        </div>
    </div>

    <div class="front-page-content--wrapper">
        <div class="front-page-content">
            <?php
            while ( have_posts() ) :
                the_post();
                get_template_part( 'template-parts/content', 'front' );
            endwhile;
            ?>
        </div>
    </div>

<?php
get_sidebar();
get_footer();
