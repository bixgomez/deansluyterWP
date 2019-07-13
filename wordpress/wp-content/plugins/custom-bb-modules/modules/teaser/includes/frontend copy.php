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


<div class="item home-page-feature image-position--first">
  
  <a class="home-page-feature--link" href="/natural-meditation/">Register now!</a>
      
      <div class="home-page-feature--featured-image">
        <img width="400" height="250" src="http://wp.deansluyter.com/wp-content/uploads/2019/04/omega_path-400x250.jpg" class="attachment-homepage feature desktop size-homepage feature desktop" alt="">
      </div>
      
      <div class="home-page-feature--title">
        <h3>Five Day Retreat, June 2-7</h3>
      </div>
  
      <div class="home-page-feature--body">
        <p>Learn to tap into your inner calm and fear less, even in the face of anxiety, anger, or addiction, with Dean Sluyter.</p>
        <div class="home-page-feature--body-extra">
          <p>Join Dean Sluyter, best-selling author of&nbsp;<em>Natural Meditation</em>&nbsp;and&nbsp;<em>Fear Less</em>, and learn how you can tap into the inner space of boundless “okay-ness” in the thick of your daily life.</p>
        </div>
      </div>

      <div class="home-page-feature--link-text">
        Register now!
      </div>

</div>