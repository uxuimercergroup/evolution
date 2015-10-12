//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Benefits Portals Family JS
// DATE - August 19, 2015
// AUTHOR - Doug Fraize, Matthew Holmes
//--------------------------------------------------------------------------------------------------------

// =======================================================================================================
// JAVASCRIPT LIBRARIES
// =======================================================================================================



// =======================================================================================================
// SITE FUNCTIONS AND INITIALIZATIONS
// =======================================================================================================

// FUNCTIONS
//--------------------------------------------------------------------------------------------------------

	


// DOCUMENT READY
//--------------------------------------------------------------------------------------------------------

$(document).foundation({

	// FOUNDATION INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------

	

});

$(function() {

	// INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------

		

	
	// LIBRARY EXAMPLES
	//----------------------------------------------------------------------------------------------------

		// SLIDER

			// Slider horizontal (default) with interval ticks example
			evoSlider('evo-slider-default-ticks',{
				step: 10,
				ticks: true
			});

			// Slider range horizontal (default) with interval ticks example
			evoSliderRange('evo-slider-range-default-ticks',{
				step: 10,
				ticks: true
			});

			// Slider range horizontal - fixed min with interval ticks example
			evoSliderRangeSingleHandle('evo-slider-range-single-min-ticks',{
				range: 'min',
				step: 10,
				ticks: true
			});

			// Slider range horizontal - fixed max with interval ticks example
			evoSliderRangeSingleHandle('evo-slider-range-single-max-ticks',{
				range: 'max',
				step: 10,
				ticks: true
			});

});

// =======================================================================================================
// COMPONENTS
// =======================================================================================================

// BAR COMPONENT
//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - v3.0.1 - Benefits Portals Family
// Bar Component v1.0 - JS
// DATE - September 1, 2015
// AUTHOR - Doug Fraize, Matthew Holmes, Sherry Seeton
//--------------------------------------------------------------------------------------------------------

// BAR COMPONENT - BEGINS

// BAR COMPONENT - ENDS


// CONVERSATIONAL FORM
//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v3.0.1
// Conversational Form Component v1.0 - JS
// DATE - October 6, 2015
// AUTHOR - Doug Fraize, Matthew Holmes, Sherry Seeton
//--------------------------------------------------------------------------------------------------------

// CONVERSATIONAL FORM ITEM TOGGLE  - BEGINS
	var evoConversationalFormItemToggle = function(){
		jQuery('[data-evo-conversational-form-element]').focus(function(){
			var id = 'evo-conversational-form-item-' + jQuery(this).attr('data-evo-conversational-form-item-toggle');
			jQuery('#' + id).fadeIn(2000);
		});
	}
	evoConversationalFormItemToggle();
// CONVERSATIONAL FORM ITEM TOGGLE - ENDS

// ITEM SELECTION PANEL
//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v3.0.1
// Item Selection Panel Component v1.0 - JS
// DATE - September 1, 2015
// AUTHOR - Doug Fraize, Matthew Holmes, Sherry Seeton
//--------------------------------------------------------------------------------------------------------

// ITEM SELECTION PANEL ITEM SELECTED TOGGLE - BEGINS
	var evoItemSelectionPanelItemSelected = function (){
		jQuery('[data-evo-item-selection-panel-item]').change(function() {
			jQuery(this).toggleClass('evo-item-selection-panel-item-selected');
		});
	}
	evoItemSelectionPanelItemSelected();
// ITEM SELECTION PANEL ITEM SELECTED TOGGLE - ENDS