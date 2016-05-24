//--------------------------------------------------------------------------------------------------------
// {{ meta_project }} v{{ meta_version }} - Application JS
// DATE: {{ meta_date }}
// AUTHOR: {{ meta_author }}
// URL: {{ meta_url }}
//--------------------------------------------------------------------------------------------------------

// =======================================================================================================
// APPLICATION FUNCTIONS AND INITIALIZATIONS
// =======================================================================================================

// FUNCTIONS
//--------------------------------------------------------------------------------------------------------


	// GLOBAL
	//----------------------------------------------------------------------------------------------------

		// SCROLL TO TOP
		var evoScrollToTop = function(){
			jQuery('[data-evo-scroll-to-top]').click(function(e){
				jQuery('body,html').animate({
					scrollTop: 0
				}, 500);
				e.preventDefault();
			});
		}

		// SCROLL TO LOCATION
		var evoScrollToLocation = function(){
			jQuery('[data-evo-scroll-to-location]').click(function(e){
				var scrollToLocationValue = jQuery(this).attr('href');
				jQuery('html, body').animate({
					scrollTop: jQuery(scrollToLocationValue).offset().top
				}, 500);
				e.preventDefault();
			});
		}


	// PATTERN LIBRARY PAGES
	//----------------------------------------------------------------------------------------------------

		// DATA TABLE REDRAW FUNCTION
		var evoSiteDataTableRedraw = function(){
			jQuery('[data-evo-data-table]').DataTable().draw();
		}

		// REINIT ON TOGGLE OF PATTERN LIBRARY CONTENT TABS
		var evoSitePatternLibTabsReInit = function(){
			jQuery('.evo-site-tabs--pattern-library-tabs').on('change.zf.tabs', function(){

				// ReInit equalizer on tab toggling, fixes bug with equalizer in hidden tabs
				Foundation.reInit('equalizer');

				// Redraw type characters data table on tab toggling, fixes scrolling table fixed thead injected layout
				evoSiteDataTableRedraw();

				// Recalculate stickys when tab toggling on large media query only
				var checkMediaQueryLarge = Foundation.MediaQuery.atLeast('large');
				if (checkMediaQueryLarge) {
					jQuery('.sticky').foundation('_calc', true);
				};

			});
		}

		// REINIT ON ABIDE FORM VALIDATION
		var evoSiteAbideReInit = function(){
			jQuery('form[data-abide]').on('forminvalid.zf.abide', function(ev,frm){

				// ReInit equalizer on invalid abide form validation
				Foundation.reInit('equalizer');

			})
			.on('formvalid.zf.abide', function(ev,frm){

				// ReInit equalizer on valid abide form validation
				Foundation.reInit('equalizer');

			})
			.on('formreset.zf.abide', function(ev,frm){

				// ReInit equalizer on form reset
				Foundation.reInit('equalizer');

			})
			.on('invalid.zf.abide', function(ev,elem){

				// ReInit equalizer on invalid abide input validation
				Foundation.reInit('equalizer');

			})
			.on('valid.zf.abide', function(ev,elem){

				// ReInit equalizer on valid abide input validation
				Foundation.reInit('equalizer');

			})
		}

		// REINIT ON ORBIT SLIDE CHANGE
		var evoSiteOrbitReInit = function(){
			jQuery('[data-orbit]').on('slidechange.zf.orbit', function(){

				// ReInit equalizer on invalid abide form validation
				Foundation.reInit('equalizer');

			});
		}


// INITIALIZE FOUNDATION
//--------------------------------------------------------------------------------------------------------

$(document).foundation();


// DOCUMENT READY
//--------------------------------------------------------------------------------------------------------

