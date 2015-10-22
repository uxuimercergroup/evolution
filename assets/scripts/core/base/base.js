//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v3.0.1 - Base JS Functions
// DATE - June 3, 2015
// AUTHOR - Doug Fraize, Matthew Holmes
//--------------------------------------------------------------------------------------------------------

// BUTTONS
//--------------------------------------------------------------------------------------------------------

	// INTERACTIVE BUTTONS
	var evoButtonInteractive = function(objectDataValue){
		var evoButtonInteractiveDataObject = '[data-evo-button-interactive='+objectDataValue+']';
		var evoButtonInteractiveResetText = jQuery(evoButtonInteractiveDataObject).html();
		var d = 'disabled';
		jQuery(evoButtonInteractiveDataObject).click(function(){
			jQuery(evoButtonInteractiveDataObject).html('loading&hellip;').addClass(d).attr(d, d);
			setTimeout(function () {
				jQuery(evoButtonInteractiveDataObject).html(evoButtonInteractiveResetText).removeClass(d).removeAttr(d, d);
			}, 3000)
		});
	}

	// DISABLED ANCHOR BUTTONS FOUNDATION FIX
	var evoButtonDisabled = function(){
		jQuery('.disabled').click(function(e){
			return false;
		});
	}

	// Disabled Anchor Buttons Init
	evoButtonDisabled();


// FORMS
//--------------------------------------------------------------------------------------------------------

	// PLACEHOLDER ATTRIBUTE POLYFILL FOR IE9
	var evoFormPlaceholderPolyFill = function(){
		jQuery('input, textarea').placeholder();
	}

	// Placeholder Attribute Polyfill for IE9 Init
	evoFormPlaceholderPolyFill();
	