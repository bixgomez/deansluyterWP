<?php
/**
 * Media block
 *
 * @package      ClientName
 * @author       Bill Erickson
 * @since        1.0.0
 * @license      GPL-2.0+
 **/

$photo = get_field( 'media_image' );
$title = get_field( 'media_title' );
$subtitle = get_field( 'media_subtitle' );
$date = get_field( 'media_date' );
$description = get_field( 'media_description' );
$notes = get_field( 'media_notes' );
?>

<?php ?>

<div class="media">

  <?php if( !empty( $photo ) ) : ?>
    <div class="media--image">
      <div class="inner">
      <?php echo wp_get_attachment_image( $photo['ID'], 'width-lg', null, array( 'class' => 'team-member--avatar' ) ); ?>
      </div>
    </div>
  <?php endif; ?>


  <div class="media--info">
    <div class="inner">

      <?php if( !empty( $date ) ) : ?>
        <div class="media--date">
          <?php echo esc_html( $date ); ?>
        </div>
      <?php endif; ?>

      <?php if( !empty( $subtitle ) ) : ?>
        <div class="media--subtitle">
          <?php echo esc_html( $subtitle ); ?>
        </div>
      <?php endif; ?>

      <?php if( !empty( $title ) ) : ?>
        <div class="media--title">
          <?php echo esc_html( $title ); ?>
        </div>
      <?php endif; ?>

      <?php if( !empty( $description ) ) : ?>
        <div class="media--body">
          <?php echo $description; ?>
        </div>
      <?php endif; ?>

      <?php if( !empty( $notes ) ) : ?>
        <div class="media--notes">
          <?php echo esc_html( $notes ); ?>
        </div>
      <?php endif; ?>

    </div>
  </div>

</div>

