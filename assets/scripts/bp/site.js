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

		// AUTOCOMPLETE
			
			var evoAutocompleteExampleData = [
				'Agresta, Jewel (Dallas) - Marsh',
				'Agricola, Dwain (Norwood) - Mercer',
				'Alexy, Dorthy (Chichester) - Mercer',
				'Altonen, Colin (Hartford) - Marsh',
				'Amaral, Ramon (Auckland) - Marsh',
				'Amrich, Darrell (Iowa City) - Mercer',
				'Araiza, Chad (Houston) - Mercer',
				'Arenburg, Margot (Dusseldorf) - Mercer',
				'Argenti, Kathie (Croydon) - Mercer',
				'Arostegui, Marcelo (Norwood) - Mercer',
				'Asberry, Kurtis (Dallas) - Marsh',
				'Assad, Jess (Louisville) - Marsh',
				'Backus, Neil (Dallas) - Marsh',
				'Bagnoli, Luciusv (Croydon) - Marsh',
				'Backus, Neil (Dallas) - Marsh',
				'Bagnoli, Luciusv (Croydon) - Marsh',
				'Assad, Jess (Louisville) - Marsh',
				'Backus, Neil (Dallas) - Marsh',
				'Bagnoli, Luciusv (Croydon) - Marsh',
				'Backus, Neil (Dallas) - Marsh',
				'Bagnoli, Luciusv (Croydon) - Marsh',
				'Assad, Jess (Louisville) - Marsh',
				'Backus, Neil (Dallas) - Marsh',
				'Bagnoli, Luciusv (Croydon) - Marsh',
				'Backus, Neil (Dallas) - Marsh',
				'Bagnoli, Luciusv (Croydon) - Marsh',
				'Bagnli, Luusv (Crydon) - Mercer',
				'Bgnoli, Luciusv (Croon) - Marsh',
				'Bagnol, Lucisv (Crodon) - Mercer',
				'Bagnoli, uciusv (Croyn) - Mercer',
				'Gnoli, Lucisv (Cdon) - Mercer',
			];

			//  Autocomplete example
			evoAutocomplete('evo-autocomplete-example',{
				source: evoAutocompleteExampleData
			});

		// BUTTONS

			// Interactive button examples
			evoButtonInteractive('evo-button-interactive-secondary-example');
			evoButtonInteractive('evo-button-interactive-primary-example');

		// DATEPICKER

			// Datepicker read only input example
			evoDatepicker('evo-datepicker-readonly-example');

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