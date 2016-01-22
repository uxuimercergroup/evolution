//--------------------------------------------------------------------------------------------------------
// Mercer Evolution v{{ evo_meta_version }} - Top Bar JS
// DATE: {{ evo_meta_date }}
// AUTHOR: {{ evo_meta_author }}
// URL: {{ evo_meta_url }}
//--------------------------------------------------------------------------------------------------------

$(document).foundation({

	// FOUNDATION TOP BAR OPTIONS
	/*
	topbar: {
		sticky_class: 'sticky', // Class used on sticky container around top bar, make sure it matches sass variable
		custom_back_text: true, // Set this to false and it will pull the top level link name as the back text
		back_text: 'Back', // Define what you want your custom back text to be if custom_back_text: true
		is_hover: true,
		mobile_show_parent_link: false // will copy parent links into dropdowns for mobile navigation
		scrolltop : true // jump to top when sticky nav menu toggle is clicked
	}
	*/
	
});


// TOP BAR - MEGA MENU

// Top bar - Mega Menu Function:
var evoTopBarMegaMenu = function() {
	
	// Mega Menu on hover
	jQuery('[data-evo-top-bar-mega-menu]').hover(function(){
		jQuery('[data-evo-top-bar-mega-menu-ctn]').offset({left: 0});
		jQuery('[data-evo-top-bar-mega-menu-ctn]').css('width',$(window).width());
	});

	// Mega Menu on click
	jQuery('[data-evo-top-bar-mega-menu]').click(function(){
		jQuery('[data-evo-top-bar-mega-menu-ctn]').offset({left: 0});
		jQuery('[data-evo-top-bar-mega-menu-ctn]').css('width',$(window).width());
	});

	// Mega Menu on click - stop click event bubbling inside menu container, so menu does not close on click events inside the menu
	jQuery('[data-evo-top-bar-mega-menu-ctn]').click(function(e){
		e.stopPropagation();
	});

};

// Top bar - Mega Menu Init
evoTopBarMegaMenu();