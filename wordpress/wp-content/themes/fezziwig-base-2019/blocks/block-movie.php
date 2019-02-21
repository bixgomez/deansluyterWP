<?php
/**
 * Movie block
 *
 * @package      ClientName
 * @author       Bill Erickson
 * @since        1.0.0
 * @license      GPL-2.0+
 **/

$photo = block_field( 'movie-poster' );
$title = block_field( 'movie-name' );

if( !empty( $photo ) )
  echo '<p>' . esc_html( $photo ) . '</p>';

if( !empty( $title ) )
  echo '<h2>' . esc_html( $title ) . '</h2>';

// store the image ID in a var
$image_id = pippin_get_image_id($photo);
 
// retrieve the thumbnail size of our image
$image_thumb = wp_get_attachment_image_src($image_id, 'thumbnail');
 
// display the image
echo $image_thumb[0];

echo wp_get_attachment_image( $image_id, 'thumbnail', null, array( 'class' => 'team-member--avatar' ) );