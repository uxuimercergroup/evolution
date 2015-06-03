//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.7 - Alternate Views Badge JS
// DATE - June 3, 2015
// AUTHOR - Doug Fraize, Matthew Holmes, Doug Richar, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// Define alternate views badge tabs defaults
var evoAlternateViewsBadgeDefaults = {};

// Alternate views badge function:
// Pass data attribute value of alternate views badge object, position of object tabs navigation (left, right, center) and any tabs options you want to add/override
var evoAlternateViewsBadge = function(objectDataValue, objectNavPosition, options) {
	
	// Variable to define alternate views badge object based on data attribute value
	var alternateViewsBadgeDataValue = jQuery('[data-alternate-views-badge='+objectDataValue+']');

	// Apply tabs to alternate views badge object and any default or custom tabs options
	alternateViewsBadgeDataValue.tabs(jQuery.extend({},evoAlternateViewsBadgeDefaults,options));
	
	// Apply position class to alternate views badge tabs navigation
	alternateViewsBadgeDataValue.tabs().find('.ui-tabs-nav').addClass('evo-alternate-views-badge-position-'+objectNavPosition);
};