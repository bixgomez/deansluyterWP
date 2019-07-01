<?php

/**
 * This file should be used to render each module instance.
 * You have access to two variables in this file:
 *
 * $module An instance of your module class.
 * $settings The module's settings.
 *
 * Example:
 */

?>

<div class="bb--image-w-text config--<?php echo $settings->image_text_config; ?>">

  <?php if ( ($settings->image_text_config == 'image_left') || ($settings->image_text_config == 'image_above') ) : ?>
    <div class="bb--image-w-text--image">
      <img src="<?php echo wp_get_attachment_url($settings->image); ?>">
    </div>
  <?php endif; ?>

  <?php if ($settings->title || $settings->subtitle || $settings->body || $settings->link_url || $settings->link_text) : ?>
    <div class="bb--image-w-text--text">

      <?php if ($settings->title) : ?>
        <h3 class="bb--image-w-text--title"><?php echo $settings->title; ?></h3>
      <?php endif; ?>

      <?php if ($settings->subtitle) : ?>
        <h4 class="bb--image-w-text--subtitle"><?php echo $settings->subtitle; ?></h4>
      <?php endif; ?>

      <?php if ($settings->body) : ?>
        <div class="bb--image-w-text--body">
          <?php echo $settings->body; ?>
        </div>
      <?php endif; ?>

      <?php if ($settings->link_url && $settings->link_text) : ?>
        <div class="bb--image-w-text--link">
          <a href="<?php echo $settings->link_url; ?>"><?php echo $settings->link_text; ?></a>
        </div>
      <?php endif; ?>

    </div>
  <?php endif; ?>

  <?php if ( ($settings->image_text_config == 'image_right') || ($settings->image_text_config == 'image_bottom') ) : ?>
    <div class="bb--image-w-text--image">
      <img src="<?php echo wp_get_attachment_url($settings->image); ?>">
    </div>
  <?php endif; ?>

</div>
