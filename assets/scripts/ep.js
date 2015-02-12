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
	}

	// FORM TOGGLE CONTENT
	var evoFormToggleContent = function(){
		jQuery('.js-evo-toggle-form-content').focus(function(){
			var id = 'form-item' + jQuery(this).attr('data-evo-form-toggle');
			jQuery('#' + id).fadeToggle(2000);
			return false;
		});
	}

	// ITEM SELECTION CLASS TOGGLE
	var itemSelectionClassToggle = function (){
		jQuery('.js-evo-category-highlight').click(function(event) {
			jQuery(this).toggleClass('evo-category-highlight');
		});
	}

	var showPlanComponent = function (){
		jQuery('.js-evo-disable-item').click(function() {
			jQuery('.evo-hide-slider').show();
		});
	};

	var hidePlanComponent = function (){
		jQuery('.js-evo-enable-item').click(function() {
			jQuery('.evo-hide-slider').hide();
		});
	};

// DOCUMENT READY
//--------------------------------------------------------------------------------------------------------

$(document).foundation({

	// FOUNDATION INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------

	

});

$(function() {


	// INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------

		// FIXES FLASH OF UNSTYLED CONTENT BUG - WHERE PAGE LOADS FASTER THAN JS AND MODERNIZR
		// HIDE PAGE WITH CSS CLASS PROVIDED BY MODERNIZR AND WHEN DOCUMENT IS READY, SHOW PAGE WITH JS
		evoFixFOUC();

		// FORM TOGGLE CONTENT
		evoFormToggleContent();

		// ITEM SELECTION CLASS TOGGLE
		itemSelectionClassToggle();

		// Carousel example
		evoCarousel('js-evo-carousel-example',{
			autoPlay: false
		});

		// plan show/hide component
		hidePlanComponent();
		showPlanComponent();

});