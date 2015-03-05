//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.6 - Tabs JS
// DATE - January 13, 2015
// AUTHOR - Doug Fraize, Matthew Holmes, Doug Richar, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// Define tabs defaults
var evoTabsDefaults = {};

// Tabs function, pass class of tabs element and any tabs options you want to add/override
var evoTabs = function(className, options) {
	
	// Variable to define class of tabs
	var tabsClass = jQuery('.'+className);
	
	// Apply tabs to specified element along with default options
	tabsClass.tabs(jQuery.extend({},evoTabsDefaults,options));

	// Tabs paging options for tabs on mobile
	tabsClass.tabs('paging', {
		cycle: true,
		follow: true
	});
};