<?php
/*
Template Name: Past Films
*/

get_header();
$container   = get_theme_mod( 'understrap_container_type' );

?>



          <?php

          while ( have_posts() ) : the_post();
            the_title( '<h1 class="entry-title">', '</h1>' );
            endwhile; // end of the loop.

          ?>



<?php get_footer(); ?>