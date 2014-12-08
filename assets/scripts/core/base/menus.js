//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.5 - Menus JS Functions
// DATE - June 13, 2014
// AUTHOR - Doug Fraize, Matthew Holmes, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// MENU OPTION DEFAULTS
var mulMenuDefaults = {
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


// HOVER EVENT MENU

// Menu hover function
var mulMenuHover = function() {
	
	// Variable to define menu hover object based on data attribute value
	var menuObject = jQuery('[data-menu="hover"]');

	// Apply smartmenus to menu hover object
	menuObject.smartmenus('destroy');
	menuObject.smartmenus('menuHideAll');
	menuObject.smartmenus(jQuery.extend({}, mulMenuDefaults));
};

// Menu hover init
mulMenuHover();


// CLICK EVENT MENU

// Define menu click defaults
var mulMenuClickDefaults = {
	showOnClick: true,
	hideOnClick: true
};

// Menu click function
var mulMenuClick = function() {
	
	// Variable to define menu click object based on data attribute value
	var menuObject = jQuery('[data-menu="click"]');

	// Apply smartmenus to menu click object
	menuObject.smartmenus('destroy');
	menuObject.smartmenus('menuHideAll');
	menuObject.smartmenus(jQuery.extend({}, mulMenuDefaults, mulMenuClickDefaults)).bind('click.smapi', function(e, item) {
		var $item = $(item),
			level = $item.parent().parent().dataSM('level'),
			$sub = $item.parent().dataSM('sub');
		if (level == 1 && $sub && $sub.dataSM('shown-before') && $sub.is(':visible')) {
			$(this).smartmenus('menuHideAll');
			return false;
		}
	});
};

// Menu click init
mulMenuClick();