<?php
/**
 * Deansluyter Theme 2026 functions and definitions.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'deansluyter_theme_2026_setup' ) ) :
	/**
	 * Set up theme defaults and register support for various WordPress features.
	 */
	function deansluyter_theme_2026_setup() {
		load_theme_textdomain( 'deansluyter-theme', get_template_directory() . '/languages' );

		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );

		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'deansluyter-theme' ),
			)
		);

		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		add_theme_support(
			'custom-background',
			apply_filters(
				'deansluyter_theme_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		add_theme_support( 'customize-selective-refresh-widgets' );

		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);

		add_theme_support( 'editor-styles' );

		$dist_editor_css = '/dist/css/styles.css';
		$dist_editor_abs = get_theme_file_path( $dist_editor_css );
		$legacy_editor   = '/styles/css/styles_editor.css';
		$legacy_editor_abs = get_theme_file_path( $legacy_editor );

		if ( file_exists( $dist_editor_abs ) ) {
			add_editor_style( get_theme_file_uri( $dist_editor_css ) );
		} elseif ( file_exists( $legacy_editor_abs ) ) {
			add_editor_style( get_theme_file_uri( $legacy_editor ) );
		}
	}
endif;
add_action( 'after_setup_theme', 'deansluyter_theme_2026_setup' );


/**
 * Enqueue admin styles.
 */
function deansluyter_theme_2026_admin_style() {
	$legacy_admin_rel = '/styles/css/admin.css';
	$legacy_admin_abs = get_theme_file_path( $legacy_admin_rel );

	if ( file_exists( $legacy_admin_abs ) ) {
		wp_enqueue_style(
			'admin-styles',
			get_theme_file_uri( $legacy_admin_rel ),
			array(),
			(string) filemtime( $legacy_admin_abs )
		);
		return;
	}

	$dist_css_rel = '/dist/css/admin.css';
	$dist_css_abs = get_theme_file_path( $dist_css_rel );
	if ( file_exists( $dist_css_abs ) ) {
		wp_enqueue_style(
			'deansluyter-theme-2026-admin-fallback',
			get_theme_file_uri( $dist_css_rel ),
			array(),
			(string) filemtime( $dist_css_abs )
		);
	}
}
add_action( 'admin_enqueue_scripts', 'deansluyter_theme_2026_admin_style' );

/**
 * Load Gutenberg-specific stylesheet.
 */
function deansluyter_theme_2026_extra_gutenberg_assets() {
	$legacy_gutenberg_rel = '/styles/css/styles_editor_extra.css';
	$legacy_gutenberg_abs = get_theme_file_path( $legacy_gutenberg_rel );

	if ( file_exists( $legacy_gutenberg_abs ) ) {
		wp_enqueue_style(
			'extra-gutenberg',
			get_theme_file_uri( $legacy_gutenberg_rel ),
			array(),
			(string) filemtime( $legacy_gutenberg_abs )
		);
		return;
	}

	$dist_css_rel = '/dist/css/styles_editor_extra.css';
	$dist_css_abs = get_theme_file_path( $dist_css_rel );
	if ( file_exists( $dist_css_abs ) ) {
		wp_enqueue_style(
			'deansluyter-theme-2026-gutenberg-fallback',
			get_theme_file_uri( $dist_css_rel ),
			array(),
			(string) filemtime( $dist_css_abs )
		);
	}
}
add_action( 'enqueue_block_editor_assets', 'deansluyter_theme_2026_extra_gutenberg_assets' );
/**
 * Set the content width in pixels.
 */
function deansluyter_theme_2026_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'deansluyter_theme_content_width', 640 );
}
add_action( 'after_setup_theme', 'deansluyter_theme_2026_content_width', 0 );

/**
 * Register widget areas.
 */
