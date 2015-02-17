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

	// RANGE SLIDER - CONTRIBUTIONS

	// Pass data attribute value of slider range object
	var evoSliderContributions = function(objectDataValue) {
		
		// Variable to define slider range object based on data attribute value
		var sliderDataValue = jQuery('[data-slider='+objectDataValue+']');

		// Slider Contribution values
		var userContributionValue = 5;
		var companyContributionValue = 3;
		var peerContributionValue = 3;


		// Slider Max value
		var sliderMax = 20;

		// Slider
		sliderDataValue.slider({
			animate: true, // Animated slide on/off
			min: 0, // Min value to show on slider
			max: sliderMax, // Max value to show on slider
			orientation: "horizontal", // Orientation: horizontal (default) or vertical
			step: 1, // Determines the size or amount of each interval or step the slider takes between the min and max
			value: userContributionValue, // Start value for the slider handle
			range: "min",
			slide: function (event, ui) {
				jQuery('.ui-slider-handle .evo-slider-tooltip', this).html(ui.value+'%');
			},
			create: function (event, ui) {
				$('.ui-slider-handle', this).html('<span class="evo-slider-tooltip">' + ui.value + '%</span>');
				$('.ui-slider-handle .evo-slider-tooltip', this).hide();
			},
			start: function (event, ui) {
				$('.ui-slider-handle .evo-slider-tooltip', this).fadeIn(250);
			},
			stop: function (event, ui) {
				$('.ui-slider-handle .evo-slider-tooltip', this).fadeOut(500);
			}
		});

		// Slider Markers
		var sliderMultiplier = 100 / sliderMax;
		$('.evo-slider-marker-user').css({ marginLeft: (userContributionValue * sliderMultiplier) + '%' });
		$('.evo-slider-marker-company').css({ marginLeft: (companyContributionValue * sliderMultiplier)+'%' });
		$('.evo-slider-marker-peers').css({ marginLeft: (peerContributionValue * sliderMultiplier) + '%' });

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

		// CAROUSEL
		evoCarousel('js-evo-ep-carousel',{
			autoPlay: false
		});

		// CAROUSEL SHOW/HIDE
		hidePlanComponent();
		showPlanComponent();

		// RANGE SLIDER - CONTRIBUTIONS
		evoSliderContributions('js-evo-slider-contributions');

});