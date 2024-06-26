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
$url = get_field( 'media_link' );
$link_text = get_field( 'media_link_text' );
$length = get_field( 'media_length' );
?>

<?php ?>

<div class="media">

  <?php if( !empty( $photo ) ) : ?>
    <div class="media--image">
      <div class="inner">
        <?php if( !empty( $url ) ) : ?>
            <?php echo '<a target="_blank" href="' . esc_html( $url ) . '">'; ?>
        <?php endif; ?>
        <?php echo wp_get_attachment_image( $photo['ID'], 'width-lg', null, array( 'class' => 'image' ) ); ?>
        <?php if( !empty( $url ) ) : ?>
          </a>
        <?php endif; ?>
      </div>
    </div>
  <?php endif; ?>


  <div class="media--info">
    <div class="inner">

      <div class="info-header">
        <?php if( !empty( $title ) ) : ?>
          <div class="media--title">
            <h3>
            <?php if( !empty( $url ) ) : ?>
              <?php echo '<a target="_blank" href="' . esc_html( $url ) . '">'; ?>
            <?php endif; ?>
            <?php echo esc_html( $title ); ?>
            <?php if( !empty( $url ) ) : ?>
              </a>
            <?php endif; ?>
            </h3>
          </div>
        <?php endif; ?>

        <?php if( !empty( $subtitle ) ) : ?>
          <div class="media--subtitle">
            <h4><?php echo esc_html( $subtitle ); ?></h4>
          </div>
        <?php endif; ?>

        <?php if( !empty( $date ) ) : ?>
          <div class="media--date">
            <h4><?php echo esc_html( $date ); ?></h4>
          </div>
        <?php endif; ?>
      </div>

      <div class="info-body">
        <?php if( !empty( $description ) ) : ?>
          <div class="media--description">
            <?php echo $description; ?>
          </div>
        <?php endif; ?>

        <?php if( !empty( $length ) ) : ?>
          <div class="media--length">
            <?php echo esc_html( $length ); ?>
          </div>
        <?php endif; ?>

        <?php if( !empty( $url ) && ( !empty( $link_text ) ) ) : ?>
          <div class="media--link">
            <?php echo '<a target="_blank" href="' . esc_html( $url ) . '">' . esc_html( $link_text ) . '</a>'; ?>
          </div>
        <?php endif; ?>
      </div>

    </div>
  </div>
</div>
