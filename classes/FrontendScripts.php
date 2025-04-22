<?php

namespace CatalogX;
use Catalogx\Enquiry\Frontend as EnquiryFrontend;
/**
 * CatalogX FrontendScripts class
 *
 * @class 		FrontendScripts class
 * @version		6.0.4
 * @author 		MultivendorX
 */
class FrontendScripts {

    private static $scripts = [];
    private static $styles = [];

    public function __construct() {
        add_action( 'wp_enqueue_scripts', [ $this, 'load_scripts' ] );
    }

    private static function register_script( $handle, $path, $deps = [], $version="" ) {
		self::$scripts[] = $handle;
		wp_register_script( $handle, $path, $deps, $version, true );
	}

    private static function register_style( $handle, $path, $deps = [], $version="" ) {
		self::$styles[] = $handle;
		wp_register_style( $handle, $path, $deps, $version );
	}

    private static function register_scripts() {
		$version = CatalogX()->version;

		$register_scripts = array(
			'catalogx-enquiry-frontend-script' => [
				'src'     => CatalogX()->plugin_url . 'modules/Enquiry/assets/js/frontend.js',
				'deps'    => [ 'jquery', 'jquery-blockui' ],
				'version' => $version,
            ],
			'enquiry-form-script' => [
				'src'     => CatalogX()->plugin_url . 'build/blocks/enquiryForm/index.js',
				'deps'    => [ 'jquery', 'jquery-blockui', 'wp-element', 'wp-i18n', 'wp-blocks', 'wp-hooks' ],
				'version' => $version,
            ],
			'catalogx-quote-cart-script' => [
				'src'     => CatalogX()->plugin_url . 'build/blocks/quote-cart/index.js',
				'deps'    => [ 'jquery', 'jquery-blockui', 'wp-element', 'wp-i18n', 'wp-blocks' ],
				'version' => $version,
            ],
			'add-to-quote-cart-script' => [
				'src'     => CatalogX()->plugin_url . 'modules/Quote/js/frontend.js',
				'deps'    => [ 'jquery' ],
				'version' => $version,
            ],
		);
		foreach ( $register_scripts as $name => $props ) {
			self::register_script( $name, $props['src'], $props['deps'], $props['version'] );
		}
	}

    private static function register_styles() {
		$version = CatalogX()->version;

		$register_styles = [
			'catalogx-frontend-style'   => [
				'src'     => CatalogX()->plugin_url . 'assets/css/frontend.css',
				'deps'    => array(),
				'version' => $version,
            ],
			'catalogx-enquiry-form-style'   => [
				'src'     => CatalogX()->plugin_url . 'build/blocks/enquiryForm/index.css',
				'deps'    => array(),
				'version' => $version,
            ],
			'quote-cart-style'   => [
				'src'     => CatalogX()->plugin_url . 'build/blocks/quote-cart/index.css',
				'deps'    => array(),
				'version' => $version,
            ],
			
        ];
		foreach ( $register_styles as $name => $props ) {
			self::register_style( $name, $props['src'], $props['deps'], $props['version'] );
		}
	}

    /**
	 * Register/queue frontend scripts.
	 */
	public static function load_scripts() {
        self::register_scripts();
		self::register_styles();
    }

