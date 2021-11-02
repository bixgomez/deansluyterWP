<?php

$subtitle = get_field("subtitle");
$additional_text = get_field("additional_text");
$quotes = get_field("quotes");
$purchase_links = get_field("purchase_links");

echo '<div class="featured-book">';

  echo '<div class="book-text">';

    echo '<h1 class="book-title">';
      the_title();
    echo '</h1>';

    echo '<h2 class="book-subtitle">' . $subtitle . '</h2>';

    if( $quotes ) {
      echo '<div class="quotes">';
        foreach( $quotes as $quote ) {
          $quote_text = $quote['quote_text'];
          $quote_attribute = $quote['quote_attribute'];
          echo '<div class="quote">';
          echo '<div class="quote-text">' . $quote_text . '</div>';
          echo '<div class="quote-attribute">' . $quote_attribute . '</div>';
          echo '</div>';
        }
      echo '</div>';
    }

    echo '<div class="book-links">';

      if( $purchase_links ) {
        echo '<ul class="purchase-links">';
          foreach( $purchase_links as $purchase_link ) {
            $link_text = $purchase_link['link_text'];
            $link_url = $purchase_link['link_url'];
            $link_class = $purchase_link['link_class'];
            echo '<li class="link-item"><a class="link '.$link_class.'" href="'.$link_url.'">'.$link_text.'</a></li>';
          }
        echo '</ul><!-- /.purchase-links -->';
      }

    echo '</div><!-- /.book-links -->';

    echo '<div class="additional-text">' . $additional_text . '</div>';

  echo '</div><!-- /.book-text -->';

  echo '<div class="book-image">';
    the_post_thumbnail('book-cover--teaser');
  echo '</div><!-- /.book-image -->';

echo '</div><!-- /.featured-book -->';
