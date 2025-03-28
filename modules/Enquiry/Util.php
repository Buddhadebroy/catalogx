<?php 

namespace CatalogX\Enquiry;
use CatalogX\Utill;

/**
 * CatalogX Enquiry Module Util class
 *
 * @class 		Util class
 * @version		6.0.0
 * @author 		MultivendorX
 */
class Util {

    /**
     * Check enquiry functionlity available for current user
     * @return bool
     */
    public static function is_available() {
        // Get the current user
        $current_user = wp_get_current_user();

        // Get exclusion setting
        $enquiry_exclusion_setting = CatalogX()->setting->get_option( 'catalogx_enquiry-quote-exclusion_settings', [] );

        // Get userroll exclusion settings
        $userroles_exclusion_settings = isset($enquiry_exclusion_setting[ 'enquiry_exclusion_userroles_list' ]) ? $enquiry_exclusion_setting[ 'enquiry_exclusion_userroles_list' ] : [];
        
        // Get excluded user roles
        $exclude_user_roles = array_map( function( $userrole ) {
            return $userrole[ 'key' ];
        }, $userroles_exclusion_settings );

        // Check current user's role is in exclude user roles
        if ( array_intersect( $exclude_user_roles, $current_user->roles ) ) {
            return false;
        }
        
        // Get user exclusion settings
        $userlist_exclusion_settings = isset($enquiry_exclusion_setting[ 'enquiry_exclusion_user_list' ]) ? $enquiry_exclusion_setting[ 'enquiry_exclusion_user_list' ] : [];

        // Get excluded user ids
        $exclude_user_ids = array_map( function( $userid ) {
            return $userid[ 'key' ];
        }, $userlist_exclusion_settings );

        // Check current user's id is in exclude user id
        if ( in_array( $current_user->ID, $exclude_user_ids ) ) {
            return false;
        }

        return true;
    }

    /**
     * Check enquiry functionlity available for product
     * @return bool
     */
    public static function is_available_for_product($product_id) {
        // Get exclusion setting
        $enquiry_exclusion_setting = CatalogX()->setting->get_option( 'catalogx_enquiry-quote-exclusion_settings', [] );

        // Get product exclusion settings
        $product_exclusion_settings = isset($enquiry_exclusion_setting['enquiry_exclusion_product_list']) ? $enquiry_exclusion_setting['enquiry_exclusion_product_list'] : [];
        // Get excluded products
        $exclude_products = array_map( function( $product ) {
            return $product[ 'key' ];
        }, $product_exclusion_settings );

        // Check current product id is in exclude products
        if ( in_array( $product_id, $exclude_products ) ) {
            return false;
        }

        if (Utill::is_active_plugin('multivendorx')) {
            $product_author = get_mvx_product_vendors($product_id) ? get_mvx_product_vendors($product_id)->id : 0;
            $settings = get_user_meta($product_author, 'vendor_enquiry_settings', true);
            if ($product_author) {
                $product_settings = isset($settings['woocommerce_product_list']) && is_array( $settings['woocommerce_product_list'] ) ? $settings['woocommerce_product_list'] : [];
                if (!empty($product_settings)) {
                    $exclude_products = array_map( function( $product ) {
                        return $product[ 'value' ];
                    }, $product_settings );
            
                    if ( in_array( $product_id, $exclude_products ) ) {
                        return false;
                    }
                }
            }         

            $category_settings = isset($settings['woocommerce_category_list']) && is_array( $settings['woocommerce_category_list'] ) ? $settings['woocommerce_category_list'] : [];
            if (!empty($category_settings)) {
                // Get excluded category
                $exclude_categories = array_filter(array_map(function($category) use ($product_id) {
                    $term_list = wp_get_post_terms($product_id, 'product_cat', ['fields' => 'ids']);
                    return (!empty($term_list) && $category['value'] == $term_list[0]) ? $product_id : null;
                }, $category_settings));
                
                // Check current product id is in exclude categories
                if ( in_array( $product_id, $exclude_categories ) ) {
                    return false;
                }
            }

            $tag_settings = isset($settings['woocommerce_tag_list']) && is_array( $settings['woocommerce_tag_list'] ) ? $settings['woocommerce_tag_list'] : [];
            if (!empty($tag_settings)) {
                // Get excluded tag
                $exclude_tags = array_filter(array_map( function( $tag ) use ($product_id) {
                    $tag_term_list = wp_get_post_terms($product_id, 'product_tag', ['fields'=>'ids']);
                    return (!empty($tag_term_list) && $tag[ 'value' ] == $tag_term_list[0]) ? $product_id : null;
                }, $tag_settings ));

                // Check current product id is in exclude tags
                if ( in_array( $product_id, $exclude_tags ) ) {
                    return false;
                }
            }
        }

        // Get category exclusion settings
        $category_exclusion_settings = isset($enquiry_exclusion_setting['enquiry_exclusion_category_list']) ? $enquiry_exclusion_setting['enquiry_exclusion_category_list'] : [];
        
        // Get excluded category
        $exclude_categories = array_filter(array_map(function($category) use ($product_id) {
            $term_list = wp_get_post_terms($product_id, 'product_cat', ['fields' => 'ids']);
            return $category['key'] == $term_list[0] ? $product_id : null;
        }, $category_exclusion_settings));
        
        // Check current product id is in exclude categories
        if ( in_array( $product_id, $exclude_categories ) ) {
            return false;
        }

        // Get tag exclusion settings
        $tag_exclusion_settings = isset($enquiry_exclusion_setting['enquiry_exclusion_tag_list']) ? $enquiry_exclusion_setting['enquiry_exclusion_tag_list'] : [];
        
        // Get excluded tag
        $exclude_tags = array_filter(array_map( function( $tag ) use ($product_id) {
            $tag_term_list = wp_get_post_terms($product_id,'product_tag',['fields'=>'ids']);
            return $tag[ 'key' ] == (!empty($tag_term_list) && $tag_term_list[0]) ? $product_id : null;
        }, $tag_exclusion_settings ));

        // Check current product id is in exclude tags
        if ( in_array( $product_id, $exclude_tags ) ) {
            return false;
        }
        return true;
    }
}