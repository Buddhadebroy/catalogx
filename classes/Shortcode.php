<?php

namespace CatalogEnquiry;

class Shortcode {
    /**
     * Shortcode class construct function
     */
	public function __construct() {
		//For quote page
		add_shortcode( 'request_quote', [ $this, 'display_request_quote' ] );
        //For quote thank you page
		add_shortcode( 'request_quote_thank_you', [ $this, 'display_request_quote_thank_you' ] );

		add_shortcode( 'catalog_list_rest_routes', [ $this, 'catalog_list_rest_routes' ] );
    }

    function frontend_scripts() {

        $current_user = wp_get_current_user();
        if (Catalog()->modules->is_active('quote')) {
            wp_enqueue_script('quote_list_js', Catalog()->plugin_url . 'build/blocks/quote-cart/index.js', [ 'jquery', 'jquery-blockui', 'wp-element', 'wp-i18n', 'wp-blocks' ], Catalog()->version, true);
            wp_localize_script(
                'quote_list_js', 'quote_cart', [
                'apiUrl' => untrailingslashit(get_rest_url()),
                'nonce' => wp_create_nonce( 'wp_rest' ),
                'restUrl' => 'catalog/v1',
                'name'  => $current_user->display_name,
                'email' => $current_user->user_email
            ]);
            wp_enqueue_style('quote_list_css', Catalog()->plugin_url . 'build/blocks/quote-cart/index.css');
    
            wp_enqueue_script('quote_thank_you_js', Catalog()->plugin_url . 'build/blocks/quote-thank-you/index.js', [ 'wp-blocks', 'jquery', 'jquery-blockui', 'wp-element', 'wp-i18n' ], Catalog()->version, true);
            wp_localize_script(
                'quote_thank_you_js', 'quote_thank_you', [
                'apiUrl' => untrailingslashit(get_rest_url()),
                'quote_my_account_url'  => site_url('/my-account/all-quotes/'),
                'khali_dabba'           => Utill::is_khali_dabba(),
            ]);
        }
    }

	function display_request_quote() {
        $this->frontend_scripts();
		ob_start();
        ?>
        <div id="request_quote_list">
        </div>
        <?php
		return ob_get_clean();
	}
    
    function display_request_quote_thank_you() {
        $this->frontend_scripts();
        ob_start();
        ?>
        <div id="quote_thank_you_page">
        </div>
        <?php
        return ob_get_clean();
    }

    function catalog_list_rest_routes() {
        $routes = rest_get_server()->get_routes();
        $custom_routes = [];
        $api_base_url = get_rest_url(); // Get the base REST API URL
    
        foreach ($routes as $route => $details) {
            if (strpos($route, Catalog()->rest_namespace) !== false) {
                $custom_routes[] = $route;
            }
        }
    
        ob_start();
        echo '<ol>';
        foreach ($custom_routes as $route) {
            echo '<li>'. esc_url($api_base_url . $route) . '</li>';
        }
        echo '</ol>';
    
        return ob_get_clean();
    }
        

} 