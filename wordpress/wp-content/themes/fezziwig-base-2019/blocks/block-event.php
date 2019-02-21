<?php
/**
 * Event block
 *
 * @package      ClientName
 * @author       Bill Erickson
 * @since        1.0.0
 * @license      GPL-2.0+
 **/

$photo = get_field( 'event_image' );
$title = get_field( 'event_title' );
$subtitle = get_field( 'event_subtitle' );
$location = get_field( 'event_location' );
$description = get_field( 'event_description' );
// $notes = get_field( 'event_notes' );


if( !empty( $photo ) )
  echo wp_get_attachment_image( $photo['ID'], 'thumbnail', null, array( 'class' => 'team-member--avatar' ) );

if( !empty( $title ) )
  echo '<h2>' . esc_html( $title ) . '</h2>';

if( !empty( $subtitle ) )
  echo '<h3>' . esc_html( $subtitle ) . '</h3>';

if( !empty( $location ) )
  echo '<h4>' . esc_html( $location ) . '</h4>';

if( !empty( $description ) )
  echo '<p>' . esc_html( $description ) . '</p>';

// if( !empty( $notes ) )
  // echo '<p>' . esc_html( $notes ) . '</p>';


