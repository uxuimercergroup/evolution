// FUNCTIONS
//--------------------------------------------------------------------------------------------------------

	


// DOCUMENT READY
//--------------------------------------------------------------------------------------------------------

$(document).foundation({

	// FOUNDATION INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------

	

});

$(function() {

	// INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------

		

	
	// LIBRARY EXAMPLES
	//----------------------------------------------------------------------------------------------------

		// BUTTONS

			// Interactive button examples
			evoButtonInteractive('evo-button-interactive-secondary-example');
			evoButtonInteractive('evo-button-interactive-primary-example');

		// SLIDER

			// Slider horizontal (default) with interval ticks example
			evoSlider('evo-slider-default-ticks',{
				step: 10,
				ticks: true
			});

			// Slider range horizontal (default) with interval ticks example
			evoSliderRange('evo-slider-range-default-ticks',{
				step: 10,
				ticks: true
			});

			// Slider range horizontal - fixed min with interval ticks example
			evoSliderRangeSingleHandle('evo-slider-range-single-min-ticks',{
				range: 'min',
				step: 10,
				ticks: true
			});

			// Slider range horizontal - fixed max with interval ticks example
			evoSliderRangeSingleHandle('evo-slider-range-single-max-ticks',{
				range: 'max',
				step: 10,
				ticks: true
			});

});