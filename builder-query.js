  jQuery(document).ready(function ($) {
    let hours = 5.5;

    function updateBars() {
      let percentage = Math.min(1, hours / 5.5); // cap at 100%
      $('.bar').each(function () {
        $(this).css('height', (percentage * 90) + '%');
      });
      $('#hours').text(hours.toFixed(1));
    }

    $('#increase').click(function () {
      hours += 0.5;
      updateBars();
    });

    $('#decrease').click(function () {
      hours = Math.max(0, hours - 0.5);
      updateBars();
    });

    // Initialize
    updateBars();
  });




jQuery('.services-cat li').click(function () {
    jQuery(this).toggleClass('active');
});	
jQuery('.rest').click(function () {
    jQuery('.services-cat li').removeClass('active');
});
// 	jQuery('.services-cat li').click(function () {
//         //jQuery('.services-cat li').removeClass('active'); 
//         jQuery(this).addClass('active'); 
//     });
	
//	Click event for buttons
	//jQuery('.data-div').hide(); // Hide all divs first
	//
	//
// 	jQuery('.btn-build').on('click', function() {
// 		var groups = jQuery(this).attr('data-target').split(','); // Use .attr() to get the data-target as string
// 		jQuery('.data-div').hide(); // Hide all divs first
// 			groups.forEach(function(group) {
// 				jQuery('.group-' + group).show(); // Show selected groups
// 		});
// 	});
	
	
	
	
	
	
   // jQuery('.price-btn').on('click', function(e) {
       // e.preventDefault();

       // var productId = jQuery(this).data('product-id');  // ✅ define correctly
        //var price = jQuery(this).data('price');

        // Add to cart via AJAX (WooCommerce)
//         jQuery.post(wc_add_to_cart_params.wc_ajax_url.toString().replace('%%endpoint%%', 'add_to_cart'), {
//             product_id: productId,
//             quantity: 2
//         }, 
					//function(response) {
            //jQuery('#cart-response').html('<p>Product added to cart!</p>');
            //jQuery(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash]);
        //});
   // });



    jQuery('.wc-block-cart-item__image a').on('click', function (e) {
      e.preventDefault();     // stop link from working
      e.stopPropagation();   // stop it from triggering anything else
    });

    jQuery('.wc-block-cart-item__wrap a').on('click', function (e) {
      e.preventDefault();     // stop link from working
      e.stopPropagation();   // stop it from triggering anything else
    });
	
	
	
	

	
