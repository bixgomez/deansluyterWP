<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fezziwig_Base_2019
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
    <meta name="google-site-verification" content="YDmE7BZcB4BnIyiRceEWwZt_4zfK1m_dcMqe6YD7Q8c" />
</head>

<body <?php body_class( 'front-end' ); ?>>
<a name="Top" id="Top"></a>
<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'fezziwig-base-2019' ); ?></a>

<div class="page-wrapper">

  <div class="section-outer section-outer--header">
    <header class="section section--header">
      <div class="section-inner section-inner--header">

        <div class="grid-layout grid-layout--header">
          <div class="site-branding">
            <?php
            the_custom_logo();
            if ( is_front_page() && is_home() ) :
              ?>
              <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
              <?php
            else :
              ?>
              <p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
              <?php
            endif;
            ?>
          </div><!-- .site-branding -->

          <nav id="site-navigation" class="main-navigation">
            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'fezziwig-base-2019-02' ); ?></button>
            <?php
            wp_nav_menu( array(
              'theme_location' => 'menu-1',
              'menu_id'        => 'primary-menu',
            ) );
            ?>
          </nav><!-- #site-navigation -->
        </div>

      </div>
    </header>
  </div>

  <?php /* ?>
  <nav id="navigation" class="section section-navigation">
    <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Main Menu', 'fezziwig-base-2019' ); ?></button>
    <?php
    wp_nav_menu( array(
      'theme_location' => 'menu-1',
      'menu_id'        => 'main-menu',
    ) );
    ?>
  </nav><!-- #navigation -->
  <?php */ ?>

  <div class="section-outer section-outer--content">
    <div class="section section--content">
      <div class="section-inner section-inner--content">
