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
$date = get_field( 'event_date' );
$description = get_field( 'event_description' );
$notes = get_field( 'event_notes' );
?>

<?php ?>

<div class="event">

  <?php if( !empty( $photo ) ) : ?>
    <div class="event--image">
      <div class="inner">
      <?php echo wp_get_attachment_image( $photo['ID'], 'width-lg', null, array( 'class' => 'team-member--avatar' ) ); ?>
      </div>
    </div>
  <?php endif; ?>


  <div class="event--info">
    <div class="inner">

      <?php if( !empty( $date ) ) : ?>
        <div class="event--date">
          <?php echo esc_html( $date ); ?>
        </div>
      <?php endif; ?>

      <?php if( !empty( $subtitle ) ) : ?>
        <div class="event--subtitle">
          <?php echo esc_html( $subtitle ); ?>
        </div>
      <?php endif; ?>

      <?php if( !empty( $title ) ) : ?>
        <div class="event--title">
          <?php echo esc_html( $title ); ?>
        </div>
      <?php endif; ?>

      <?php if( !empty( $description ) ) : ?>
        <div class="event--body">
          <?php echo $description; ?>
        </div>
      <?php endif; ?>

      <?php if( !empty( $notes ) ) : ?>
        <div class="event--notes">
          <?php echo esc_html( $notes ); ?>
        </div>
      <?php endif; ?>

    </div>
  </div>

</div>

