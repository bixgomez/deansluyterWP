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
<div class="item home-page-feature image-position--first">
  
<a class="home-page-feature--link" href="<?php echo $settings->link_url; ?>"><?php echo $settings->link_text; ?></a>
    
    <div class="home-page-feature--featured-image">
      <?php if ($settings->link_url) : ?>
        <a href="<?php echo $settings->link_url; ?>"><img width="400" height="250" src="<?php echo wp_get_attachment_url($settings->image); ?>" class="attachment-homepage feature desktop size-homepage feature desktop" alt=""></a>
      <?php else: ?>
        <img width="400" height="250" src="<?php echo wp_get_attachment_url($settings->image); ?>" class="attachment-homepage feature desktop size-homepage feature desktop" alt="">
      <?php endif; ?>

    </div>
    
    <div class="home-page-feature--title">
      <h3><?php echo $settings->title; ?></h3>
    </div>

    <div class="home-page-feature--body">
      <?php echo $settings->body; ?>
      <div class="home-page-feature--body-extra">
        <?php echo $settings->body_extra; ?>
      </div>
    </div>

    <div class="home-page-feature--link-text">
    <?php echo $settings->link_text; ?>
    </div>

</div>
