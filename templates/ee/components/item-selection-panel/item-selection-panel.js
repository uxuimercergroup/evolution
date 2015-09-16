//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - v3.0.1 - Employee Portal Family
// Item Selection Panel Component v1.0 - JS
// DATE - September 1, 2015
// AUTHOR - Doug Fraize, Matthew Holmes, Sherry Seeton
//--------------------------------------------------------------------------------------------------------

// ITEM SELECTION PANEL ITEM SELECTED TOGGLE - BEGINS
var evoItemSelectionPanelItemSelected = function (){
	jQuery('[data-evo-item-selection-panel-item]').click(function(event) {
		jQuery(this).toggleClass('evo-item-selection-panel-item-selected');
	});
}
evoItemSelectionPanelItemSelected();
// ITEM SELECTION PANEL ITEM SELECTED TOGGLE - ENDS