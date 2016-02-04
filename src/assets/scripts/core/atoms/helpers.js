//--------------------------------------------------------------------------------------------------------
// Mercer Evolution v{{ evo_meta_version }} - Global Helper JS Functions
// DATE: {{ evo_meta_date }}
// AUTHOR: {{ evo_meta_author }}
// URL: {{ evo_meta_url }}
//--------------------------------------------------------------------------------------------------------

// CSS ANIMATIONS
//--------------------------------------------------------------------------------------------------------

	// animateElement - element that is getting animated
	// animationType - pass the animation type

	var evoAnimateClick = function(animateElement, animationType){
		jQuery('[data-evo-animate=' + animateElement + ']').on('click', function(){
			jQuery('[data-evo-animate-element=' + animateElement + ']').addClass('animated ' + animationType).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				jQuery(this).removeClass('animated ' + animationType);
			});
		});
	}

	var evoAnimateMouseEnter = function(animateElement, animationType){
		jQuery('[data-evo-animate-mouseenter=' + animateElement + ']').on('mouseenter', function(){
			jQuery('[data-evo-animate-element-mouseenter=' + animateElement + ']').addClass('animated ' + animationType).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				jQuery(this).removeClass('animated ' + animationType);
			});
		});
	}

	var evoAnimateMouseOut = function(animateElement, animationType){
		jQuery('[data-evo-animate-mouseout=' + animateElement + ']').on('mouseout', function(){
			jQuery('[data-evo-animate-element-mouseout=' + animateElement + ']').addClass('animated ' + animationType).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				jQuery(this).removeClass('animated ' + animationType);
			});
		});
	}

	// CSS animation Init
	evoAnimateClick();
	evoAnimateMouseEnter();
	evoAnimateMouseOut();

// FORM
//--------------------------------------------------------------------------------------------------------

	// NUMERIC MASK FOR INPUT - Text input only accepts numbers
	var evoInputNumericMask = function(){
		jQuery('[data-evo-input-numeric-mask]').on('keypress', function(ev) {
			var keyCode = window.event ? ev.keyCode : ev.which;
			//codes for 0-9
			if (keyCode < 48 || keyCode > 57) {
			//codes for backspace, delete, enter
			if (keyCode != 0 && keyCode != 8 && keyCode != 13 && !ev.ctrlKey) {
				ev.preventDefault();
				}
			}
		});
	}

	// Input Numeric Mask Init
	evoInputNumericMask();

	// FORM ELEMENT AUTOFOCUS
	var evoAutofocus = function(){
		if (!("autofocus" in document.createElement("input"))) {
			setTimeout(function(){
				jQuery("[data-evo-autofocus]").focus();
			}, 0);
		}
	}

	// Input Autofocus Init
	evoAutofocus();


// INTERACTIVE
//--------------------------------------------------------------------------------------------------------

	// SELECT ALL CHECKBOXES TOGGLE
	var evoCheckboxesSelectAllToggle = function(){

		// This checks/unchecks all the checkboxes
		jQuery('[data-evo-checkboxes-select-all]').click(function () {
			jQuery('[data-evo-checkboxes-select-all-item]').prop('checked', this.checked);
		});

		// This is used to when user selects a checkbox in list it will uncheck the check all checkbox
		jQuery('[data-evo-checkboxes-select-all-item]').change(function () {
			var check = (jQuery('[data-evo-checkboxes-select-all-item]').filter(":checked").length == jQuery('[data-evo-checkboxes-select-all-item]').length);
			jQuery('[data-evo-checkboxes-select-all]').prop("checked", check);
		});
	}

	// Checkboxes Select All Toggle Init
	evoCheckboxesSelectAllToggle();

	// TOGGLE ELEMENT
	var evoToggleElement = function(){
		jQuery('[data-evo-toggle-element]').click(function(){
			var toggleElementObject = jQuery(this).attr('data-evo-toggle-element');
			jQuery('[data-evo-toggle-element-item="' + toggleElementObject + '"]').toggle();
			$(document).foundation('equalizer', 'reflow');
		});
	}

	// Toggle Element Init
	evoToggleElement();
	