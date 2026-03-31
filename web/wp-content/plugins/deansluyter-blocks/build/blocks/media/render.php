<?php
/**
 * Front-end render template for deansluyter/media block.
 *
 * Available variables:
 *   $attributes (array)  Block attributes.
 *   $content    (string) Block inner content (empty for dynamic blocks).
 *   $block      (WP_Block) Block instance.
 *
 * @package deansluyter-blocks
 */

$image_id  = ! empty( $attributes['imageId'] ) ? (int) $attributes['imageId'] : 0;
$image_url = ! empty( $attributes['imageUrl'] ) ? $attributes['imageUrl'] : '';
$image_alt = ! empty( $attributes['imageAlt'] ) ? $attributes['imageAlt'] : '';
$title     = ! empty( $attributes['title'] ) ? $attributes['title'] : '';
$subtitle  = ! empty( $attributes['subtitle'] ) ? $attributes['subtitle'] : '';
$date      = ! empty( $attributes['date'] ) ? $attributes['date'] : '';
$desc      = ! empty( $attributes['description'] ) ? $attributes['description'] : '';
$length    = ! empty( $attributes['length'] ) ? $attributes['length'] : '';
$link_url  = ! empty( $attributes['linkUrl'] ) ? $attributes['linkUrl'] : '';
$link_text = ! empty( $attributes['linkText'] ) ? $attributes['linkText'] : '';

$wrapper_attrs = get_block_wrapper_attributes( array( 'class' => 'media' ) );
?>
<div <?php echo $wrapper_attrs; ?>>
<?php if ( $image_url ) : ?>
	<div class="media--image">
		<div class="inner">
			<?php if ( $link_url ) : ?>
				<a href="<?php echo esc_url( $link_url ); ?>" target="_blank" rel="noopener noreferrer">
			<?php endif; ?>

			<img src="<?php echo esc_url( $image_url ); ?>" alt="<?php echo esc_attr( $image_alt ); ?>" class="image" />

			<?php if ( $link_url ) : ?>
				</a>
			<?php endif; ?>
		</div>
	</div>
<?php endif; ?>

	<div class="media--info">
		<div class="inner">
			<div class="info-header">
			<?php if ( $title ) : ?>
				<div class="media--title">
					<h3>
						<?php if ( $link_url ) : ?>
							<a href="<?php echo esc_url( $link_url ); ?>" target="_blank" rel="noopener noreferrer">
						<?php endif; ?>
						<span><?php echo wp_kses_post( $title ); ?></span>
						<?php if ( $link_url ) : ?>
							</a>
						<?php endif; ?>
					</h3>
				</div>
			<?php endif; ?>

			<?php if ( $subtitle ) : ?>
				<div class="media--subtitle">
					<h4><?php echo wp_kses_post( $subtitle ); ?></h4>
				</div>
			<?php endif; ?>

			<?php if ( $date ) : ?>
				<div class="media--date">
					<h4><?php echo wp_kses_post( $date ); ?></h4>
				</div>
			<?php endif; ?>
			</div>

			<div class="info-body">
			<?php if ( $desc ) : ?>
				<div class="media--description">
					<div><?php echo wp_kses_post( $desc ); ?></div>
				</div>
			<?php endif; ?>

			<?php if ( $length ) : ?>
				<div class="media--length">
					<div><?php echo esc_html( $length ); ?></div>
				</div>
			<?php endif; ?>

			<?php if ( $link_url && $link_text ) : ?>
				<div class="media--link">
					<a href="<?php echo esc_url( $link_url ); ?>" target="_blank" rel="noopener noreferrer">
						<span><?php echo esc_html( $link_text ); ?></span>
					</a>
				</div>
			<?php endif; ?>
			</div>
		</div>
	</div>
</div>
