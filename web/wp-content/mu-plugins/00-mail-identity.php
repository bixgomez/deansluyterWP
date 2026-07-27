<?php
/**
 * Plugin Name: Outgoing mail identity
 * Description: Sets the From address for mail sent by WordPress, replacing the
 *              wordpress@<domain> default. Also aligns the SMTP envelope sender
 *              with the From header, which is what SPF is actually checked
 *              against -- without it, SPF authenticates the wrong domain and
 *              DMARC alignment fails.
 *
 * NOTE: Gravity Forms notifications carry their own From settings, configured
 * per notification. This file governs WordPress core mail (password resets,
 * new user notices, admin alerts) and any plugin that does not override it.
 */

defined( 'ABSPATH' ) || exit;

const SITE_MAIL_FROM = 'do-not-reply@deansluyter.com';

add_filter( 'wp_mail_from', function ( $from ) {
	// Only override WordPress's own default. If something deliberately set a
	// different sender, leave it alone.
	$default = 'wordpress@' . preg_replace( '/^www\./i', '', wp_parse_url( home_url(), PHP_URL_HOST ) );
	return ( $from === $default || ! $from ) ? SITE_MAIL_FROM : $from;
} );

add_filter( 'wp_mail_from_name', function ( $name ) {
	return ( $name === 'WordPress' || ! $name ) ? get_bloginfo( 'name' ) : $name;
} );

/**
 * Align the envelope sender (Return-Path) with the From header.
 *
 * SPF is evaluated against the envelope sender, not the visible From. If they
 * differ, SPF can pass for one domain while DMARC still fails for the other.
 */
add_action( 'phpmailer_init', function ( $phpmailer ) {
	if ( $phpmailer->From ) {
		$phpmailer->Sender = $phpmailer->From;
	}
} );
