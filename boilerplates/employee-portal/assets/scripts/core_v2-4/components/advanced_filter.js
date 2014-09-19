//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.4 - Advanced Filter JS
// DATE - April 4, 2014
// AUTHOR - Doug Fraize, Matthew Holmes
//--------------------------------------------------------------------------------------------------------

var mulAdvancedFilter = function(id) {
	
	var advancedFilterModalId = jQuery("#"+id);

	// ADVANCED FILTER DIALOG - OPTIONS
	mulDialogModal(id,{
		dialogClass:'mul-dialog mul-dialog-modal mul-advanced-filter-modal' // Additional classes added to advanced filter modal.
	});

	// OPEN ADVANCED FILTER DIALOG
	jQuery('#'+id+'-action-btn').click(function() {
		advancedFilterModalId.dialog('open');
	});

	// EDIT ADVANCED FILTER DIALOG
	jQuery('#'+id+'-edit-btn').click(function() {
		advancedFilterModalId.dialog('open');
	});

	// CLONE ROW FUNCTION
	var mulAdvancedFilterAddRule = function(id) {

		// CLONE ROW
		var itemRow = jQuery('.js-mul-advanced-filter-form-rules-template-row');
		var newRow	= jQuery(itemRow).clone(true, true).removeClass('js-mul-advanced-filter-form-rules-template-row');

		// APPEND CLONED ROW
		jQuery('#'+id+' .js-mul-advanced-filter-form-rules').append(newRow);

		// REMOVE TABLE ENTRY ROW CLICK EVENT
		jQuery('.js-mul-advanced-filter-remove-rule').click(function(){
			jQuery($(this).parent()).remove();
		});

		// Check height of dialog content container
		var dialogContentHeight = advancedFilterModalId.height();
		
		// Set max height of dialog content container
		var dialogMaxContentHeight = 430;

		// If dialog content container height is greater than dialog content container max height then add functionality for scrolling
		if(dialogContentHeight > dialogMaxContentHeight) {

			advancedFilterModalId.addClass('mul-dialog-content-scrolling'); // Add classes required for auto-scroll
				
			var dialogScrollFooterExists = advancedFilterModalId.parent().children('.mul-dialog-scrolling-footer').length; // See if auto-scroll footer already exists

			// If auto-scroll footer does not already exist
			if(dialogScrollFooterExists == 0) {
				var dialogScrollFooter=document.createElement('div'); // create auto-scroll footer gutter div
				jQuery(dialogScrollFooter).attr('class','mul-dialog-scrolling-footer'); // Add class to auto-scroll footer gutter div
				advancedFilterModalId.parent().append(dialogScrollFooter); // Add auto-scroll footer to bottom of modal
			}

			jQuery('#'+id+' .js-mul-advanced-filter-form').addClass('mul-no-margin-bottom');
		}

	};

	// Used when the user wants to add an addition filter to advanced filter modal
	jQuery(".js-mul-advanced-filter-add-rule").click(function(){
		mulAdvancedFilterAddRule(id);
	});

	// TOGGLE DIFFERENT CALENDAR OPTIONS
	// Used to show date range section or a single calendar option
	var advancedFilterDateRangeToggle = function () {
		jQuery('.js-mul-advanced-filter-single-datepicker, .js-advanced-filter-mul-datepicker-range').hide();
		switch ($(this).val()) {
			case '1':
				jQuery('.js-advanced-filter-mul-datepicker-range').show();
			break;
			case '2':
				jQuery('.js-mul-advanced-filter-single-datepicker').show();
			break;
			case '3':
				jQuery('.js-mul-advanced-filter-single-datepicker').show();
			break;
		}
	};
	jQuery('.js-mul-advanced-filter-datepicker-toggle').change(advancedFilterDateRangeToggle);

	// OPEN ATTENTION CONTAINER
	// Once the advanced filter close an attention container will appear letting the user know
	// that they have a filter on
	jQuery('#'+id+'-results-btn').click(function() {
		jQuery('#'+id+'-attention-ctn').fadeIn('400');
	});

	// CONFIRMATION MESSAGE
	// Once they remove a filter we show a confirmation that it has been removed.
	jQuery('#'+id+'-close-btn').click(function() {
		jQuery('#'+id+'-attention-ctn').hide();
		jQuery('#'+id+'-confirmation-ctn').fadeIn('300');
	});
};
