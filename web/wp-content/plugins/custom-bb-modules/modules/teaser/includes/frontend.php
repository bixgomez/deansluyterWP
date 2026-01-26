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
<div class="bb--teaser">

  <div class="bb--teaser--image">

    <?php if ($settings->link_url) : ?>
      <a href="<?php echo $settings->link_url; ?>"><img src="<?php echo wp_get_attachment_url($settings->image); ?>"></a>
    <?php else: ?>
      <img src="<?php echo wp_get_attachment_url($settings->image); ?>">
    <?php endif; ?>

  </div>

  <div class="bb--teaser--text">

    <?php if ($settings->title) : ?>
      <h3 class="bb--teaser--title"><?php echo $settings->title; ?></h3>
    <?php endif; ?>

    <?php if ($settings->subtitle) : ?>
      <h4 class="bb--teaser--subtitle"><?php echo $settings->subtitle; ?></h4>
    <?php endif; ?>

    <?php if ($settings->body) : ?>
      <div class="bb--teaser--body"><?php echo $settings->body; ?></div>
    <?php endif; ?>

    <?php if ($settings->link_url) : ?>
      <div class="bb--teaser--link">
        <a class="button" href="<?php echo $settings->link_url; ?>"><?php echo $settings->link_text; ?></a>
      </div>
    <?php endif; ?>

  </div>
</div>
