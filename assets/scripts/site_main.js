// FUNCTIONS
//--------------------------------------------------------------------------------------------------------

	// FIXES FLASH OF UNSTYLED CONTENT BUG - WHERE PAGE LOADS FASTER THAN JS AND MODERNIZR
	// HIDE PAGE WITH CSS CLASS PROVIDED BY MODERNIZR AND WHEN DOCUMENT IS READY, SHOW PAGE WITH JS
	var evoFixFOUC = function() {
		jQuery('html.evo-mod-js').show();
	}

	// REFERENCE PAGES

		// DEVELOPER - SLIDING DRAWER
		var evoRefSlidingDrawer = jQuery.jPanelMenu({
			animated: true,
			closeOnContentClick: false,
			duration: 450,
			direction: 'left',
			menu: '.js-evo-ref-sliding-drawer',
			keyboardShortcuts: false,
			trigger: '.js-evo-ref-sliding-drawer-btn'
		});


	// LIBRARY EXAMPLES
	//----------------------------------------------------------------------------------------------------

		// CONTENT MODAL

			// Content modal example click event
			/*
			var contentModalExampleClickEvent = function(){
				jQuery('#js-evo-content-modal-example-btn').click(function() {
					jQuery('#js-evo-content-modal-example').dialog('open');
				});
			}
			*/

		
		// DIALOG/MODAL

			// MODAL

				// Modal dialog with short content example click event
				/*
				var modalDialogShortExampleClickEvent = function(){
					jQuery('#js-evo-dialog-modal-example-btn').click(function() {
						jQuery('#js-evo-dialog-modal-example').dialog('open');
					});
				}
				*/

				// Modal dialog with long content example click event
				/*
				var modalDialogLongExampleClickEvent = function(){
					jQuery('#js-evo-dialog-modal-long-example-btn').click(function() {
						jQuery('#js-evo-dialog-modal-long-example').dialog('open');
					});
				}
				*/

				// Modal dialog with long content and fixed buttons (jQuery UI generated) example click event
				/*
				var modalDialogLongFixedExampleClickEvent = function(){
					jQuery('#js-evo-dialog-modal-long-fixed-buttons-example-btn').click(function() {
						jQuery('#js-evo-dialog-modal-long-fixed-buttons-example').dialog('open');
					});
				}
				*/

				// Modal dialog with click outside example click event
				/*
				var modalDialogClickOutsideExampleClickEvent = function(){
					jQuery('#js-evo-dialog-modal-clickoutside-example-btn').click(function() {
						jQuery('#js-evo-dialog-modal-clickoutside-example').dialog('open');
					});
				}
				*/

			// LOADING ANIMATION MODAL

				// Loading animation image modal example click event
				/*
				var modalDialogLoadingImageExampleClickEvent = function(){
					jQuery('#js-evo-dialog-loading-example-btn').click(function() {
						jQuery('#js-evo-dialog-loading').dialog('open');
					});
				}
				*/

				// Loading animation icon modal example click event
				/*
				var modalDialogLoadingIconExampleClickEvent = function(){
					jQuery('#js-evo-dialog-loading-icon-example-btn').click(function() {
						jQuery('#js-evo-dialog-loading-icon').dialog('open');
					});
				}
				*/

// DOCUMENT READY
//--------------------------------------------------------------------------------------------------------

$(document).foundation({

	// FOUNDATION INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------

	

});

