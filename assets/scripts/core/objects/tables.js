//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.7 - Interactive Table JS
// DATE - June 3, 2015
// AUTHOR - Doug Fraize, Matthew Holmes
//--------------------------------------------------------------------------------------------------------

// Interative tables use a jQuery plugin library called FooTables. Please refer to the FooTable reference
// guide for options available to customize your interactive table.
//
// Reference:
//
// http://fooplugins.com/footable-demos/

var evoInteractiveTable = function() {

	// EVO FOOTABLES DATA TABLE
	function fooTables(){
		jQuery('.evo-footable').footable({
			addRowToggle: true
		}).trigger('.evo-footable-toggle');
	};

	// THIS IS THE FOOTABLE INIT
	fooTables();

	// FOOTABLE SORTING
	// THIS HANDLES THE ONLOAD DEFAULT SORT
	var colIndexReady = $('.js-evo-footable-sorted').index();

	$('.js-evo-footable-sorted').ready(function() {
		$('.evo-footable tbody tr').each(function() {
			$(this).find('td').each(function(i) {
				if (i == colIndexReady) {
					$(this).addClass('evo-highlight');
				} else {
					$(this).removeClass('evo-highlight');
				}
			});
		});
	});

	// THIS HANDLES THE CLICK EVENT FOR SORTING
	$('.evo-footable thead th').click(function() {
		var colIndex = $(this).index();
		$('.evo-footable tbody tr').each(function() {
			$(this).find('td').each(function(i) {
				if (i == colIndex) {
					$(this).addClass('evo-highlight');
				} else {
					$(this).removeClass('evo-highlight');
				}
			});
		});
	});

}

// Interactive Tables Init (FooTables)
evoInteractiveTable();
