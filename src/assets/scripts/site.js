//--------------------------------------------------------------------------------------------------------
// {{ meta_project }} v{{ meta_version }} - Site JS
// DATE: {{ meta_date }}
// AUTHOR: {{ meta_author }}
// URL: {{ meta_url }}
//--------------------------------------------------------------------------------------------------------

// =======================================================================================================
// JAVASCRIPT LIBRARIES
// =======================================================================================================



// =======================================================================================================
// SITE FUNCTIONS AND INITIALIZATIONS
// =======================================================================================================

// FUNCTIONS
//--------------------------------------------------------------------------------------------------------


	// SITE GLOBAL
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

		// EVO MAGELLAN
		var evoMagellan = function(){
			jQuery('[data-evo-magellan] dd').click(function() {
				jQuery('[data-evo-magellan] dd').removeClass('active');
				jQuery(this).addClass('active');
			});
		};


		// WHY EVOLUTION ANIMATION
		var evoWhyEvolution = function(){
			/* SHOW SCREENSHOT THAT CORRESPONDS WITH TEXT BLOCK */

			$(window).scroll( function(){	
			    
			    // Check location of text block 
			    if ($('#text1').length) {
        					  
			        var bottom_of_object = $('#text1').offset().top + $('#text1').outerHeight(true);
			        var bottom_of_window = $(window).scrollTop() + $(window).height();

			     // If text block is completely visible in the window, show corresponding image
			        if( bottom_of_window > bottom_of_object ){
			            $('#image1').removeClass('hideme');
			            $('#image0').addClass('hideme');	
			           	$('#image1').addClass('sticky-image');	       
			        } else if( bottom_of_window < bottom_of_object ){
			            $('#image1').addClass('hideme');
			            $('#image0').removeClass('hideme');
			           	$('#image1').removeClass('sticky-image');	
			        }
			    }

			    // Check location of text block   
			    if ($('#text2').length) {

			        var bottom_of_object = $('#text2').offset().top + $('#text2').outerHeight();
			        var bottom_of_window = $(window).scrollTop() + $(window).height();

			     // If text block is completely visible in the window, show corresponding image
			        if( bottom_of_window > bottom_of_object ){
			            $('#image2').removeClass('hideme');
			           	$('#image2').addClass('sticky-image');
			        } else if( bottom_of_window < bottom_of_object ){
			            $('#image2').addClass('hideme');
			           	$('#image2').removeClass('sticky-image');	
			        }  
			       }		
			    
			    // Check location of text block
			    if ($('#text3').length) {

			        var bottom_of_object = $('#text3').offset().top + $('#text3').outerHeight();
			        var bottom_of_window = $(window).scrollTop() + $(window).height();

			     // If text block is completely visible in the window, show corresponding image
			        if( bottom_of_window > bottom_of_object ){
			            $('#image3').removeClass('hideme');
			           	$('#image3').addClass('sticky-image');	            
			        } else if( bottom_of_window < bottom_of_object ){
			            $('#image3').addClass('hideme');
			           	$('#image3').removeClass('sticky-image');	
			        }
			    } 

			     // Check location of text block
			    if ($('#text4').length) { 

			        var bottom_of_object = $('#text4').offset().top + $('#text4').outerHeight();
			        var bottom_of_window = $(window).scrollTop() + $(window).height();

			     // If text block is completely visible in the window, show corresponding image
			        if( bottom_of_window > bottom_of_object ){
			            $('#image4').removeClass('hideme');
			           	$('#image4').addClass('sticky-image');	            
			        } else if( bottom_of_window < bottom_of_object ){
			            $('#image4').addClass('hideme');
			           	$('#image4').removeClass('sticky-image');	
			        }
			    }  

			     // Check location of text block
			    if ($('#text5').length) {

			        var bottom_of_object = $('#text5').offset().top + $('#text5').outerHeight();
			        var bottom_of_window = $(window).scrollTop() + $(window).height();

			     // If text block is completely visible in the window, show corresponding image
			        if( bottom_of_window > bottom_of_object ){
			            $('#image5').removeClass('hideme');
			           	$('#image5').addClass('sticky-image');	            
			        } else if( bottom_of_window < bottom_of_object ){
			            $('#image5').addClass('hideme');
			           	$('#image5').removeClass('sticky-image');	
			        }
			    } 

			     // Check location of text block
			    if ($('#text6').length) { 

			        var bottom_of_object = $('#text6').offset().top + $('#text6').outerHeight();
			        var bottom_of_window = $(window).scrollTop() + $(window).height();

			     // If text block is completely visible in the window, show corresponding image
			        if( bottom_of_window > bottom_of_object ){
			            $('#image6').removeClass('hideme');
			           	$('#image6').addClass('sticky-image');	            
			        } else if( bottom_of_window < bottom_of_object ){
			            $('#image6').addClass('hideme');
			           	$('#image6').removeClass('sticky-image');	
			        } 
			    }
			});
		};


	// PATTERN LIBRARY PAGES
	//----------------------------------------------------------------------------------------------------

		// EQUALIZE CONTENT COLUMNS ON TOGGLE OF TABS
		var evoSitePatternLibTabsEqualizer = function(){
			jQuery('.evo-site-tabs--pattern-library-tabs').on('toggled', function (event, tab) {
			    $(document).foundation('equalizer', 'reflow');
			});
		}


