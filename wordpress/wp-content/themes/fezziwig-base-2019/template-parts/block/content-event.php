<?php
/**
 * EVent block
 *
 * @package      Dean Sluyter
 * @author       Richard Gilbert
 * @since        1.0.0
 * @license      GPL-2.0+
 **/

$title = get_field( 'event_title' );
$subtitle = get_field( 'event_subtitle' );
$image = get_field( 'event_image' );
$description = get_field( 'event_description' );

echo '<div class="team-member">';

echo '<div class="team-member--header">';

if( !empty( $image ) )
  echo wp_get_attachment_image( $image['ID'], 'thumbnail', null, array( 'class' => 'team-member--avatar' ) );

if( !empty( $title ) )
  echo '<h4>' . esc_html( $title ) . '</h4>';

if( !empty( $subtitle ) )
  echo '<h6 class="alt">' . esc_html( $subtitle ) . '</h6>';

echo '</div>';

echo '<div class="team-member--content">' . apply_filters( 'ea_the_content', $description ) . '</div>';

echo '</div>';
