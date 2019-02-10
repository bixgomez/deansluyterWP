<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fezziwig_Base_2019
 */

?>

    </div>
  </div>
</div>

<div class="section-outer section-outer--footer">
  <footer class="section section--footer">
    <div class="section-inner section-inner--footer">

      <div class="site-info">
        <a href="<?php echo esc_url( __( 'https://wordpress.org/', 'fezziwig-base-2019' ) ); ?>">
          <?php
          /* translators: %s: CMS name, i.e. WordPress. */
          printf( esc_html__( 'Proudly powered by %s', 'fezziwig-base-2019' ), 'WordPress' );
          ?>
        </a>
        <span class="sep"> | </span>
          <?php
          /* translators: 1: Theme name, 2: Theme author. */
          printf( esc_html__( 'Theme: %1$s by %2$s.', 'fezziwig-base-2019' ), 'fezziwig-base-2019', '<a href="http://underscores.me/">Underscores.me</a>' );
          ?>
      </div><!-- .site-info -->

    </div>
  </footer>
</div>

<?php wp_footer(); ?>

</body>
</html>