$(function() {

	// INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------

		// REFERENCE PAGES

			// ALTERNATE VIEWS BADGE
			// evoAlternateViewsBadge('js-evo-ref-alternate-views-badge', 'left');

			// DEVELOPER - SLIDING DRAWER INIT
			evoRefSlidingDrawer.on();

			// DEVELOPER - SLIDING DRAWER - SCROLL PANE
			var windowHeight = jQuery(window).height();
			evoScrollPaneCustom('js-evo-ref-sliding-drawer-scrollpane',{
				setHeight: windowHeight,
				advanced:{
					updateOnContentResize: true
				}
			});

			// DEVELOPER - SLIDING DRAWER - SCROLL PANE - CHANGE ON RESIZE OF WINDOW
			jQuery(window).bind('resize', resizeWindow);
			function resizeWindow(e) {
				var newWindowHeight = jQuery(window).height();
				jQuery('.js-evo-ref-sliding-drawer-scrollpane').css('height', newWindowHeight);
			}


		// JS LIBRARY INITS

			// GOOGLE PRETTIFY INIT (for code snippet coloring/formating)
			prettyPrint();


		// FIXES FLASH OF UNSTYLED CONTENT BUG - WHERE PAGE LOADS FASTER THAN JS AND MODERNIZR
		// HIDE PAGE WITH CSS CLASS PROVIDED BY MODERNIZR AND WHEN DOCUMENT IS READY, SHOW PAGE WITH JS
		evoFixFOUC();


	// LIBRARY EXAMPLES
	//----------------------------------------------------------------------------------------------------

		// ACCORDION

			// Accordion - default
			// evoAccordion('js-evo-accordion-example');

			// Accordion - icons
			/*
			evoAccordion('js-evo-accordion-icons-example', {
				icons: {'header': 'evo-icon-plus-circle', 'activeHeader': 'evo-icon-minus-circle'}
			});
			*/

		// ALTERNATE VIEWS BADGE

			// Alternate views badge - full
			// evoAlternateViewsBadge('js-evo-alternate-views-badge-full-example', 'center');

			// Alternate views badge - text only
			// evoAlternateViewsBadge('js-evo-alternate-views-badge-text-only-example', 'left');

			// Alternate views badge - text only
			// evoAlternateViewsBadge('js-evo-alternate-views-badge-icon-only-example', 'right');

		// AUTO SUGGEST
			
			var autoCompleteExampleData = [
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

			//  Auto Suggest init
			evoAutocomplete('js-evo-autocomplete-example',{
				source: autoCompleteExampleData
			});


		// CALENDAR

			// Read only input
			evoDatepicker('js-evo-datepicker-example-readonly');
		 
			// Default example
			evoDatepicker('js-evo-datepicker-example-default');
			
			// Calendar with message
			evoDatepicker('js-evo-datepicker-example-message');
			
			// Masked date input
			evoDatepicker('js-evo-datepicker-example-masked');


		// CALENDAR - DATE RANGE
		 
			// Stacked

			// From date datepicker
			evoDatepickerRange('js-evo-datepicker-range-stacked-from',{
				onClose: function(selectedDate) {
					jQuery('#js-evo-datepicker-range-stacked-to').datepicker('option', 'minDate', selectedDate); // On calendar close, set the min date of the "To" calendar to the date picked in the "From" calendar
				}
			});

			// To date datepicker
			evoDatepicker('js-evo-datepicker-range-stacked-to',{
				onClose: function(selectedDate) {
					jQuery('#js-evo-datepicker-range-stacked-from').datepicker( 'option', 'maxDate', selectedDate); // On calendar close, set the max date of the "From" calendar to the date picked in the "To" calendar
				}
			});

			//----

			// Left Aligned

			// From date datepicker
			evoDatepickerRange('js-evo-datepicker-range-left-aligned-from',{
				onClose: function(selectedDate) {
					jQuery('#js-evo-datepicker-range-left-aligned-to').datepicker('option', 'minDate', selectedDate); // On calendar close, set the min date of the "To" calendar to the date picked in the "From" calendar
				}
			});

			// To date datepicker
			evoDatepicker('js-evo-datepicker-range-left-aligned-to',{
				onClose: function(selectedDate) {
					jQuery('#js-evo-datepicker-range-left-aligned-from').datepicker('option', 'maxDate', selectedDate); // On calendar close, set the max date of the "From" calendar to the date picked in the "To" calendar
				}
			});

			//----

			// Right Aligned
			
			// From date datepicker
			evoDatepickerRange('js-evo-datepicker-range-right-aligned-from',{
				onClose: function(selectedDate) {
					jQuery('#js-evo-datepicker-range-right-aligned-to').datepicker('option', 'minDate', selectedDate); // On calendar close, set the min date of the "To" calendar to the date picked in the "From" calendar
				}
			});

			// To date datepicker
			evoDatepicker('js-evo-datepicker-range-right-aligned-to',{
				onClose: function(selectedDate) {
					jQuery('#js-evo-datepicker-range-right-aligned-from').datepicker('option', 'maxDate', selectedDate); // On calendar close, set the max date of the "From" calendar to the date picked in the "To" calendar
				}
			});


		// CAROUSEL

			// Carousel example
			evoCarousel('js-evo-carousel-example');


		// CONTENT MODAL

			// Content modal example
			/*
			evoContentModal('js-evo-content-modal-example',{
				clickOutside: true, // Clicking outside content modal closes content modal, false turns off this option
				clickOutsideTrigger: '#js-evo-content-modal-example-btn'
			});
			*/

			// Content modal example click event init
			// contentModalExampleClickEvent();

		
		// DIALOG/MODAL

			// MODAL

				// Modal dialog with short content example
				// evoDialogModal('js-evo-dialog-modal-example');

				// Modal dialog with short content example click event init
				// modalDialogShortExampleClickEvent();

				//----

				// Modal dialog with long content example
				// evoDialogModal('js-evo-dialog-modal-long-example');

				// Modal dialog with long content example click event init
				// modalDialogLongExampleClickEvent();

				//----

				// Modal dialog with long content and fixed buttons (jQuery UI generated) example
				/*
				evoDialogModal('js-evo-dialog-modal-long-fixed-buttons-example',{
					buttons: { // Define buttons at bottom of dialog, buttons stay fixed to bottom on dialog with scrolling content div
						'cancel' : { // Define name of button
							text: 'Cancel', // Text of the button
							priority: 'secondary', // Priority level of the button. Values available: primary, secondary
							click: function() { // Click event of the button, this click event adds a close function
								jQuery(this).dialog('close');
							}
						},
						'save' : {
							text: 'Save',
							priority: 'primary',
							"class": 'evo-btn-primary', // Add class to button option. Add class of "evo-btn-primary" for primary button styles
							click: function() {
								jQuery(this).dialog('close');
							}
						}
					}
				});
				*/

				// Modal dialog with long content and fixed buttons (jQuery UI generated) example click event init
				// modalDialogLongFixedExampleClickEvent();

				//----

				// Modal dialog click outside to close example
				/*
				evoDialogModal('js-evo-dialog-modal-clickoutside-example',{

					// Click outside option: click outside modal to close it
					clickOutside: true, // clicking outside the dialog will close it
					clickOutsideTrigger: '#js-evo-dialog-modal-clickoutside-example-btn' // Element (id or class) that triggers the dialog opening 

				});
				*/

				// Modal dialog with click outside example click event init
				// modalDialogClickOutsideExampleClickEvent();

			// LOADING ANIMATION MODAL

				// Loading animation image modal
				/*
				evoDialogModal('js-evo-dialog-loading',{
					dialogClass:'evo-dialog evo-dialog-modal evo-dialog-loading no-close-button'
				});
				*/

				// Loading animation image modal click example event init
				// modalDialogLoadingImageExampleClickEvent();

				// Loading animation icon modal
				/*
				evoDialogModal('js-evo-dialog-loading-icon',{
					dialogClass:'evo-dialog evo-dialog-modal evo-dialog-loading no-close-button'
				});
				*/

				// Loading animation icon modal example click event init
				// modalDialogLoadingIconExampleClickEvent();


		// SCROLL PANE

			// Custom scroll pane example
			evoScrollPaneCustom('js-evo-scroll-pane-custom-example',{
				setHeight: 200
			});


		// SLIDER

			// Slider example - horizontal (default)
			evoSlider('js-evo-slider-horizontal-example');

			// Slider range example - horizontal (default)
			evoSliderRange('js-evo-slider-range-horizontal-example');

			// Slider range example - horizontal - fixed min
			evoSliderRangeSingleHandle('js-evo-slider-range-horizontal-min-example',{
				range: 'min'
			});

			// Slider range example - horizontal - fixed max
			evoSliderRangeSingleHandle('js-evo-slider-range-horizontal-max-example',{
				range: 'max'
			});

			// Slider example - vertical
			evoSlider('js-evo-slider-vertical-example',{
				orientation: 'vertical'
			});

			// Slider range example - vertical
			evoSliderRange('js-evo-slider-range-vertical-example',{
				orientation: 'vertical'
			});

			// Slider range example - vertical - fixed min
			evoSliderRangeSingleHandle('js-evo-slider-range-vertical-min-example',{
				orientation: 'vertical',
				range: 'min'
			});

			// Slider range example - vertical - fixed max
			evoSliderRangeSingleHandle('js-evo-slider-range-vertical-max-example',{
				orientation: 'vertical',
				range: 'max'
			});


		// TABS

			// Tabs example
			// evoTabs('js-evo-tabs-example');

		
		// ADVANCED FILTER

			// Advanced filter example
			// evoAdvancedFilter('js-evo-advanced-filter-example');
			
});