jQuery(document).ready(function(jQuery) {

    // Helper: Reset UI state
    function resetUI() {
        jQuery('.price-btn').removeClass('prc-act');
        jQuery('[class*="bat"]').hide();
        jQuery('#custom-class-container').removeClass(function(index, className) {
            return (className.match(/(^|\s)bat\S+/g) || []).join(' ');
        });
    }

    // On price button click
    jQuery('.price-btn').on('click', function(e) {
        e.preventDefault();

        var button = jQuery(this);
        var productId = button.data('product-id');
        var price = button.data('price');
        var batClass = 'bat' + button.index(); // dynamic bat class based on button index

        resetUI();
        button.addClass('prc-act');

        jQuery('#custom-class-container').addClass(batClass);
        jQuery('.' + batClass).show();

        jQuery('#selected-price').text('$' + price);
        jQuery('input[name="custom_price"]').val(price);
        jQuery('input[name="product_id"]').val(productId);

        // Add to cart via AJAX
// 	jQuery.post(wc_add_to_cart_params.wc_ajax_url.replace('%%endpoint%%', 'add_to_cart'), {
//     product_id: productId,
//     quantity: 1
// 	}, function(response) {
// 			console.log('Product added:', response);

// 			// ✅ Alert user
// 			alert("Product ID " + productId + " has been added to the cart.\nYou can add multiple ampere batteries at a time.");

// 			// ✅ Update cart message
// 			jQuery('#cart-response').html('<p>Product added to cart!</p>');

// 			// ✅ Trigger WooCommerce update
// 			jQuery(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash]);
// 	});
			
			
			
			
			
// jQuery.post(wc_add_to_cart_params.wc_ajax_url.replace('%%endpoint%%', 'add_to_cart'), {
//     product_id: productId,
//     quantity: 1
// }, function(response) {
//     console.log('Product added:', response);
//     jQuery('#cart-response').html('<p>Product added to cart!</p>');
//     jQuery(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash]);

//     // Get product name (fallback to ID if needed)
//     var productName = jQuery('[data-product-id="' + productId + '"]').text().trim();
//     if (!productName) {
//         productName = 'Product ID ' + productId;
//     }

//     // Show .error-batt with content
//     jQuery('.error-batt')
//         .html('<strong>' + productName + '</strong> added in the basket.<br>You can add multiple ampere batteries at a time.')
//         .css('display', 'block');
// });
// 

			jQuery.post(wc_add_to_cart_params.wc_ajax_url.replace('%%endpoint%%', 'add_to_cart'), {
    product_id: productId,
    quantity: 1
}, function(response) {
    console.log('Product added:', response);
    jQuery('#cart-response').html('<p>Product added to cart!</p>');
    jQuery(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash]);

    // Get product name from button itself
    //var productName = jQuery('[data-product-id="' + productId + '"]').text().trim();
	    var productName = button.data('product-name');

    // Show the message in .error-batt
    jQuery('.error-batt')
        .html('<strong>' + productName + '</strong> added in the basket.<br>You can add multiple ampere batteries at a time.')
        .css('display', 'block');
});

			
			
			

						});
	
	
	
    // Initial activation on page load (first button)
    var initialButton = jQuery('.price-btn').first();
    var initProductId = initialButton.data('product-id');
    var initPrice = initialButton.data('price');
    var initClass = 'bat' + initialButton.index();

    resetUI();
    initialButton.addClass('prc-act');
    jQuery('#custom-class-container').addClass(initClass);
    jQuery('.' + initClass).show();

    jQuery('#selected-price').text('$' + initPrice);
    jQuery('input[name="custom_price"]').val(initPrice);
    jQuery('input[name="product_id"]').val(initProductId);

	});
		});






jQuery(document).ready(function($) {
  var buttonHTML = `
    <div class="backbtn">
      <a href="/builder/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"></path></svg> Back to Builder </a>
    </div>
  `;

  jQuery('.woocommerce-cart-form').before(buttonHTML);
});
	
	
	
	
	
//     // When a button with the price-btn class is clicked
//     jQuery('.price-btn').on('click', function() {
//         var selectedProductId = jQuery(this).data('product-id');
//         var selectedPrice = jQuery(this).data('price');

//         // Remove 'prc-act' class from all buttons and then add it to the clicked button
//         jQuery('.price-btn').removeClass('prc-act'); // Remove 'prc-act' class from all buttons
//         jQuery(this).addClass('prc-act'); // Add 'prc-act' class to the clicked button
        
//         // Hide all previously shown content and remove applied classes
//         jQuery('.bat1, .bat2, .bat3').hide(); // Hide all the classes
//         jQuery('#custom-class-container').removeClass('bat1 bat2 bat3'); // Remove all classes

//         // Show specific class based on the Product ID
//         if (selectedProductId == 10190) {
//             jQuery('#custom-class-container').addClass('bat1');
//             jQuery('.bat1').show(); // Show content for Product ID 123
//         } else if (selectedProductId == 10191) {
//             jQuery('#custom-class-container').addClass('bat2');
//             jQuery('.bat2').show(); // Show content for Product ID 124
//         } else if (selectedProductId == 10192) {
//             jQuery('#custom-class-container').addClass('bat3');
//             jQuery('.bat3').show(); // Show content for Product ID 125
//         }
        
//         // Update the displayed price
//         jQuery('#selected-price').text('$' + selectedPrice);
        
//         // Optionally, you can update the hidden inputs or forms
//         jQuery('input[name="custom_price"]').val(selectedPrice);
//         jQuery('input[name="product_id"]').val(selectedProductId);
//     });

//     // On page load, automatically trigger the content for product-id=123 and activate the button
//     var initialProductId = 10190; // Product ID 123 should be active on page load
//     jQuery('.price-btn[data-product-id="' + initialProductId + '"]').trigger('click');
//