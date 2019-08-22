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

<div class="front-page-image">
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

<?php /* ?>
  <div class="front-page-grid--wrapper">
    <div class="front-page-grid">
      <?php
      while ( have_posts() ) :
        the_post();
        get_template_part( 'template-parts/content', 'front' );
      endwhile;
      ?>
    </div>
  </div>
 <?php */ ?>

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
