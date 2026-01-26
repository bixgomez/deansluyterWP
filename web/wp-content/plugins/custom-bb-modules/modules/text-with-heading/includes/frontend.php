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

<div class="bb--text-with-heading">
  <div class="bb--text-with-heading--text">

    <?php if ($settings->title) : ?>
      <h3 class="bb--text-with-heading--title"><?php echo $settings->title; ?></h3>
    <?php endif; ?>

    <?php if ($settings->subtitle) : ?>
      <h4 class="bb--text-with-heading--subtitle"><?php echo $settings->subtitle; ?></h4>
    <?php endif; ?>

    <?php if ($settings->body) : ?>
      <div class="bb--text-with-heading--body">
        <?php echo $settings->body; ?>
      </div>
    <?php endif; ?>

    <?php if ($settings->link_url && $settings->link_text) : ?>
      <div class="bb--text-with-heading--link">
        <a href="<?php echo $settings->link_url; ?>"><?php echo $settings->link_text; ?></a>
      </div>
    <?php endif; ?>

  </div>
</div>
