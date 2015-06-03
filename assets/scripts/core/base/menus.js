//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.7 - Menus JS Functions
// DATE - June 3, 2015
// AUTHOR - Doug Fraize, Matthew Holmes
//--------------------------------------------------------------------------------------------------------

// MENU OPTION DEFAULTS
var evoMenuDefaults = {
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
var evoMenuHover = function() {
	
	// Variable to define menu hover object based on data attribute value
	var menuObject = jQuery('[data-menu="hover"]');

	// Apply smartmenus to menu hover object
	menuObject.smartmenus('destroy');
	menuObject.smartmenus('menuHideAll');
	menuObject.smartmenus(jQuery.extend({}, evoMenuDefaults));
};

// Menu hover init
evoMenuHover();


// CLICK EVENT MENU

// Define menu click defaults
var evoMenuClickDefaults = {
	showOnClick: true,
	hideOnClick: true
};

// Menu click function
var evoMenuClick = function() {
	
	// Variable to define menu click object based on data attribute value
	var menuObject = jQuery('[data-menu="click"]');

	// Apply smartmenus to menu click object
	menuObject.smartmenus('destroy');
	menuObject.smartmenus('menuHideAll');
	menuObject.smartmenus(jQuery.extend({}, evoMenuDefaults, evoMenuClickDefaults)).bind('click.smapi', function(e, item) {
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
evoMenuClick();