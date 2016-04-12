//--------------------------------------------------------------------------------------------------------
// Mercer Evolution v{{ evo_meta_version }} - Top Bar JS
// DATE: {{ evo_meta_date }}
// AUTHOR: {{ evo_meta_author }}
// URL: {{ evo_meta_url }}
//--------------------------------------------------------------------------------------------------------

// TOP BAR - MEGA MENU
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