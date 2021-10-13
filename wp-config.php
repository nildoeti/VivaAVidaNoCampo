<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'vivacampo' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Re@802697' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'e0^PlgPU}WU<{t;P/Abwk@4Ig{d$FBq]Jw@-Z#TnAjMp-msg>x)<WG@_LlO%!M1#' );
define( 'SECURE_AUTH_KEY',  '3fkz$-R2Q:<`nTST:C?8L}D,3.Lz?j_`c0|V(&Xc2*DC|9ldMndjT]H~{0_t~FI$' );
define( 'LOGGED_IN_KEY',    'C[IO|Tc2xh_yq#j8kZA[SXQhO(e.BnMj~YF2ETu%Ikh*LlJyWZ_pX[6*PUrV)?px' );
define( 'NONCE_KEY',        ',879@$//JFkh//{h(8wV!JR5Y8#lqjmo$4X4v@Jx,oC]xm3C*j+$k>>my3@A/c3)' );
define( 'AUTH_SALT',        'rFW )2oc-ph65@cTb{pFPc&wV.NZtrDQ )raFo3+JPHf:oBgxud[lO;{yw}R2$p7' );
define( 'SECURE_AUTH_SALT', '48W])<{I0-ufg^AXC@.NvFqzu(cz.se)O0iQ^4X7@3<$] tORFt0)eBzefrz?3RF' );
define( 'LOGGED_IN_SALT',   'irT5)$p)?`m]eKV^v-:lHOS*,|7RXn#$<<`0IuB2P:(0TRei7#?tYPGWvoyP>V:z' );
define( 'NONCE_SALT',       'KDULT]b-fK,qS!JdP_#%eypriA#[i-&Hv_={F%;;d1-&hrPrZ3^gT`oN`xJF62>d' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom valuaes between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
