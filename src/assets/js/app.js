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

		// POSITION FIXED BY SCROLL
		var evoFixedByScroll = function(objectValue, scrollDistance){
			$(window).scroll(function() {
				if ($(window).scrollTop() > scrollDistance) {
					jQuery('[data-evo-fixed-by-scroll=' + objectValue +']').addClass('fixed evo-scroll-to-fixed');
	  			}else{
	  				jQuery('[data-evo-fixed-by-scroll=' + objectValue +']').removeClass('fixed evo-scroll-to-fixed');
	  			}
			});
		}

		// SITE MAGELLAN
		var evoMagellan = function(){
			jQuery('[data-evo-magellan] dd').click(function() {
				jQuery('[data-evo-magellan] dd').removeClass('active');
				jQuery(this).addClass('active');
			});
		};


	// PATTERN LIBRARY PAGES
	//----------------------------------------------------------------------------------------------------

		// DATA TABLE REDRAW FUNCTION
		var evoSiteDataTableRedraw = function(){
			jQuery('[data-evo-data-table]').DataTable().draw();
		}

		// REINIT ON TOGGLE OF PATTERN LIBRARY CONTENT TABS
		var evoSitePatternLibTabsReInit = function(){
			jQuery('.evo-site-tabs--pattern-library-tabs').on('toggled', function (event, tab) {

				// ReInit equalizer on tab toggling, fixes bug with equalizer in hidden tabs
			    Foundation.reInit('equalizer');

			    // Redraw type characters data table on tab toggling, fixes scrolling table fixed thead injected layout
			    evoSiteDataTableRedraw();
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

			// SITE MAGELLAN
			evoMagellan();

			// SITE TESTIMONIALS CAROUSEL
			evoCarousel('evo-site-testimonials-carousel', {
				autoHeight: false,
				navigation: false,
				paginationSpeed: 600
			});

			// SITE SLIDES CAROUSEL
			evoCarousel('evo-site-slides-carousel', {
				autoPlay: false,
				autoHeight: false
			});

			// COPY TO CLIPBOARD
			var clipboard = new Clipboard('.copy-to-clipboard');


		// PATTERN LIBRARY PAGES
		//------------------------------------------------------------------------------------------------

			// REINIT ON TOGGLE OF PATTERN LIBRARY CONTENT TABS
			evoSitePatternLibTabsReInit();

			// POSITION FIXED BY SCROLL
			evoFixedByScroll('evo-magellan--side-nav', 230);

			// SETTINGS TAB DATA TABLE
			evoDataTable('evo-data-table-pattern-library-setting-options',{
				paging: false,
				info: false
			});

			// SETTINGS TAB DATA TABLE - SCROLLING
			evoDataTable('evo-data-table-pattern-library-setting-options-scrolling',{
				scrollY: '350px',
				scrollCollapse: true,
				paging: false,
				info: false
			});

			// ICOMOON ICONS DATA TABLE
			evoDataTable('evo-data-table-pattern-library-icons',{
				paging: false,
				info: false
			});

			// TYPE CHARACTERS DATA TABLE
			evoDataTable('evo-data-table-type-characters',{
				scrollY: '200px',
				scrollCollapse: true,
				paging: false,
				info: false
			});

			// MARGIN PADDING SETTINGS TABLE
			evoDataTable('evo-data-table-margin-padding-settings',{
				scrollY: '350px',
				scrollCollapse: true,
				paging: false,
				info: false
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

			// CAROUSEL

				// Carousel example
				evoCarousel('evo-carousel-example');

			// DATA TABLE

				// Data Table example
				evoDataTable('evo-data-table-example');

				// Data Table Vertical Scroll example
				evoDataTable('evo-data-table-vertical-scroll-example',{
					scrollY: '200px',
					scrollCollapse: true,
					paging: false
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
					]
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