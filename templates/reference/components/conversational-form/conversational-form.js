//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v3.0.1
// Conversational Form Component v1.0 - JS
// DATE - October 6, 2015
// AUTHOR - Doug Fraize, Matthew Holmes, Sherry Seeton
//--------------------------------------------------------------------------------------------------------

// CONVERSATIONAL FORM COMPONENT - BEGINS

// FORM TOGGLE CONTENT
	var evoFormToggleContent = function(){
		jQuery('.js-evo-toggle-form-content').focus(function(){
			var id = 'form-item' + jQuery(this).attr('data-evo-form-toggle');
			jQuery('#' + id).fadeIn(2000);
			return false;
		});
	}
	evoFormToggleContent();
	
// CONVERSATIONAL FORM COMPONENT - ENDS