function deansluyter_theme_2026_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'deansluyter-theme' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'deansluyter-theme' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);

	register_sidebar(
		array(
			'name'          => esc_html__( 'Site Navigation', 'deansluyter-theme' ),
			'id'            => 'site-navigation',
			'description'   => esc_html__( 'Add widgets here.', 'deansluyter-theme' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);

	register_sidebar(
		array(
			'name'          => esc_html__( 'Footer', 'deansluyter-theme' ),
			'id'            => 'footer',
			'description'   => esc_html__( 'Add widgets here.', 'deansluyter-theme' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'deansluyter_theme_2026_widgets_init' );

/**
 * Enqueue front-end scripts and styles.
 */
function deansluyter_theme_2026_scripts() {
	$theme_version = wp_get_theme()->get( 'Version' );

	wp_enqueue_style( 'deansluyter-theme-2026-style', get_stylesheet_uri(), array(), $theme_version );

	$css_rel_path = '/dist/css/styles.css';
	$css_abs_path = get_theme_file_path( $css_rel_path );
	if ( file_exists( $css_abs_path ) ) {
		wp_enqueue_style(
			'deansluyter-theme-2026-styles',
			get_theme_file_uri( $css_rel_path ),
			array( 'deansluyter-theme-2026-style' ),
			(string) filemtime( $css_abs_path )
		);
	}

	$js_rel_path = '/dist/js/script.js';
	$js_abs_path = get_theme_file_path( $js_rel_path );
	if ( file_exists( $js_abs_path ) ) {
		wp_enqueue_script(
			'deansluyter-theme-2026-script',
			get_theme_file_uri( $js_rel_path ),
			array( 'jquery' ),
			(string) filemtime( $js_abs_path ),
			true
		);
	}

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'deansluyter_theme_2026_scripts' );

/**
 * Retrieve the attachment ID from a file URL.
 *
 * @param string $image_url Image URL.
 * @return int|null
 */
function pippin_get_image_id( $image_url ) {
	global $wpdb;

	$attachment = $wpdb->get_col( $wpdb->prepare( "SELECT ID FROM $wpdb->posts WHERE guid = %s", $image_url ) );
	return ! empty( $attachment[0] ) ? (int) $attachment[0] : null;
}

/**
 * Include theme support files.
 */
$deansluyter_theme_2026_includes = array(
	'/inc/custom-header.php',
	'/inc/template-tags.php',
	'/inc/acf_wysiwyg_height.php',
	'/inc/template-functions.php',
	'/inc/customizer.php',
	'/post-types/posttype--article.php',
	'/post-types/posttype--book.php',
);

foreach ( $deansluyter_theme_2026_includes as $include_file ) {
	$include_path = get_theme_file_path( $include_file );
	if ( file_exists( $include_path ) ) {
		require $include_path;
	}
}

if ( defined( 'JETPACK__VERSION' ) ) {
	$jetpack_file = get_theme_file_path( '/inc/jetpack.php' );
	if ( file_exists( $jetpack_file ) ) {
		require $jetpack_file;
	}
}

/**
 * Register ACF blocks.
 */
function deansluyter_theme_2026_acf_init() {
	$register_callback = null;

	if ( function_exists( 'acf_register_block_type' ) ) {
		$register_callback = 'acf_register_block_type';
	} elseif ( function_exists( 'acf_register_block' ) ) {
		$register_callback = 'acf_register_block';
	}

	if ( ! $register_callback ) {
		return;
	}

	$register_callback(
		array(
			'name'            => 'event',
			'title'           => __( 'Event', 'deansluyter-theme' ),
			'description'     => __( 'A custom event block.', 'deansluyter-theme' ),
			'render_template' => 'blocks/block__event.php',
			'category'        => 'formatting',
			'icon'            => 'admin-comments',
			'mode'            => 'edit',
			'keywords'        => array( 'event', 'calendar', 'schedule' ),
		)
	);

	$register_callback(
		array(
			'name'            => 'media',
			'title'           => __( 'Media', 'deansluyter-theme' ),
			'description'     => __( 'A custom media block.', 'deansluyter-theme' ),
			'render_template' => 'blocks/block__media.php',
			'category'        => 'formatting',
			'icon'            => 'admin-comments',
			'mode'            => 'edit',
			'keywords'        => array( 'media', 'audio', 'video' ),
		)
	);

	$register_callback(
		array(
			'name'            => 'home-page-feature',
			'title'           => __( 'Home Page Feature', 'deansluyter-theme' ),
			'description'     => __( 'Home page feature block.', 'deansluyter-theme' ),
			'render_template' => 'blocks/block__home-page-feature.php',
			'category'        => 'formatting',
			'icon'            => 'admin-comments',
			'mode'            => 'edit',
			'keywords'        => array( 'home', 'feature', 'front' ),
		)
	);
}
add_action( 'acf/init', 'deansluyter_theme_2026_acf_init' );

/**
 * Add custom image sizes.
 */
function deansluyter_theme_2026_image_sizes() {
	add_image_size( 'homepage feature mobile', 600, 300, true );
	add_image_size( 'homepage feature desktop', 400, 250, true );
	add_image_size( 'book-cover--teaser', 300, 4000, false );
}
add_action( 'after_setup_theme', 'deansluyter_theme_2026_image_sizes' );

/**
 * Add page slug to front-end body classes.
 *
 * @param array $classes Body classes.
 * @return array
 */
function deansluyter_theme_2026_add_slug_body_class( $classes ) {
	global $post;

	if ( isset( $post ) ) {
		$classes[] = $post->post_type . '-' . $post->post_name;
	}

	return $classes;
}
add_filter( 'body_class', 'deansluyter_theme_2026_add_slug_body_class' );

/**
 * Add page slug to admin body class.
 *
 * @param string $classes Existing classes.
 * @return string
 */
function deansluyter_theme_2026_admin_body_class( $classes ) {
	global $post;

	if ( isset( $post ) ) {
		$classes .= ' ' . $post->post_type . '-' . $post->post_name;
	}

	return $classes;
}
add_filter( 'admin_body_class', 'deansluyter_theme_2026_admin_body_class' );
