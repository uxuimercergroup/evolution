//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.4 - Interactive Table JS
// DATE - April 4, 2014
// AUTHOR - Doug Fraize, Matthew Holmes
//--------------------------------------------------------------------------------------------------------

// Interative tables use a jQuery plugin library called FooTables. Please refer to the FooTable reference
// guide for options available to customize your interactive table.
//
// Reference:
//
// http://fooplugins.com/footable-demos/

var mulInteractiveTable = function() {

	// MUL FOOTABLES DATA TABLE
	function fooTables(){
		jQuery('.mul-footable').footable({
			addRowToggle: true
		}).trigger('.mul-footable-toggle');
	};

	// THIS IS THE FOOTABLE INIT
	fooTables();

	// FOOTABLE SORTING
	// THIS HANDLES THE ONLOAD DEFAULT SORT
	var colIndexReady = $('.js-mul-footable-sorted').index();

	$('.js-mul-footable-sorted').ready(function() {
		$('.mul-footable tbody tr').each(function() {
			$(this).find('td').each(function(i) {
				if (i == colIndexReady) {
					$(this).addClass('mul-highlight');
				} else {
					$(this).removeClass('mul-highlight');
				}
			});
		});
	});

	// THIS HANDLES THE CLICK EVENT FOR SORTING
	$('.mul-footable thead th').click(function() {
		var colIndex = $(this).index();
		$('.mul-footable tbody tr').each(function() {
			$(this).find('td').each(function(i) {
				if (i == colIndex) {
					$(this).addClass('mul-highlight');
				} else {
					$(this).removeClass('mul-highlight');
				}
			});
		});
	});

}

// Interactive Tables Init (FooTables)
mulInteractiveTable();
