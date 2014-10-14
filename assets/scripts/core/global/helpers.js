//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.5 - Global Helper JS Functions
// DATE - June 13, 2014
// AUTHOR - Doug Fraize, Matthew Holmes, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// FORM
//--------------------------------------------------------------------------------------------------------

	// NUMERIC MASK FOR INPUT - Text input only accepts numbers
	var mulInputNumericMask = function(){
		jQuery('.js-mul-numeric-mask').on('keypress', function(ev) {
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
	mulInputNumericMask();

	// FORM ELEMENT AUTOFOCUS
	var mulInputAutofocus = function(){
		if (!("autofocus" in document.createElement("input"))) {
			jQuery(".js-mul-autofocus").focus();
		}
	}

	// Input Autofocus Init
	mulInputAutofocus();


// INTERACTIVE
//--------------------------------------------------------------------------------------------------------

	// CHECKBOXES SELECT ALL TOGGLE
	var mulCheckboxesSelectAllToggle = function(){

		// This checks/unchecks all the checkboxes
		jQuery('.js-mul-select-all-checkboxes').click(function () {
			jQuery('.js-mul-select-all-checkbox-item').prop('checked', this.checked);
		});

		// This is used to when user selects a checkbox in list it will uncheck the check all checkbox
		jQuery('.js-mul-select-all-checkbox-item').change(function () {
			var check = (jQuery('.js-mul-select-all-checkbox-item').filter(":checked").length == jQuery('.js-mul-select-all-checkbox-item').length);
			jQuery('.js-mul-select-all-checkboxes').prop("checked", check);
		});
	}

	// Checkboxes Select All Toggle Init
	mulCheckboxesSelectAllToggle();

	// TOGGLE CONTENT
	var mulToggleContent = function(){
		jQuery('.js-mul-toggle-content').click(function(){
			jQuery('.js-toggle-content-hide').hide(); // Hides all layers first
			var id = 'div' + jQuery(this).attr('data-mul-toggle');
			jQuery('#' + id).toggle();
		});
	}

	// Toggle Content Init
	mulToggleContent();

	// TOGGLE CONTENT AND ICON
	var mulToggleContentIcon = function(){
		jQuery('.js-mul-toggle-content-icon').click(function(){
			jQuery('.js-toggle-content-hide').hide(); // Hides all layers first
			jQuery(this).children('i').toggleClass("mul-icon-minus-circle mul-icon-plus-circle")
			var id = 'div' + jQuery(this).attr('data-mul-toggle');
			jQuery('#' + id).toggle();
		});
	}

	// Toggle Content and Icon Init
	mulToggleContentIcon();

	// TIMED FADE OUT EFFECT
	var mulEffectsFadeOut = function(){
		setInterval(function(){
			jQuery(".js-mul-fadeout-element").fadeOut();
		}, 6500);
	}

	// Fade Out Effect Init
	mulEffectsFadeOut();

	// TIMED FADE IN EFFECT
	var mulEffectsFadeIn = function(){
		setInterval(function(){
			jQuery(".js-mul-fadein-element").fadeIn();
		}, 400);
	}

	// Fade In Effect Init
	mulEffectsFadeIn();


// LAYOUT
//--------------------------------------------------------------------------------------------------------

	// SET EQUAL HEIGHTS ON COLUMNS
	function setEqualHeights(columns){
		var tallestcolumn = 0;
		$.each(columns, function(index){
			var currentHeight = $(columns[index]).height();

			if(currentHeight > tallestcolumn)
			{
				tallestcolumn = currentHeight;
			}
		});

		$.each(columns, function(index){
			$(columns[index]).height(tallestcolumn);
		});
	};
