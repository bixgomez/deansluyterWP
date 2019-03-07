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
      <?php echo wp_get_attachment_image( $photo['ID'], 'width-lg', null, array( 'class' => 'image' ) ); ?>
      </div>
    </div>
  <?php endif; ?>


  <div class="event--info">
    <div class="inner">

      <div class="info-header">
        <?php if( !empty( $date ) ) : ?>
          <div class="event--date">
            <h4><?php echo esc_html( $date ); ?></h4>
          </div>
        <?php endif; ?>

        <?php if( !empty( $subtitle ) ) : ?>
          <div class="event--subtitle">
            <h4><?php echo esc_html( $subtitle ); ?></h4>
          </div>
        <?php endif; ?>

        <?php if( !empty( $title ) ) : ?>
          <div class="event--title">
            <h3><?php echo esc_html( $title ); ?></h3>
          </div>
        <?php endif; ?>
      </div>

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