$(function() {

	// INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------

		// GLOBAL
		//------------------------------------------------------------------------------------------------

			// SCROLL TO TOP
			evoScrollToTop();

			// SCROLL TO LOCATION
			evoScrollToLocation();

			// COPY TO CLIPBOARD
			var clipboard = new Clipboard('.copy-to-clipboard');


		// PATTERN LIBRARY PAGES
		//------------------------------------------------------------------------------------------------

			// REINIT ON TOGGLE OF PATTERN LIBRARY CONTENT TABS
			evoSitePatternLibTabsReInit();

			// REINIT ON ABIDE FORM VALIDATION
			evoSiteAbideReInit();

			// REINIT ON ORBIT SLIDE CHANGE
			evoSiteOrbitReInit();

			// SETTINGS TAB DATA TABLE
			evoDataTable('evo-data-table-pattern-library-setting-options',{
				paging: false,
				info: false,
				"initComplete": function(settings, json) {
					Foundation.reInit('equalizer'); // ReInit equalizer after DataTable has been initialized
				}
			});

			// SETTINGS TAB DATA TABLE - SCROLLING
			evoDataTable('evo-data-table-pattern-library-setting-options-scrolling',{
				scrollY: '350px',
				scrollCollapse: true,
				paging: false,
				info: false,
				"initComplete": function(settings, json) {
					Foundation.reInit('equalizer'); // ReInit equalizer after DataTable has been initialized
				}
			});

			// ICOMOON ICONS DATA TABLE
			evoDataTable('evo-data-table-pattern-library-icons',{
				paging: false,
				info: false,
				"initComplete": function(settings, json) {
					Foundation.reInit('equalizer'); // ReInit equalizer after DataTable has been initialized
				}
			});

			// TYPE CHARACTERS DATA TABLE
			evoDataTable('evo-data-table-type-characters',{
				scrollY: '200px',
				scrollCollapse: true,
				paging: false,
				info: false,
				"initComplete": function(settings, json) {
					Foundation.reInit('equalizer'); // ReInit equalizer after DataTable has been initialized
				}
			});

			// MARGIN/PADDING SETTINGS TABLE
			evoDataTable('evo-data-table-margin-padding-settings',{
				scrollY: '350px',
				scrollCollapse: true,
				paging: false,
				info: false,
				"initComplete": function(settings, json) {
					Foundation.reInit('equalizer'); // ReInit equalizer after DataTable has been initialized
				}
			});


		// KITCHEN SINK DEMOS
		//------------------------------------------------------------------------------------------------

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

				// Autocomplete example
				evoAutocomplete('evo-autocomplete-example',{
					source: evoAutocompleteExampleData
				});

			// BUTTONS

				// Interactive button examples
				evoButtonInteractive('evo-button-interactive-secondary-example');
				evoButtonInteractive('evo-button-interactive-primary-example');

			// DATA TABLE

				// Data Table example
				evoDataTable('evo-data-table-example',{
					"initComplete": function(settings, json) {
						Foundation.reInit('equalizer'); // ReInit equalizer after DataTable has been initialized
					}
				});

				// Data Table Vertical Scroll example
				evoDataTable('evo-data-table-vertical-scroll-example',{
					scrollY: '200px',
					scrollCollapse: true,
					paging: false,
					"initComplete": function(settings, json) {
						Foundation.reInit('equalizer'); // ReInit equalizer after DataTable has been initialized
					}
				});

				// Data Table Select All Checkboxes example
				evoDataTable('evo-data-table-select-all-checkboxes-example',{
					searching: false,
					paging: false,
					info: false,
					order: [[1, 'asc']],
					columns: [
						{orderable: false},
						{orderable: true},
						{orderable: true},
						{orderable: true},
						{orderable: true}
					],
					"initComplete": function(settings, json) {
						Foundation.reInit('equalizer'); // ReInit equalizer after DataTable has been initialized
					}
				});

			// DATEPICKER

				// Datepicker read only input example
				evoDatepicker('evo-datepicker-readonly-example');
			 
				// Datepicker default text input example
				evoDatepicker('evo-datepicker-default-example');
				
				// Datepicker with message example
				evoDatepicker('evo-datepicker-message-example');
				
				// Datepicker masked date input example
				evoDatepicker('evo-datepicker-masked-example');

			// SLIDER

				// Slider horizontal (default) example
				evoSlider('evo-slider-default');

				// Slider range horizontal (default) example
				evoSliderRange('evo-slider-range-default');

				// Slider range horizontal - fixed min example
				evoSliderRangeSingleHandle('evo-slider-range-single-min',{
					range: 'min'
				});

				// Slider range horizontal - fixed max example
				evoSliderRangeSingleHandle('evo-slider-range-single-max',{
					range: 'max'
				});

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