//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.6 - Tooltip JS
// DATE - January 13, 2015
// AUTHOR - Doug Fraize, Matthew Holmes, Doug Richar, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// Extends Tooltipster 2.1.4
// Developed by: Caleb Jacob - calebjacob.com

// Documentation and API:
// http://calebjacob.com/tooltipster/
// https://github.com/iamceege/tooltipster


// TOOLTIP
//--------------------------------------------------------------------------------------------------------

	var evoTooltip = function(){

		// EVO Tooltip default options

			var evoTooltipHoverTrigger = 'hover'; // Tooltip will use hover event for triggering
			var evoTooltipClickTrigger = 'click'; // Tooltip will use click event for triggering
			var evoTooltipThemeClass = 'evo-tooltip'; // Custom theme class name for styling purposes
			var evoTooltipAnimationDelay = 100; // Delay how long it takes (in milliseconds) for the tooltip to start animating in
			var evoTooltipAnimationSpeed = 200; // Set the speed of the tooltip animation
			var evoTooltipMaxWidth = 200; // Set a max width for the tooltip. If the tooltip ends up being smaller than the set max width, the tooltip's width will be set automatically.
			var evoTooltipArrowColor = '#999999'; // Custom tooltip arrow color

		// Global enhancements for EVO Tooltip using Tooltipster API
		
			// Show and hide tooltips on focus/blur when user is using a keyboard instead of mouse
			jQuery('.js-evo-tooltip').focus(function() {
			   jQuery(this).tooltipster('show');
			});

			jQuery('.js-evo-tooltip').blur(function() {
			   jQuery(this).tooltipster('hide');
			});
		
		// EVO Tooltips on hover

			// Hover tooltip, position top
			jQuery(".js-evo-tooltip-hover-top").tooltipster({
				trigger: evoTooltipHoverTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: -5,
				position: 'top',
				arrowColor: evoTooltipArrowColor
			});

			// Hover tooltip, position bottom
			jQuery(".js-evo-tooltip-hover-bottom").tooltipster({
				trigger: evoTooltipHoverTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				position: 'bottom',
				arrowColor: evoTooltipArrowColor
			});

			// Hover tooltip, position left
			jQuery(".js-evo-tooltip-hover-left").tooltipster({
				trigger: evoTooltipHoverTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				position: 'left',
				arrowColor: evoTooltipArrowColor
			});

			// Hover tooltip, position right
			jQuery(".js-evo-tooltip-hover-right").tooltipster({
				trigger: evoTooltipHoverTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				position: 'right',
				arrowColor: evoTooltipArrowColor
			});

			// Hover tooltip, position top left
			jQuery(".js-evo-tooltip-hover-top-left").tooltipster({
				trigger: evoTooltipHoverTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: -5,
				position: 'top-left',
				arrowColor: evoTooltipArrowColor
			});

			// Hover tooltip, position bottom left
			jQuery(".js-evo-tooltip-hover-bottom-left").tooltipster({
				trigger: evoTooltipHoverTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				position: 'bottom-left',
				arrowColor: evoTooltipArrowColor
			});

			// Hover tooltip, position top right
			jQuery(".js-evo-tooltip-hover-top-right").tooltipster({
				trigger: evoTooltipHoverTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: -5,
				position: 'top-right',
				arrowColor: evoTooltipArrowColor
			});

			// Hover tooltip, position bottom right
			jQuery(".js-evo-tooltip-hover-bottom-right").tooltipster({
				trigger: evoTooltipHoverTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				position: 'bottom-right',
				arrowColor: evoTooltipArrowColor
			});

		// EVO Tooltips on hover for HTML objects (images, form elements, etc.)

			// Hover tooltip for HTML objects (images, form elements, etc.), position top
			jQuery(".js-evo-tooltip-hover-top-object").tooltipster({
				trigger: evoTooltipHoverTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				position: 'top',
				arrowColor: evoTooltipArrowColor
			});

			// Hover tooltip for HTML objects (images, form elements, etc.), position bottom
			jQuery(".js-evo-tooltip-hover-bottom-object").tooltipster({
				trigger: evoTooltipHoverTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				position: 'bottom',
				arrowColor: evoTooltipArrowColor
			});

			// Hover tooltip for HTML objects (images, form elements, etc.), position left
			jQuery(".js-evo-tooltip-hover-left-object").tooltipster({
				trigger: evoTooltipHoverTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 2,
				offsetX: 5,
				position: 'left',
				arrowColor: evoTooltipArrowColor
			});

			// Hover tooltip for HTML objects (images, form elements, etc.), position right
			jQuery(".js-evo-tooltip-hover-right-object").tooltipster({
				trigger: evoTooltipHoverTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 2,
				position: 'right',
				arrowColor: evoTooltipArrowColor
			});

			// Hover tooltip for HTML objects (images, form elements, etc.), position top left
			jQuery(".js-evo-tooltip-hover-top-left-object").tooltipster({
				trigger: evoTooltipHoverTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				offsetX: -7,
				position: 'top-left',
				arrowColor: evoTooltipArrowColor
			});

			// Hover tooltip for HTML objects (images, form elements, etc.), position bottom left
			jQuery(".js-evo-tooltip-hover-bottom-left-object").tooltipster({
				trigger: evoTooltipHoverTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				offsetX: -5,
				position: 'bottom-left',
				arrowColor: evoTooltipArrowColor
			});

			// Hover tooltip for HTML objects (images, form elements, etc.), position top right
			jQuery(".js-evo-tooltip-hover-top-right-object").tooltipster({
				trigger: evoTooltipHoverTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				offsetX: 5,
				position: 'top-right',
				arrowColor: evoTooltipArrowColor
			});

			// Hover tooltip for HTML objects (images, form elements, etc.), position bottom right
			jQuery(".js-evo-tooltip-hover-bottom-right-object").tooltipster({
				trigger: evoTooltipHoverTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				offsetX: 7,
				position: 'bottom-right',
				arrowColor: evoTooltipArrowColor
			});

		// EVO Tooltips on click

			// Click tooltip, position top
			jQuery(".js-evo-tooltip-click-top").tooltipster({
				trigger: evoTooltipClickTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: -5,
				position: 'top',
				arrowColor: evoTooltipArrowColor
			});

			// Click tooltip, position bottom
			jQuery(".js-evo-tooltip-click-bottom").tooltipster({
				trigger: evoTooltipClickTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				position: 'bottom',
				arrowColor: evoTooltipArrowColor
			});

			// Click tooltip, position left
			jQuery(".js-evo-tooltip-click-left").tooltipster({
				trigger: evoTooltipClickTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				position: 'left',
				arrowColor: evoTooltipArrowColor
			});

			// Click tooltip, position right
			jQuery(".js-evo-tooltip-click-right").tooltipster({
				trigger: evoTooltipClickTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				position: 'right',
				arrowColor: evoTooltipArrowColor
			});

			// Click tooltip, position top left
			jQuery(".js-evo-tooltip-click-top-left").tooltipster({
				trigger: evoTooltipClickTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: -5,
				position: 'top-left',
				arrowColor: evoTooltipArrowColor
			});

			// Click tooltip, position bottom left
			jQuery(".js-evo-tooltip-click-bottom-left").tooltipster({
				trigger: evoTooltipClickTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				position: 'bottom-left',
				arrowColor: evoTooltipArrowColor
			});

			// Click tooltip, position top right
			jQuery(".js-evo-tooltip-click-top-right").tooltipster({
				trigger: evoTooltipClickTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: -5,
				position: 'top-right',
				arrowColor: evoTooltipArrowColor
			});

			// Click tooltip, position bottom right
			jQuery(".js-evo-tooltip-click-bottom-right").tooltipster({
				trigger: evoTooltipClickTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				position: 'bottom-right',
				arrowColor: evoTooltipArrowColor
			});

		// EVO Tooltips on click for HTML objects (images, form elements, etc.)

			// Click tooltip for HTML objects (images, form elements, etc.), position top
			jQuery(".js-evo-tooltip-click-top-object").tooltipster({
				trigger: evoTooltipClickTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				position: 'top',
				arrowColor: evoTooltipArrowColor
			});

			// Click tooltip for HTML objects (images, form elements, etc.), position bottom
			jQuery(".js-evo-tooltip-click-bottom-object").tooltipster({
				trigger: evoTooltipClickTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				position: 'bottom',
				arrowColor: evoTooltipArrowColor
			});

			// Click tooltip for HTML objects (images, form elements, etc.), position left
			jQuery(".js-evo-tooltip-click-left-object").tooltipster({
				trigger: evoTooltipClickTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 2,
				offsetX: 5,
				position: 'left',
				arrowColor: evoTooltipArrowColor
			});

			// Click tooltip for HTML objects (images, form elements, etc.), position right
			jQuery(".js-evo-tooltip-click-right-object").tooltipster({
				trigger: evoTooltipClickTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 2,
				position: 'right',
				arrowColor: evoTooltipArrowColor
			});

			// Click tooltip for HTML objects (images, form elements, etc.), position top left
			jQuery(".js-evo-tooltip-click-top-left-object").tooltipster({
				trigger: evoTooltipClickTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				offsetX: -7,
				position: 'top-left',
				arrowColor: evoTooltipArrowColor
			});

			// Click tooltip for HTML objects (images, form elements, etc.), position bottom left
			jQuery(".js-evo-tooltip-click-bottom-left-object").tooltipster({
				trigger: evoTooltipClickTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				offsetX: -5,
				position: 'bottom-left',
				arrowColor: evoTooltipArrowColor
			});

			// Click tooltip for HTML objects (images, form elements, etc.), position top right
			jQuery(".js-evo-tooltip-click-top-right-object").tooltipster({
				trigger: evoTooltipClickTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				offsetX: 5,
				position: 'top-right',
				arrowColor: evoTooltipArrowColor
			});

			// Click tooltip for HTML objects (images, form elements, etc.), position bottom right
			jQuery(".js-evo-tooltip-click-bottom-right-object").tooltipster({
				trigger: evoTooltipClickTrigger,
				theme: evoTooltipThemeClass,
				delay: evoTooltipAnimationDelay,
				speed: evoTooltipAnimationSpeed,
				maxWidth: evoTooltipMaxWidth,
				offsetY: 0,
				offsetX: 7,
				position: 'bottom-right',
				arrowColor: evoTooltipArrowColor
			});

	}

	// Tooltips Init
	evoTooltip();
