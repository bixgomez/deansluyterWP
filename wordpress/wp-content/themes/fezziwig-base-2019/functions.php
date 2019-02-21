<?php
/**
 * Fezziwig Base 2019 functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Fezziwig_Base_2019
 */

if ( ! function_exists( 'fezziwig_base_2019_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function fezziwig_base_2019_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Fezziwig Base 2019, use a find and replace
		 * to change 'fezziwig-base-2019' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'fezziwig-base-2019', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'fezziwig-base-2019' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'fezziwig_base_2019_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );

        /**
         * Add support for editor styles, then enqueue editor styles.
         *
         * @link https://richtabor.com/add-wordpress-theme-styles-to-gutenberg/
         */
        add_theme_support( 'editor-styles' );
        add_editor_style( get_template_directory_uri() . '/styles/css/styles_editor.css' );

	}
endif;
add_action( 'after_setup_theme', 'fezziwig_base_2019_setup' );

/**
 * Load Gutenberg stylesheet. Add backend styles for Gutenberg.
 */
function extra_gutenberg_assets() {
  // Load the theme styles within Gutenberg.
  wp_enqueue_style( 'extra-gutenberg', get_template_directory_uri() . '/styles/css/styles_editor_extra.css', false );
}
add_action( 'enqueue_block_editor_assets', 'extra_gutenberg_assets' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function fezziwig_base_2019_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'fezziwig_base_2019_content_width', 640 );
}
add_action( 'after_setup_theme', 'fezziwig_base_2019_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function fezziwig_base_2019_widgets_init() {
  register_sidebar( array(
    'name'          => esc_html__( 'Sidebar', 'fezziwig-base-2019' ),
    'id'            => 'sidebar-1',
    'description'   => esc_html__( 'Add widgets here.', 'fezziwig-base-2019' ),
    'before_widget' => '<section id="%1$s" class="widget %2$s">',
    'after_widget'  => '</section>',
    'before_title'  => '<h2 class="widget-title">',
    'after_title'   => '</h2>',
  ) );
  register_sidebar( array(
    'name'          => esc_html__( 'Site Navigation', 'fezziwig-base-2019' ),
    'id'            => 'site-navigation',
    'description'   => esc_html__( 'Add widgets here.', 'fezziwig-base-2019' ),
    'before_widget' => '<section id="%1$s" class="widget %2$s">',
    'after_widget'  => '</section>',
    'before_title'  => '<h2 class="widget-title">',
    'after_title'   => '</h2>',
  ) );
  register_sidebar( array(
    'name'          => esc_html__( 'Footer', 'fezziwig-base-2019' ),
    'id'            => 'footer',
    'description'   => esc_html__( 'Add widgets here.', 'fezziwig-base-2019' ),
    'before_widget' => '<section id="%1$s" class="widget %2$s">',
    'after_widget'  => '</section>',
    'before_title'  => '<h2 class="widget-title">',
    'after_title'   => '</h2>',
  ) );
}
add_action( 'widgets_init', 'fezziwig_base_2019_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function fezziwig_base_2019_scripts() {
	wp_enqueue_style( 'fezziwig-base-2019-style', get_stylesheet_uri() );
    wp_enqueue_style( 'fezziwig-base-2019-styles', get_template_directory_uri() . '/styles/css/styles.css' );
	wp_enqueue_script( 'fezziwig-base-2019-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );
	wp_enqueue_script( 'fezziwig-base-2019-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );
    wp_enqueue_script( 'hc-offcanvas-nav', get_template_directory_uri() .'/js/hc-offcanvas-nav.js', array('jquery'), null, true );
    wp_enqueue_script( 'hc-offcanvas-nav--config', get_template_directory_uri() .'/js/hc-offcanvas-nav--config.js', array('jquery'), null, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'fezziwig_base_2019_scripts' );

// retrieves the attachment ID from the file URL
function pippin_get_image_id($image_url) {
	global $wpdb;
	$attachment = $wpdb->get_col($wpdb->prepare("SELECT ID FROM $wpdb->posts WHERE guid='%s';", $image_url )); 
        return $attachment[0]; 
}

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
  require get_template_directory() . '/inc/jetpack.php';
}

function fezziwig_acf_init() {

  if( ! function_exists('fezziwig_acf_init') )
    return;

  // register a testimonial block
  acf_register_block(array(
    'name'				=> 'event',
    'title'				=> __( 'Event' ),
    'description'		=>  __( 'A custom event block.' ),
    'render_template'	=> 'blocks/block-event.php',
    'category'			=> 'formatting',
    'icon'				=> 'admin-comments',
    'mode'			    => 'edit',
    'keywords'			=> array( 'event', 'calendar', 'schedule' )
  ));
}

add_action('acf/init', 'fezziwig_acf_init');

