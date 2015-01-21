//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.6 - Autocomplete JS
// DATE - January 13, 2015
// AUTHOR - Doug Fraize, Matthew Holmes, Doug Richar, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// Define autocomplete defaults
var evoAutocompleteDefaults = {
	autoFocus: true,
	delay: 0,
	minLength: 3
};

// Used to create the highlight for the autocomplete
var evoAutocompleteHighlight = function() {

	$.ui.autocomplete.prototype._renderItem = function (ul, item) {
		var keywords = $.trim(this.term).split(' ').join('|');
		var output = item.label.replace(new RegExp("(" + keywords + ")", "gi"), '<span class="ui-menu-item-highlight">$1</span>');
		return $("<li>")
			.append($("<a>").html(output))
			.appendTo(ul);
	};

};

// Autocomplete function, pass id of autocomplete input and any autocomplete options you want to add/override
var evoAutocomplete = function(id, options) {
	
	// Variable to define id of autocomplete
	var autocompleteId = jQuery('#'+id);
	
	// Apply autocomplete to specified element along with default options
	autocompleteId.autocomplete(jQuery.extend({},evoAutocompleteDefaults,options));

	// Element the autocomplete menu should be appended to, usually a container that contains the autocomplete input
	autocompleteId.autocomplete({
		appendTo: '#'+id+'-ctn'
	});

	// Initialize autocomplete highlight function
	evoAutocompleteHighlight();
};