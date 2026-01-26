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

<div class="bb--biglink">
  <div class="bb--biglink--text">

    <?php if ($settings->title) : ?>
      <h3 class="bb--biglink--title"><?php echo $settings->title; ?></h3>
    <?php endif; ?>

    <?php if ($settings->subtitle) : ?>
      <h4 class="bb--biglink--subtitle"><?php echo $settings->subtitle; ?></h4>
    <?php endif; ?>

    <div class="bb--biglink--link">
      <a class="button" href="<?php echo $settings->link_url; ?>"><?php echo $settings->link_text; ?></a>
    </div>

    <?php if ($settings->body) : ?>
      <p class="bb--biglink--body"><?php echo $settings->body; ?></p>
    <?php endif; ?>

  </div>
</div>
