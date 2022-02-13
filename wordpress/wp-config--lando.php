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
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'wordpress');

/** MySQL database password */
define('DB_PASSWORD', 'wordpress');

/** MySQL hostname */
define('DB_HOST', 'database');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'uF8=p~)FuHVW|7Hz=q*%6;m_CM$HK,raZ3sMS$Plct!7f[g ,Y23V^O/^5(^~iVx');
define('SECURE_AUTH_KEY',  'wRzw<77;{HkM`Jx PHL<?n #Z@-:Pdy[Vb^TRMi]{&l=S2V!#UMRi|U4M[S 7Q?v');
define('LOGGED_IN_KEY',    '.ueG9L;NBN(lqFj5pp^.I=/yCM,K0eM,W-29D Hj7!k|K;)Y,{M[6CWRP{^L[6qg');
define('NONCE_KEY',        '8XDcqG;a*AS{bSpCyB#IRv)r~L%3[{@z wLF:Oc)BH UQeDCc/~nyq~o6FJmOl??');
define('AUTH_SALT',        ')P&Jw+lea%m6EICz.8GVTfq}zkcpEwC(GAkzxV|rcB0nt@2V|t*(CWe%@  sX.`&');
define('SECURE_AUTH_SALT', '3/+TX<Dix0GbcBLp<(qM*C8/B%mDqV5}PWpkI#VDr-{yP/87GwK7YLbIV`RjU7|c');
define('LOGGED_IN_SALT',   'k#GN<mX)b#&}k5XX<W/Jya-rFVUVB)dC|X@(qZQ9(sYIth>y[(S0LT+2`Y^/h .4');
define('NONCE_SALT',       '<LoI5u`]NMfqQmX8lN+H{|Ag:{r*.G4p,nd)+elT bi+O&+w6b1.u))Z0fZy?C_|');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
  define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define( 'FS_METHOD', 'direct' );
