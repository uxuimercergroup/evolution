//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.7 - Global Helper JS Functions
// DATE - June 3, 2015
// AUTHOR - Doug Fraize, Matthew Holmes
//--------------------------------------------------------------------------------------------------------

// FORM
//--------------------------------------------------------------------------------------------------------

	// NUMERIC MASK FOR INPUT - Text input only accepts numbers
	var evoInputNumericMask = function(){
		jQuery('.js-evo-numeric-mask').on('keypress', function(ev) {
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
	var evoInputAutofocus = function(){
		if (!("autofocus" in document.createElement("input"))) {
			setTimeout(function(){
				jQuery(".js-evo-autofocus").focus();
			}, 0);
		}
	}

	// Input Autofocus Init
	evoInputAutofocus();


// INTERACTIVE
//--------------------------------------------------------------------------------------------------------

	// CHECKBOXES SELECT ALL TOGGLE
	var evoCheckboxesSelectAllToggle = function(){

		// This checks/unchecks all the checkboxes
		jQuery('.js-evo-select-all-checkboxes').click(function () {
			jQuery('.js-evo-select-all-checkbox-item').prop('checked', this.checked);
		});

		// This is used to when user selects a checkbox in list it will uncheck the check all checkbox
		jQuery('.js-evo-select-all-checkbox-item').change(function () {
			var check = (jQuery('.js-evo-select-all-checkbox-item').filter(":checked").length == jQuery('.js-evo-select-all-checkbox-item').length);
			jQuery('.js-evo-select-all-checkboxes').prop("checked", check);
		});
	}

	// Checkboxes Select All Toggle Init
	evoCheckboxesSelectAllToggle();

	// TOGGLE CONTENT
	var evoToggleContent = function(){
		jQuery('.js-evo-toggle-content').click(function(){
			jQuery('.js-toggle-content-hide').hide(); // Hides all layers first
			var id = 'div' + jQuery(this).attr('data-evo-toggle');
			jQuery('#' + id).toggle();
		});
	}

	// Toggle Content Init
	evoToggleContent();

	// TOGGLE CONTENT AND ICON
	var evoToggleContentIcon = function(){
		jQuery('.js-evo-toggle-content-icon').click(function(){
			jQuery('.js-toggle-content-hide').hide(); // Hides all layers first
			jQuery(this).children('i').toggleClass("evo-icon-minus-circle evo-icon-plus-circle")
			var id = 'div' + jQuery(this).attr('data-evo-toggle');
			jQuery('#' + id).toggle();
		});
	}

	// Toggle Content and Icon Init
	evoToggleContentIcon();

	// TIMED FADE OUT EFFECT
	var evoEffectsFadeOut = function(){
		setInterval(function(){
			jQuery(".js-evo-fadeout-element").fadeOut();
		}, 6500);
	}

	// Fade Out Effect Init
	evoEffectsFadeOut();

	// TIMED FADE IN EFFECT
	var evoEffectsFadeIn = function(){
		setInterval(function(){
			jQuery(".js-evo-fadein-element").fadeIn();
		}, 400);
	}

	// Fade In Effect Init
	evoEffectsFadeIn();


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
