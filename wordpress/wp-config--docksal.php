<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', "default" );

/** MySQL database username */
define( 'DB_USER', "user" );

/** MySQL database password */
define( 'DB_PASSWORD', "user" );

/** MySQL hostname */
define( 'DB_HOST', "db" );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '@*nK _pz6$y&b!CUq-t-4 $&V%`ku5fIu9Dor9i1n_aK#PFbh{-~4asSDL=s(9v{' );
define( 'SECURE_AUTH_KEY',   'REeb9f3 V>H|6$mK^E-3KMHU#[grS&R@:)i3Q9uigzLY8xj2X ~c`o_n9Qa=CEE^' );
define( 'LOGGED_IN_KEY',     'jfNwAK@B4Qn 5AiXI9O>},g>Hl.uAa;pvM>9p_$E1;Nif(66c43M75x;GFs*[;nt' );
define( 'NONCE_KEY',         'C/7G9}$h,4.Xs4.b73F!8,^Sf!Gd&suZY2Mm74wm%KOZk+G{D#6iC{yDs|8aQL+|' );
define( 'AUTH_SALT',         '_D>~UGqyVg>I*4<hY9 8lCuA.8H.]3JV8n.?ndNX W+nxX2nQQk,okl%]6Azj1:P' );
define( 'SECURE_AUTH_SALT',  ';FSiU+NlCX2/rz;WByp P<hx>.ftWqvbN}5O`&.=^iO&m$Mt{j[x+}hk1c:n*YK*' );
define( 'LOGGED_IN_SALT',    'bF]OJQ!87|nsXo`V9y]*z&>nxQ.eN5Fe%VxuN]JR35Bgxgut0rEJ{<w-,;NdB7c`' );
define( 'NONCE_SALT',        'e5uz)N]|:/AXS8B?|p]U_6;vJ=6~gx}+-Y5AR(B6@fr><WheDqZU$Di^]ESS|I9q' );
define( 'WP_CACHE_KEY_SALT', '^(~r-{6HahgAj]Zrg}T/+JN(9.u8GhHXkA_3:SC%89TxM5bB>KK{2t<P!MiPB%Oh' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

if ( file_exists(ABSPATH . '/wp-config-local.php') ) {
	require_once( ABSPATH . 'wp-config-local.php' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
