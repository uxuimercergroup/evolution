//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.4 - Tooltip JS
// DATE - April 4, 2014
// AUTHOR - Doug Fraize, Matthew Holmes
//--------------------------------------------------------------------------------------------------------

// Extends Tooltipster 2.1.4 | 6/1/13
// Developed by: Caleb Jacob - calebjacob.com

// Documentation and API:
// http://calebjacob.com/tooltipster/
// https://github.com/iamceege/tooltipster


// TOOLTIP
//--------------------------------------------------------------------------------------------------------

	var mulTooltip = function(){

		// MUL Tooltip default options

			var mulTooltipHoverTrigger = 'hover'; // Tooltip will use hover event for triggering
			var mulTooltipClickTrigger = 'click'; // Tooltip will use click event for triggering
			var mulTooltipThemeClass = 'mul-tooltip'; // Custom theme class name for styling purposes
			var mulTooltipAnimationDelay = 100; // Delay how long it takes (in milliseconds) for the tooltip to start animating in
			var mulTooltipAnimationSpeed = 200; // Set the speed of the tooltip animation
			var mulTooltipMaxWidth = 200; // Set a max width for the tooltip. If the tooltip ends up being smaller than the set max width, the tooltip's width will be set automatically.
			var mulTooltipArrowColor = '#999999'; // Custom tooltip arrow color

		// Global enhancements for MUL Tooltip using Tooltipster API
		
			// Show and hide tooltips on focus/blur when user is using a keyboard instead of mouse
			jQuery('.js-mul-tooltip').focus(function() {
			   jQuery(this).tooltipster('show');
			});

			jQuery('.js-mul-tooltip').blur(function() {
			   jQuery(this).tooltipster('hide');
			});
		
		// MUL Tooltips on hover

			// Hover tooltip, position top
			jQuery(".js-mul-tooltip-hover-top").tooltipster({
				trigger: mulTooltipHoverTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: -5,
				position: 'top',
				arrowColor: mulTooltipArrowColor
			});

			// Hover tooltip, position bottom
			jQuery(".js-mul-tooltip-hover-bottom").tooltipster({
				trigger: mulTooltipHoverTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				position: 'bottom',
				arrowColor: mulTooltipArrowColor
			});

			// Hover tooltip, position left
			jQuery(".js-mul-tooltip-hover-left").tooltipster({
				trigger: mulTooltipHoverTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				position: 'left',
				arrowColor: mulTooltipArrowColor
			});

			// Hover tooltip, position right
			jQuery(".js-mul-tooltip-hover-right").tooltipster({
				trigger: mulTooltipHoverTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				position: 'right',
				arrowColor: mulTooltipArrowColor
			});

			// Hover tooltip, position top left
			jQuery(".js-mul-tooltip-hover-top-left").tooltipster({
				trigger: mulTooltipHoverTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: -5,
				position: 'top-left',
				arrowColor: mulTooltipArrowColor
			});

			// Hover tooltip, position bottom left
			jQuery(".js-mul-tooltip-hover-bottom-left").tooltipster({
				trigger: mulTooltipHoverTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				position: 'bottom-left',
				arrowColor: mulTooltipArrowColor
			});

			// Hover tooltip, position top right
			jQuery(".js-mul-tooltip-hover-top-right").tooltipster({
				trigger: mulTooltipHoverTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: -5,
				position: 'top-right',
				arrowColor: mulTooltipArrowColor
			});

			// Hover tooltip, position bottom right
			jQuery(".js-mul-tooltip-hover-bottom-right").tooltipster({
				trigger: mulTooltipHoverTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				position: 'bottom-right',
				arrowColor: mulTooltipArrowColor
			});

		// MUL Tooltips on hover for HTML objects (images, form elements, etc.)

			// Hover tooltip for HTML objects (images, form elements, etc.), position top
			jQuery(".js-mul-tooltip-hover-top-object").tooltipster({
				trigger: mulTooltipHoverTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				position: 'top',
				arrowColor: mulTooltipArrowColor
			});

			// Hover tooltip for HTML objects (images, form elements, etc.), position bottom
			jQuery(".js-mul-tooltip-hover-bottom-object").tooltipster({
				trigger: mulTooltipHoverTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				position: 'bottom',
				arrowColor: mulTooltipArrowColor
			});

			// Hover tooltip for HTML objects (images, form elements, etc.), position left
			jQuery(".js-mul-tooltip-hover-left-object").tooltipster({
				trigger: mulTooltipHoverTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 2,
				offsetX: 5,
				position: 'left',
				arrowColor: mulTooltipArrowColor
			});

			// Hover tooltip for HTML objects (images, form elements, etc.), position right
			jQuery(".js-mul-tooltip-hover-right-object").tooltipster({
				trigger: mulTooltipHoverTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 2,
				position: 'right',
				arrowColor: mulTooltipArrowColor
			});

			// Hover tooltip for HTML objects (images, form elements, etc.), position top left
			jQuery(".js-mul-tooltip-hover-top-left-object").tooltipster({
				trigger: mulTooltipHoverTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				offsetX: -7,
				position: 'top-left',
				arrowColor: mulTooltipArrowColor
			});

			// Hover tooltip for HTML objects (images, form elements, etc.), position bottom left
			jQuery(".js-mul-tooltip-hover-bottom-left-object").tooltipster({
				trigger: mulTooltipHoverTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				offsetX: -5,
				position: 'bottom-left',
				arrowColor: mulTooltipArrowColor
			});

			// Hover tooltip for HTML objects (images, form elements, etc.), position top right
			jQuery(".js-mul-tooltip-hover-top-right-object").tooltipster({
				trigger: mulTooltipHoverTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				offsetX: 5,
				position: 'top-right',
				arrowColor: mulTooltipArrowColor
			});

			// Hover tooltip for HTML objects (images, form elements, etc.), position bottom right
			jQuery(".js-mul-tooltip-hover-bottom-right-object").tooltipster({
				trigger: mulTooltipHoverTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				offsetX: 7,
				position: 'bottom-right',
				arrowColor: mulTooltipArrowColor
			});

		// MUL Tooltips on click

			// Click tooltip, position top
			jQuery(".js-mul-tooltip-click-top").tooltipster({
				trigger: mulTooltipClickTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: -5,
				position: 'top',
				arrowColor: mulTooltipArrowColor
			});

			// Click tooltip, position bottom
			jQuery(".js-mul-tooltip-click-bottom").tooltipster({
				trigger: mulTooltipClickTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				position: 'bottom',
				arrowColor: mulTooltipArrowColor
			});

			// Click tooltip, position left
			jQuery(".js-mul-tooltip-click-left").tooltipster({
				trigger: mulTooltipClickTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				position: 'left',
				arrowColor: mulTooltipArrowColor
			});

			// Click tooltip, position right
			jQuery(".js-mul-tooltip-click-right").tooltipster({
				trigger: mulTooltipClickTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				position: 'right',
				arrowColor: mulTooltipArrowColor
			});

			// Click tooltip, position top left
			jQuery(".js-mul-tooltip-click-top-left").tooltipster({
				trigger: mulTooltipClickTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: -5,
				position: 'top-left',
				arrowColor: mulTooltipArrowColor
			});

			// Click tooltip, position bottom left
			jQuery(".js-mul-tooltip-click-bottom-left").tooltipster({
				trigger: mulTooltipClickTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				position: 'bottom-left',
				arrowColor: mulTooltipArrowColor
			});

			// Click tooltip, position top right
			jQuery(".js-mul-tooltip-click-top-right").tooltipster({
				trigger: mulTooltipClickTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: -5,
				position: 'top-right',
				arrowColor: mulTooltipArrowColor
			});

			// Click tooltip, position bottom right
			jQuery(".js-mul-tooltip-click-bottom-right").tooltipster({
				trigger: mulTooltipClickTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				position: 'bottom-right',
				arrowColor: mulTooltipArrowColor
			});

		// MUL Tooltips on click for HTML objects (images, form elements, etc.)

			// Click tooltip for HTML objects (images, form elements, etc.), position top
			jQuery(".js-mul-tooltip-click-top-object").tooltipster({
				trigger: mulTooltipClickTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				position: 'top',
				arrowColor: mulTooltipArrowColor
			});

			// Click tooltip for HTML objects (images, form elements, etc.), position bottom
			jQuery(".js-mul-tooltip-click-bottom-object").tooltipster({
				trigger: mulTooltipClickTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				position: 'bottom',
				arrowColor: mulTooltipArrowColor
			});

			// Click tooltip for HTML objects (images, form elements, etc.), position left
			jQuery(".js-mul-tooltip-click-left-object").tooltipster({
				trigger: mulTooltipClickTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 2,
				offsetX: 5,
				position: 'left',
				arrowColor: mulTooltipArrowColor
			});

			// Click tooltip for HTML objects (images, form elements, etc.), position right
			jQuery(".js-mul-tooltip-click-right-object").tooltipster({
				trigger: mulTooltipClickTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 2,
				position: 'right',
				arrowColor: mulTooltipArrowColor
			});

			// Click tooltip for HTML objects (images, form elements, etc.), position top left
			jQuery(".js-mul-tooltip-click-top-left-object").tooltipster({
				trigger: mulTooltipClickTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				offsetX: -7,
				position: 'top-left',
				arrowColor: mulTooltipArrowColor
			});

			// Click tooltip for HTML objects (images, form elements, etc.), position bottom left
			jQuery(".js-mul-tooltip-click-bottom-left-object").tooltipster({
				trigger: mulTooltipClickTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				offsetX: -5,
				position: 'bottom-left',
				arrowColor: mulTooltipArrowColor
			});

			// Click tooltip for HTML objects (images, form elements, etc.), position top right
			jQuery(".js-mul-tooltip-click-top-right-object").tooltipster({
				trigger: mulTooltipClickTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				offsetX: 5,
				position: 'top-right',
				arrowColor: mulTooltipArrowColor
			});

			// Click tooltip for HTML objects (images, form elements, etc.), position bottom right
			jQuery(".js-mul-tooltip-click-bottom-right-object").tooltipster({
				trigger: mulTooltipClickTrigger,
				theme: mulTooltipThemeClass,
				delay: mulTooltipAnimationDelay,
				speed: mulTooltipAnimationSpeed,
				maxWidth: mulTooltipMaxWidth,
				offsetY: 0,
				offsetX: 7,
				position: 'bottom-right',
				arrowColor: mulTooltipArrowColor
			});

	}

	// Tooltips Init
	mulTooltip();