    public static function localize_scripts( $handle ) {
		$current_user = wp_get_current_user();

		$localize_scripts = array(
			'catalogx-enquiry-frontend-script' => [
				'object_name' => 'enquiryFrontend',
                'data' => [
                    'ajaxurl' => admin_url('admin-ajax.php'),
                ],
            ],
			'enquiry-form-script' => [
				'object_name' => 'enquiryFormData',
                'data' => [
                    'apiurl'        => untrailingslashit(get_rest_url()),
                    'nonce'         => wp_create_nonce( 'wp_rest' ),
                    'settings_free' => EnquiryFrontend::catalogx_free_form_settings(),
                    'settings_pro'  => EnquiryFrontend::catalogx_pro_form_settings(),
                    'khali_dabba'    => \CatalogX\Utill::is_khali_dabba(),
                    'product_data'  => (\CatalogX\Utill::is_khali_dabba() && !empty(CatalogX_Pro()->cart->get_cart_data())) ? CatalogX_Pro()->cart->get_cart_data() : '',
                    'default_placeholder'  => [
                        'name'  => $current_user->display_name,
                        'email' => $current_user->user_email
                    ],
                    'content_before_form' => apply_filters('catalogx_add_content_before_form', ''),
                    'content_after_form'  => apply_filters('catalogx_add_content_after_form', ''),
                    'error_strings' => [
                        'required' => __("This field is required", "catalogx"),
                        'invalid' => __("Invalid email format", "catalogx"),
                    ]
                ],
            ],
			'add-to-quote-cart-script' => [
				'object_name' => 'addToQuoteCart',
                'data' => [
                    'ajaxurl' => admin_url('admin-ajax.php'),
                    'loader' => admin_url('images/wpspin_light.gif'),
                    'no_more_product' => __('No more product in Quote list!', 'catalogx'),
                ],
            ],
			'catalogx-enquiry-button-editor-script' => [
				'object_name' => 'enquiryButton',
                'data' => [
                    'apiUrl' => untrailingslashit(get_rest_url()),
                    'restUrl' => CatalogX()->rest_namespace,
                    'nonce'   => wp_create_nonce( 'catalog-security-nonce' )
                ],
            ],
			'catalogx-quote-button-editor-script' => [
				'object_name' => 'quoteButton',
                'data' => [
                    'apiUrl' => untrailingslashit(get_rest_url()),
                    'restUrl' => CatalogX()->rest_namespace,
                    'nonce'   => wp_create_nonce( 'catalog-security-nonce' )
                ],
            ],
			'catalogx-quote-cart-editor-script' => [
				'object_name' => 'quoteCart',
                'data' => [
                    'apiUrl' => untrailingslashit(get_rest_url()),
                    'restUrl' => CatalogX()->rest_namespace,
                    'nonce'  => wp_create_nonce('wp_rest'),
                    'name'  => $current_user->display_name,
                    'email' => $current_user->user_email,
                    'quote_my_account_url'  => site_url('/my-account/all-quotes/'),
                    'khali_dabba'           => Utill::is_khali_dabba(),
                ],
            ],
            'catalogx-quote-button-script' => [
				'object_name' => 'quoteButton',
                'data' => [
                    'apiUrl' => untrailingslashit(get_rest_url()),
                    'restUrl' => CatalogX()->rest_namespace,
                    'nonce'   => wp_create_nonce( 'catalog-security-nonce' )
                ],
            ],
			'catalogx-quote-cart-script' => [
				'object_name' => 'quoteCart',
                'data' => [
                    'apiUrl' => untrailingslashit(get_rest_url()),
                    'restUrl' => CatalogX()->rest_namespace,
                    'nonce'  => wp_create_nonce('wp_rest'),
                    'name'  => $current_user->display_name,
                    'email' => $current_user->user_email,
                    'quote_my_account_url'  => site_url('/my-account/all-quotes/'),
                    'khali_dabba'           => Utill::is_khali_dabba(),
                ],
            ],
			'catalogx-enquiry-button-script' => [
				'object_name' => 'enquiryButton',
                'data' => [
                    'apiUrl' => untrailingslashit(get_rest_url()),
                    'restUrl' => CatalogX()->rest_namespace,
                    'nonce'   => wp_create_nonce( 'catalog-security-nonce' )
                ],
            ],
		);
		
        if ( isset( $localize_scripts[ $handle ] ) ) {
            wp_set_script_translations( $handle, CatalogX()->version );
            $props = $localize_scripts[ $handle ];
            self::localize_script( $handle, $props['object_name'], $props['data'] );
        }
	}

    private static function localize_script( $handle, $name, $data = [], ) {
		wp_localize_script( $handle, $name, $data );
	}

    public static function enqueue_script( $handle ) {
		wp_enqueue_script( $handle );
	}

    public static function enqueue_style( $handle ) {
		wp_enqueue_style( $handle );
	}
    
}