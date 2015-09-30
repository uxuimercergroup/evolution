// FUNCTIONS
//--------------------------------------------------------------------------------------------------------

// SITE GET CODE TOGGLE
var siteCodeToggle = function(){
	jQuery('.site-get-code').click(function() {
		jQuery('div.site-html-ctn').toggle();
	});
};


// DOCUMENT READY
//--------------------------------------------------------------------------------------------------------

$(document).foundation({

	// FOUNDATION INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------

	

});

$(function() {

	// INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------

		// SITE GET CODE TOGGLE
		siteCodeToggle();

		// ICON REFERENCE DATA TABLE
		evoDataTable('evo-data-table-icon-reference',{
			searching: true,
			paging: false,
			info: true,
			order: [[0, 'asc']],
			columns: [
				{orderable: true},
				{orderable: false},
				{orderable: false},
				{orderable: true},
				{orderable: true}
			],
			language: {
			    sSearch: '',
			    searchPlaceholder: "Filter"
			}
		});

		// JS LIBRARY INITS

			// GOOGLE PRETTIFY INIT (for code snippet coloring/formating)
			prettyPrint();


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


		// CAROUSEL

			// Carousel example
			evoCarousel('evo-carousel-example');


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

});