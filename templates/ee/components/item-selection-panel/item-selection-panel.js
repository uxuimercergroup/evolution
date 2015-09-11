//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v3.0.1 - Employee Portal Family
// Item Selection Panel Component v1.0 - JS
// DATE - September 1, 2015
// AUTHOR - Doug Fraize, Matthew Holmes, Sherry Seeton
//--------------------------------------------------------------------------------------------------------

// ITEM SELECTION CLASS TOGGLE
var evoItemSelectionClassToggle = function (){
	jQuery('.js-evo-category-highlight').click(function(event) {
		jQuery(this).toggleClass('evo-category-highlight');
	});
}

evoItemSelectionClassToggle();