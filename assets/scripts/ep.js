//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Employee Portal Family - Site JS
// DATE - January 21, 2015
// AUTHOR - Doug Fraize, Matthew Holmes, Doug Richar, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// =======================================================================================================
// JAVASCRIPT LIBRARIES
// =======================================================================================================




// =======================================================================================================
// SITE FUNCTIONS AND INITIALIZATIONS
// =======================================================================================================

// FUNCTIONS
//--------------------------------------------------------------------------------------------------------

	// FIXES FLASH OF UNSTYLED CONTENT BUG - WHERE PAGE LOADS FASTER THAN JS AND MODERNIZR
	// HIDE PAGE WITH CSS CLASS PROVIDED BY MODERNIZR AND WHEN DOCUMENT IS READY, SHOW PAGE WITH JS
	var evoFixFOUC = function() {
		jQuery('html.evo-mod-js').show();
	};

	var evoFormToggleContent = function(){
		jQuery('.js-evo-toggle-form-content').focus(function(){
			var id = 'form-item' + jQuery(this).attr('data-evo-form-toggle');
			jQuery('#' + id).fadeToggle(2000);
			return false;
		});
	};

// DOCUMENT READY
//--------------------------------------------------------------------------------------------------------
$(function() {

	// INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------

		// FIXES FLASH OF UNSTYLED CONTENT BUG - WHERE PAGE LOADS FASTER THAN JS AND MODERNIZR
		// HIDE PAGE WITH CSS CLASS PROVIDED BY MODERNIZR AND WHEN DOCUMENT IS READY, SHOW PAGE WITH JS
		evoFixFOUC();

		evoFormToggleContent();
});