<?php

add_action( 'init', 'book_cpt', 0 );

function book_cpt() {

  $labels = array(
    'name'                  => _x( 'Books', 'Post Type General Name', 'text_domain' ),
    'singular_name'         => _x( 'Book', 'Post Type Singular Name', 'text_domain' ),
    'all_items'             => __( 'All Books', 'text_domain' ),
    'add_new'               => __( 'Add New Book', 'text_domain' ),
    'add_new_item'          => __( 'Add New Book', 'text_domain' ),
    'edit_item'             => __( 'Edit Book', 'text_domain' ),
    'menu_name'             => __( 'Books', 'text_domain' ),
    'name_admin_bar'        => __( 'Book', 'text_domain' ),
    'archives'              => __( 'Book Archives', 'text_domain' ),
    'attributes'            => __( 'Book Attributes', 'text_domain' ),
    'parent_item_colon'     => __( 'Parent Book:', 'text_domain' ),
    'new_item'              => __( 'New Book', 'text_domain' ),
    'update_item'           => __( 'Update Book', 'text_domain' ),
    'view_item'             => __( 'View Book', 'text_domain' ),
    'search_items'          => __( 'Search Book', 'text_domain' ),
    'not_found'             => __( 'Book not found', 'text_domain' ),
    'not_found_in_trash'    => __( 'Book not found in Trash', 'text_domain' ),
    'featured_image'        => __( 'Featured Image', 'text_domain' ),
    'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
    'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
    'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
    'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
    'uploaded_to_this_item' => __( 'Uploaded to this book', 'text_domain' ),
    'items_list'            => __( 'Books list', 'text_domain' ),
    'items_list_navigation' => __( 'Books list navigation', 'text_domain' ),
    'filter_items_list'     => __( 'Filter books list', 'text_domain' ),
  );

  $rewrite = array(
    'slug'                  => 'book',
    'with_front'            => true,
    'pages'                 => false,
    'feeds'                 => true,
  );

  $args = array(
    'label'                 => __( 'Book', 'text_domain' ),
    'description'           => __( 'Any book that you have written.', 'text_domain' ),
    'labels'                => $labels,
    'supports'              => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
    'hierarchical'          => false,
    'public'                => true,
    'show_ui'               => true,
    'show_in_menu'          => true,
    'menu_position'         => 20,
    'menu_icon'             => 'dashicons-book-alt',
    'show_in_admin_bar'     => true,
    'show_in_nav_menus'     => true,
    'can_export'            => true,
    'has_archive'           => true,
    'exclude_from_search'   => false,
    'publicly_queryable'    => true,
    'rewrite'               => $rewrite,
    'capability_type'       => 'post',
  );

  register_post_type( 'book', $args );
}
