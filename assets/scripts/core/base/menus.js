//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.5 - Menus JS Functions
// DATE - June 13, 2014
// AUTHOR - Doug Fraize, Matthew Holmes, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// Define menu hover defaults
var mulMenuHoverDefaults = {
	subIndicators: true,
	mainMenuSubOffsetX: 0,
	subMenusSubOffsetX: 5,
	subMenusSubOffsetY: 0,
	subMenusMinWidth: '',
	subMenusMaxWidth: '',
	subIndicatorsText: '',
	subIndicatorsPos: 'append',
	keepInViewport: true
};

// Menu hover function
var mulMenuHover = function() {
	
	// Variable to define menu hover object based on data attribute value
	var menuObject = jQuery('[data-menu="hover"]');

	// Apply smartmenus to menu hover object
	menuObject.smartmenus('destroy');
	menuObject.smartmenus('menuHideAll');
	menuObject.smartmenus(jQuery.extend({},mulMenuHoverDefaults));
};

// Menu hover init
mulMenuHover();