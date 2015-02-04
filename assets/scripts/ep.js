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

/*
	var evoKeypressShowHidden = function() {
		$('.evo-form-conversational input').keypress(function(){
			$(this).next('span').show().next().addClass('next');
		});
	};

	var evoChangeShowHidden = function() {
		$(".evo-form-conversational select").change(function(){
			$(".next").show().next().addClass('next');
		});
	};
*/

	var evoFormToggleContent = function(){
		/*
		jQuery('.js-evo-toggle-form-content').keypress(function(){
			var id = 'form-item' + jQuery(this).attr('data-evo-form-toggle');
			jQuery('#' + id).toggle();
		});
		*/

		jQuery(".evo-form-conversational input").keyup(function() {
		    var curId = this.id.split("_")[1];
		    jQuery("#content_"+curId).html(jQuery(this).val());
		    jQuery("#content_"+curId).show();
		});




	}

// DOCUMENT READY
//--------------------------------------------------------------------------------------------------------
$(function() {

	// INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------

		// FIXES FLASH OF UNSTYLED CONTENT BUG - WHERE PAGE LOADS FASTER THAN JS AND MODERNIZR
		// HIDE PAGE WITH CSS CLASS PROVIDED BY MODERNIZR AND WHEN DOCUMENT IS READY, SHOW PAGE WITH JS
		evoFixFOUC();

		//evoKeypressShowHidden();
		//evoChangeShowHidden();
		evoFormToggleContent();
});