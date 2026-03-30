<?php
/**
 * Front-end render template for deansluyter/home-page-feature block.
 *
 * @package deansluyter-blocks
 */

$image_id  = ! empty( $attributes['imageId'] ) ? (int) $attributes['imageId'] : 0;
$image_url = ! empty( $attributes['imageUrl'] ) ? $attributes['imageUrl'] : '';
$image_alt = ! empty( $attributes['imageAlt'] ) ? $attributes['imageAlt'] : '';
$title     = ! empty( $attributes['title'] ) ? $attributes['title'] : '';
$subtitle  = ! empty( $attributes['subtitle'] ) ? $attributes['subtitle'] : '';
$body      = ! empty( $attributes['body'] ) ? $attributes['body'] : '';
$link_url  = ! empty( $attributes['linkUrl'] ) ? $attributes['linkUrl'] : '';
$link_text = ! empty( $attributes['linkText'] ) ? $attributes['linkText'] : '';

if ( ! $image_id && '' === $image_url && '' === $title && '' === $subtitle && '' === $body && '' === $link_text && '' === $link_url ) {
	return '';
}

$wrapper_attrs = get_block_wrapper_attributes(
	array(
		'class' => 'item home-page-feature image-position--first',
	)
);

$image_html = '';

if ( $image_id ) {
	$image_html = wp_get_attachment_image(
		$image_id,
		'homepage feature mobile',
		false,
		array(
			'alt'   => $image_alt,
			'class' => 'image',
		)
	);
} elseif ( $image_url ) {
	$image_html = sprintf(
		'<img src="%1$s" alt="%2$s" class="image" />',
		esc_url( $image_url ),
		esc_attr( $image_alt )
	);
}
?>
<div <?php echo $wrapper_attrs; ?>>
	<?php if ( $link_url && $link_text ) : ?>
		<a class="home-page-feature--link" href="<?php echo esc_url( $link_url ); ?>"><?php echo esc_html( $link_text ); ?></a>
	<?php endif; ?>

	<?php if ( $image_html ) : ?>
		<div class="home-page-feature--featured-image">
			<?php echo $image_html; ?>
		</div>
	<?php endif; ?>

	<?php if ( $title || $subtitle ) : ?>
		<div class="home-page-feature--title">
			<?php if ( $title ) : ?>
				<h3><?php echo esc_html( $title ); ?></h3>
			<?php endif; ?>
			<?php if ( $subtitle ) : ?>
				<p class="home-page-feature--subtitle"><?php echo esc_html( $subtitle ); ?></p>
			<?php endif; ?>
		</div>
	<?php endif; ?>

	<?php if ( $body ) : ?>
		<div class="home-page-feature--body">
			<?php echo wp_kses_post( $body ); ?>
		</div>
	<?php endif; ?>

	<?php if ( $link_url && $link_text ) : ?>
		<div class="home-page-feature--link-text">
			<?php echo esc_html( $link_text ); ?>
		</div>
	<?php endif; ?>
</div>
