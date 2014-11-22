//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.5 - Profile Containers JS
// DATE - June 13, 2014
// AUTHOR - Doug Fraize, Matthew Holmes, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// PROFILE CONTAINER MOBILE MENU TOGGLE
//--------------------------------------------------------------------------------------------------------

// Profile container mobile menu toggle function
var mulProfileContainerMobileMenuToggle = function() {
	
	jQuery('.js-mul-profile-container-mobile-menu-toggle').click(function(){
		jQuery('.js-mul-profile-container-mobile-menu-toggle-hide').hide();
		var id = 'mul-profile-container-mobile-menu-toggle-' + jQuery(this).attr('data-mul-profile-container-mobile-menu-toggle');
		jQuery('#' + id).slideToggle();
	});
	
};

// Profile container mobile menu toggle init
mulProfileContainerMobileMenuToggle();