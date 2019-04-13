<?php
/**
 * Home Page Feature block
 *
 * @package      ClientName
 * @author       Bill Erickson
 * @since        1.0.0
 * @license      GPL-2.0+
 **/

$title = get_field( 'title' );
$body = get_field( 'body' );
$body_extra = get_field( 'extra_text' );
$url = get_field( 'link' );
$link_text = get_field( 'link_text' );
$background_image = get_field( 'featured_image' );
?>

<?php ?>

<div class="item home-page-feature">

  <a class="home-page-feature--link" href="<?php echo esc_html( $url ) ?>"><?php echo $link_text; ?></a>

  <?php if( !empty( $title ) ) : ?>
    <div class="home-page-feature--title">
      <h3><?php echo esc_html( $title ); ?></h3>
    </div>
  <?php endif; ?>

  <?php if( !empty( $body ) ) : ?>
    <div class="home-page-feature--body">
      <?php echo $body; ?>
      <?php if( !empty( $body_extra ) ) : ?>
        <div class="home-page-feature--body-extra">
          <?php echo $body_extra; ?>
        </div>
      <?php endif; ?>
    </div>
  <?php endif; ?>

  <?php if( !empty( $link_text ) ) : ?>
    <div class="home-page-feature--link-text">
      <?php echo $link_text; ?>
    </div>
  <?php endif; ?>

  <?php if( !empty( $background_image ) ) : ?>
    <div class="home-page-feature--background-image">
      <?php
      echo wp_get_attachment_image( $background_image, 'full' );
      ?>
    </div>
  <?php endif; ?>

</div>
