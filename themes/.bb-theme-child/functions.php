<?php

// Defines
define( 'FL_CHILD_THEME_DIR', get_stylesheet_directory() );
define( 'FL_CHILD_THEME_URL', get_stylesheet_directory_uri() );

// Classes
require_once 'classes/class-fl-child-theme.php';

// Actions
add_action( 'wp_enqueue_scripts', 'FLChildTheme::enqueue_scripts', 1000 );

// Change WooCommerce "Related products" text

add_filter('gettext', 'change_rp_text', 10, 3);
add_filter('ngettext', 'change_rp_text', 10, 3);

function change_rp_text($translated, $text, $domain)
{
     if ($text === 'Related products' && $domain === 'woocommerce') {
         $translated = esc_html__('Recommended', $domain);
     }
     return $translated;
}

// Add FB Pixel Meta To Header
add_action( 'wp_head', 'add_fbpixel_to_header', 10 );
function add_fbpixel_to_header()
{
    ?>
    <meta name="facebook-domain-verification" content="1u3d3lr5dnbejceeucanyug6bqrpnk" />
    <?php
}

// Move product tabs
remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10 );
add_action( 'woocommerce_single_product_summary', 'woocommerce_output_product_data_tabs', 60 );

/**
 * Hide specific attributes from the Additional Information tab on single
 * WooCommerce product pages.
 *
 * @param WC_Product_Attribute[] $attributes Array of WC_Product_Attribute objects keyed with attribute slugs.
 * @param WC_Product $product
 *
 * @return WC_Product_Attribute[]
 */
function mycode_hide_attributes_from_additional_info_tabs( $attributes, $product ) {
	/**
	 * Array of attributes to hide from the Additional Information
	 * tab on single WooCommerce product pages.
	 */
	$hidden_attributes = [
		'pa_woocategory1',
		'pa_woocategory2',
		'pa_woocategory3',
		'pa_woocategory4',
		'pa_woocategory5',
		'pa_woocategory6',
		'pa_woocategory7',
		'pa_woocategory8',
	    'pa_woocategory9',
			    'pa_woocategory10',
			    'pa_woocategory11',
			    'pa_woocategory12',
			    'pa_woocategory13',
			    'pa_woocategory14',
			    'pa_woocategory15',
			    'pa_woocategory16',
			    'pa_woocategory17',
			    'pa_woocategory18',
					    'pa_woocategory19',
					    'pa_woocategory20',
							    'pa_woocategory21',
		'pa_woocategory22',
		'pa_woocategory23',
		'pa_woocategory24',
		'pa_woocategory25',
		'pa_woocategory26',
		'pa_woocategory27',
		'pa_woocategory28',
		'pa_woocategory29',
		'pa_woocategory30',
		'pa_elb12160',
		'pa_elb12240',
		'pa_elb12480',
		'pa_elb12640',
		'pa_elb24160',
		'pa_lr160',
		'pa_lr240',
		'pa_lr80',
		'pa_lrr',
		'pa_reg-finder',
	];
	foreach ( $hidden_attributes as $hidden_attribute ) {
		if ( ! isset( $attributes[ $hidden_attribute ] ) ) {
			continue;
		}
		$attribute = $attributes[ $hidden_attribute ];
		$attribute->set_visible( false );
	}
	return $attributes;
}
add_filter( 'woocommerce_product_get_attributes', 'mycode_hide_attributes_from_additional_info_tabs', 20, 2 );


add_action('woocommerce_after_shop_loop_item_title','display_loop_product_attribute' );
function display_loop_product_attribute() {
    global $product;

    $product_attributes = array('pa_voltage-v','pa_ah', 'pa_cca'); // Defined product attribute taxonomies.
    $attr_output = array(); // Initializing

    // Loop through the array of product attributes
    foreach( $product_attributes as $taxonomy ){
        if( taxonomy_exists($taxonomy) ){
            if( $value = $product->get_attribute($taxonomy) ){
            // The product attribute label name
            $label_name = get_taxonomy( $taxonomy )->labels->singular_name;
                // Storing attributes for output
                $attr_output[] = '<span class="'.$taxonomy.'">'.$label_name.': '.$value.'</span>';
            }
        }
    }
    // Output attribute name / value pairs separate by a "<br>"
    echo '<div class="product-attributes">'.implode('<br>', $attr_output).'</div>';
}
// Second, add View Product Button

add_action( 'woocommerce_after_shop_loop_item', 'bbloomer_view_product_button', 10 );

function bbloomer_view_product_button() {
global $product;
$link = $product->get_permalink();
echo '<a href="' . $link . '" class="button addtocartbutton">Read More</a>';
}
add_filter( 'woocommerce_product_tabs', 'woo_rename_tabs', 98 );
function woo_rename_tabs( $tabs ) {

	$tabs['additional_information']['title'] = __( 'Specification' );	// Rename the additional information tab
	return $tabs;

}
