//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.5 - Menus JS
// DATE - June 13, 2014
// AUTHOR - Doug Fraize, Matthew Holmes, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// HEADER MENUS
//--------------------------------------------------------------------------------------------------------

	// HEADER PROFILE MENU TOGGLE
	var mulHeaderProfileMenuToggle = function(){
		jQuery('.mul-profile-menu-icon.mul-icon-arrow-down2').hide();
		jQuery('.js-mul-profile-menu-display').click(function() {
			jQuery('.mul-profile-menu').slideToggle('fast');
			jQuery('.mul-profile-menu-icon.mul-icon-arrow-right2').toggle();
			jQuery('.mul-profile-menu-icon.mul-icon-arrow-down2').toggle();
		});
	}

	// Header Profile Menu Init
	mulHeaderProfileMenuToggle();

	// HEADER MEGA MENU - MENU AND SEARCH TOGGLE
	var mulHeaderMegaMenu = function(){
		jQuery('.js-mul-mega-menu').click(function(){
			if(jQuery(".js-mul-mega-menu-search-ctn").is(":visible")) {
				jQuery('.js-mul-mega-menu-search').removeClass('mul-mega-menu-item-expand');
				jQuery('.js-mul-mega-menu-search-ctn').slideUp(function(){
					jQuery('.js-mul-mega-menu').addClass('mul-mega-menu-item-expand');
					jQuery('.js-mul-mega-menu-ctn').slideToggle('fast');
				});
			} else {
				jQuery(this).toggleClass('mul-mega-menu-item-expand');
				jQuery('.js-mul-mega-menu-ctn').slideToggle('fast');
			}
		});

		jQuery('.js-mul-mega-menu-search').click(function(){
			if(jQuery(".js-mul-mega-menu-ctn").is(":visible")) {
				jQuery('.js-mul-mega-menu').removeClass('mul-mega-menu-item-expand');
				jQuery('.js-mul-mega-menu-ctn').slideUp(function(){
					jQuery('.js-mul-mega-menu-search').addClass('mul-mega-menu-item-expand');
					jQuery('.js-mul-mega-menu-search-ctn').slideToggle('fast');
				});
			} else {
				jQuery(this).toggleClass('mul-mega-menu-item-expand');
				jQuery('.js-mul-mega-menu-search-ctn').slideToggle('fast');
			}
		});
	}

	// Header Mega Menu Init
	mulHeaderMegaMenu();

	// HEADER UTILITY MENU - LANGUAGE AND PROFILE TOGGLE
	var mulHeaderUtilityMenu = function(){
		jQuery('body').click(function(){ 
			jQuery('.mul-utility-subnav').hide();
		});

		jQuery('.js-mul-menu-toggle').click(function(e) {
			e.preventDefault();
			if(!jQuery(this).hasClass('mul-active-menu')){
				jQuery('.mul-utility-subnav').slideUp();
				jQuery('.mul-active-menu').removeClass('mul-active-menu');
				jQuery(this).addClass('mul-active-menu');
			};
			jQuery(this).siblings('.mul-utility-subnav').slideToggle();
			e.stopPropagation();
			return false;
		});
	}

	// Header Utility Menu Init
	mulHeaderUtilityMenu();