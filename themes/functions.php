<?php
/**
 * Enqueue script and styles for child theme
 */
function woodmart_child_enqueue_styles() {
	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( 'woodmart-style' ), woodmart_get_theme_info( 'Version' ) );
}
add_action( 'wp_enqueue_scripts', 'woodmart_child_enqueue_styles', 10010 );

add_action('wp_ajax_add_to_cart_action', 'custom_add_to_cart');
add_action('wp_ajax_nopriv_add_to_cart_action', 'custom_add_to_cart');

function enqueue_custom_scripts() {
    wp_localize_script('woocommerce-custom', 'woocommerce_params', array(
        'ajax_url' => admin_url('admin-ajax.php'),
    ));
}
add_action('wp_enqueue_scripts', 'enqueue_custom_scripts');


// Handle AJAX request to add product to cart
add_action('wp_ajax_add_to_cart_action', 'custom_add_to_cart');
add_action('wp_ajax_nopriv_add_to_cart_action', 'custom_add_to_cart');

function custom_add_to_cart() {
    // Check if product ID is passed
    if (!isset($_POST['product_id'])) {
        wp_send_json_error('Product ID is missing.');
        return;
    }

    $product_id = intval($_POST['product_id']);
    $quantity = isset($_POST['quantity']) ? intval($_POST['quantity']) : 1;

    // Add product to cart
    $added = WC()->cart->add_to_cart($product_id, $quantity);

    if ($added) {
        wp_send_json_success('Product added to cart.');
    } else {
        wp_send_json_error('Failed to add product to cart.');
    }
}


function enqueue_custom_scripts() {
    wp_enqueue_script('jquery');
    wp_enqueue_script('woocommerce-custom', get_template_directory_uri() . '/js/custom.js', array('jquery'), null, true);

    wp_localize_script('woocommerce-custom', 'woocommerce_params', array(
        'ajax_url' => admin_url('admin-ajax.php'),
    ));
}
add_action('wp_enqueue_scripts', 'enqueue_custom_scripts');
