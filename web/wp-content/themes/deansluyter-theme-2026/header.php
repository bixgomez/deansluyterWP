<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Deansluyter_Theme
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
    <script>(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","https://www.google-analytics.com/analytics.js","ga");ga("create", "UA-59961869-1", {"cookieDomain":"auto"});ga("set", "anonymizeIp", true);ga("send", "pageview");</script>
</head>

<body <?php body_class(); ?>>
<a name="Top" id="Top"></a>
<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'deansluyter-theme' ); ?></a>

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
            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'deansluyter-theme-02' ); ?></button>
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
    <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Main Menu', 'deansluyter-theme' ); ?></button>
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
