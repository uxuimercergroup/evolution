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

	// CAROUSEL SHOW/HIDE
	var showPlanComponent = function (){
		jQuery('.js-evo-disable-item').click(function() {
			var id = 'carousel-item' + jQuery(this).attr('data-evo-carousel-toggle');
			jQuery('#' + id).show();
			return false;
		});
	};

	var hidePlanComponent = function (){
		jQuery('.js-evo-enable-item').click(function() {
			jQuery(this).parent().hide();
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

		// Carousel show/hide
		hidePlanComponent();
		showPlanComponent();

		// MASK NUMERIC
		evoInputNumericMask();

});