//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.5 - Tabs JS
// DATE - June 13, 2014
// AUTHOR - Doug Fraize, Matthew Holmes, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// Define tabs defaults
var mulTabsDefaults = {};

// Tabs function, pass class of tabs element and any tabs options you want to add/override
var mulTabs = function(className, options) {
	
	// Variable to define class of tabs
	var tabsClass = jQuery('.'+className);
	
	// Apply tabs to specified element along with default options
	tabsClass.tabs(jQuery.extend({},mulTabsDefaults,options));

	// Tabs paging options for tabs on mobile
	tabsClass.tabs('paging', {
		cycle: true,
		follow: true
	});
};