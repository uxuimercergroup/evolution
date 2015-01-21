//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.6 - Header JS Functions
// DATE - January 13, 2015
// AUTHOR - Doug Fraize, Matthew Holmes, Doug Richar, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// HEADER MOBILE MENU TOGGLE
//--------------------------------------------------------------------------------------------------------

// Header mobile menu toggle function
var evoHeaderMobileMenuToggle = function() {
	
	jQuery('.js-evo-header-mobile-menu-toggle').click(function(){
		jQuery('.js-evo-header-mobile-menu-toggle-hide').hide();
		var id = 'evo-header-mobile-menu-toggle-' + jQuery(this).attr('data-evo-header-mobile-menu-toggle');
		jQuery('#' + id).slideToggle();
	});
	
};

// Header mobile menu toggle init
evoHeaderMobileMenuToggle();


// TOOLBAR
//--------------------------------------------------------------------------------------------------------

// TOOLBAR FIXED SHADOW ON SCROLL

// Toolbar fixed shadow on scroll function
var evoToolbarFixedShadowScroll = function() {
	
	var toolbar = jQuery('.evo-toolbar-fixed');
	var toolbar_class = 'evo-toolbar-fixed-shadow';
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
evoToolbarFixedShadowScroll();