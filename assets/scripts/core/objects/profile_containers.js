//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.7 - Profile Containers JS
// DATE - June 3, 2015
// AUTHOR - Doug Fraize, Matthew Holmes
//--------------------------------------------------------------------------------------------------------

// PROFILE CONTAINER MOBILE MENU TOGGLE
//--------------------------------------------------------------------------------------------------------

// Profile container mobile menu toggle function
var evoProfileContainerMobileMenuToggle = function() {
	
	jQuery('.js-evo-profile-container-mobile-menu-toggle').click(function(){
		jQuery('.js-evo-profile-container-mobile-menu-toggle-hide').hide();
		var id = 'evo-profile-container-mobile-menu-toggle-' + jQuery(this).attr('data-evo-profile-container-mobile-menu-toggle');
		jQuery('#' + id).slideToggle();
	});
	
};

// Profile container mobile menu toggle init
evoProfileContainerMobileMenuToggle();