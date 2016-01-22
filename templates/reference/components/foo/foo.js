//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v3.0.1
// Foo Component v1.0 - JS
// DATE - August 19, 2015
// AUTHOR - Doug Fraize, Matthew Holmes, Sherry Seeton
//--------------------------------------------------------------------------------------------------------

// FOO COMPONENT - BEGINS
	var evoCompFoo = function(compObjectDataValue){
		var compObject = jQuery('[data-evo-comp='+compObjectDataValue+']');
		compObject.click(function() {
			jQuery(this).toggleClass('evo-comp-foo-color');
		});
	}
	evoCompFoo('foo');
	evoCompFoo('foo2');
// FOO COMPONENT - ENDS