//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.5 - Header JS Functions
// DATE - June 13, 2014
// AUTHOR - Doug Fraize, Matthew Holmes, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// HEADER MOBILE MENU TOGGLE
//--------------------------------------------------------------------------------------------------------

// Header mobile menu toggle
var mulHeaderMobileMenuToggle = function() {
	
	jQuery('.js-mul-header-mobile-menu-toggle').click(function(){
		jQuery('.js-mul-header-mobile-menu-toggle-hide').hide();
		var id = 'mul-header-mobile-menu-toggle-' + jQuery(this).attr('data-mul-header-mobile-menu-toggle');
		jQuery('#' + id).slideToggle();
	});
	
};

// Header mobile menu toggle Init
mulHeaderMobileMenuToggle();


// TOOLBAR
//--------------------------------------------------------------------------------------------------------

// TOOLBAR FIXED SHADOW ON SCROLL

// Toolbar fixed shadow on scroll function
var mulToolbarFixedShadowScroll = function() {
	
	var toolbar = jQuery('.mul-toolbar-fixed');
	var toolbar_class = 'mul-toolbar-fixed-shadow';
	var scroll_threshold = 40;

	jQuery(window).scroll(function () {
		var scroll_distance = $(this).scrollTop();
			if (scroll_distance > scroll_threshold) { // If scrolled past threshold
				toolbar.addClass(toolbar_class); // Add class to toolbar
			} else { // If user scrolls back to top
			if (toolbar.hasClass(toolbar_class)) { // And if class has been added
				toolbar.removeClass(toolbar_class); // Remove it
			}
		}
	});
	
};

// Toolbar fixed shadow on scroll init
mulToolbarFixedShadowScroll();