// DOCUMENT READY
//--------------------------------------------------------------------------------------------------------

$(document).foundation({

	// FOUNDATION INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------
	
		// FOUNDATION MAGELLAN OPTIONS
		"magellan-expedition": {
			active_class: 'active', // specify the class used for active sections
			threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
			destination_threshold: 40, // pixels from the top of destination for it to be considered active
			throttle_delay: 50, // calculation throttling to increase framerate
			fixed_top: 18, // top distance in pixels assigend to the fixed element on scroll
			offset_by_height: false // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
		}

});

$(function() {

	// INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------

		// SITE GLOBAL
		//------------------------------------------------------------------------------------------------

			// SCROLL TO TOP
			evoScrollToTop();

			// SCROLL TO LOCATION
			evoScrollToLocation();

			// EVO MAGELLAN
			evoMagellan();

			// EVO WHY EVOLUTION ANIMATION
			evoWhyEvolution();

			// COPY TO CLIPBOARD
			var clipboard = new Clipboard('.copy-to-clipboard');


		// PATTERN LIBRARY PAGES
		//------------------------------------------------------------------------------------------------

			// EQUALIZE CONTENT COLUMNS ON TOGGLE OF TABS
			evoSitePatternLibTabsEqualizer();

			// SETTINGS TAB DATA TABLE
			evoDataTable('evo-data-table-pattern-library-setting-options',{
				"paging": false,
				"info": false
			});

			evoDataTable('evo-data-table-pattern-library-icons',{
				"paging": false,
				"info": false
			});

			// POSITION FIXED BY SCROLL
			evoFixedByScroll('evo-magellan--side-nav', 230);


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
				
				// Dateoicker masked date input example
				evoDatepicker('evo-datepicker-masked-example');

			// SCROLL PANE

				// Scroll pane example
				evoScrollPane('evo-scroll-pane-example');

				// Horizontal scroll pane example
				evoScrollPane('evo-scroll-pane-horizontal-example',{
					axis:'x',
					mouseWheel:{
						axis:'x'
					},
					advanced:{
						autoExpandHorizontalScroll: true
					}
				});

				// Horizontal + vertical scroll pane example
				evoScrollPane('evo-scroll-pane-horizontal-vertical-example',{
					axis:'yx',
					advanced:{
						autoExpandHorizontalScroll: true
					}
				});

				// Scroll pane custom height example
				evoScrollPane('evo-scroll-pane-custom-height-example',{
					setHeight: 200
				});

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