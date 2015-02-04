//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.6 - Accordion JS
// DATE - January 13, 2015
// AUTHOR - Doug Fraize, Matthew Holmes, Doug Richar, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// Define accordion defaults
var evoAccordionDefaults = {
	active: 0,  // first accordian panel is active by default
	animate: 200, // animation speed of accordian in milliseconds
	collapsible: true, // Whether all the sections can be closed at once. Allows collapsing the active section.
	disabled: false, // Disables the accordion if set to true.
	event: 'click', // The event that accordion headers will react to in order to activate the associated panel. Multiple events can be specified, separated by a space.
	header: '> li > :first-child,> :not(li):even', // Selector for the header element, applied via .find() on the main accordion element. Content panels must be the sibling immediately after their associated headers.
	heightStyle: 'content', // Controls the height of the accordion and each panel. Possible values: auto, fill, content
	icons: false // Icons to use for headers
};

// Accordion function:
// Pass data attribute value of accordion object, and any accordion options you want to add/override
var evoAccordion = function(objectDataValue, options) {
	
	// Variable to define accordion object based on data attribute value
	var accordionDataValue = jQuery('[data-accordion='+objectDataValue+']');

	// Apply accordion to accordion object and any default or custom options
	accordionDataValue.accordion(jQuery.extend({},evoAccordionDefaults,options));
};