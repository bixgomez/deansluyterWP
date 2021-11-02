<?php
$quotes = get_field("quotes");
$purchase_links = get_field("purchase_links");

echo '<div class="related-book">';

echo '<div class="book-image">';
the_post_thumbnail('book-cover--teaser');
echo '</div>';

echo '<div class="book-text">';

echo '<h3 class="book-title">';
the_title();
echo '</h3>';

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

echo '</div>';

echo '<div class="book-links">';

if( $purchase_links ) {
  echo '<ul class="purchase-links">';
  foreach( $purchase_links as $purchase_link ) {
    $link_text = $purchase_link['link_text'];
    $link_url = $purchase_link['link_url'];
    $link_class = $purchase_link['link_class'];
    echo '<li class="link-item"><a class="link '.$link_class.'" href="'.$link_url.'">'.$link_text.'</a></li>';
  }
  echo '</ul>';
}

echo '</div>';

echo '</div>';
