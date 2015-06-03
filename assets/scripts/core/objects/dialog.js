//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.7 - Dialog JS
// DATE - June 3, 2015
// AUTHOR - Doug Fraize, Matthew Holmes
//--------------------------------------------------------------------------------------------------------

// MODAL
//--------------------------------------------------------------------------------------------------------

	// Define modal dialog defaults
	var evoDialogModalDefaults = {
		autoOpen:false, // Control if dialog auto opens
		closeOnEscape:false, // Control if user can close dialog with escape key, default is false
		closeText:'Close', // Dialog close text, set to nothing if using close button
		dialogClass:'evo-dialog evo-dialog-modal', // Additional classes added to dialog. Classes must be seperated by a space. Add class of "no-close-button" to turn off the dialog's close button. Add additional custom classes for styling.
		draggable: false, // Control if dialog is draggable, default is false
		height:'auto', // Control height of the dialog, we set to 'auto' and allow the content to set the height
		modal:true, // Control if dialog is a modal type, default is true
		resizable:false, // Control if dialog is resizable, default is false
		position:null, // Control the position of the dialog
		title:null, // Dialog title text, we set the title to null and get the dialog title from the title attribute of the dialog source element
		open: function() { // Events for when dialog opens

			// Add class to body to allow for overflow hidden, and so you can not scroll content behind modal
			jQuery('html').addClass('evo-dialog-open').scrollTop(0);

			// Add container around dialog for positioning properly
			jQuery(this).parent().wrap('<div class="evo-dialog-position-ctn"></div>');
			
			// Check height of dialog content container
			var dialogContentHeight = jQuery(this).height();
			
			// Set max height of dialog content container
			var dialogMaxContentHeight = 430;

			// If dialog content container height is greater than dialog content container max height then add functionality for scrolling
			if(dialogContentHeight > dialogMaxContentHeight) {

				jQuery(this).addClass('evo-dialog-content-scrolling'); // Add classes required for auto-scroll
				
				var dialogScrollFooterExists = jQuery(this).parent().children('.evo-dialog-scrolling-footer').length; // See if auto-scroll footer already exists

				// If auto-scroll footer does not already exist
				if(dialogScrollFooterExists == 0) {
					var dialogScrollFooter=document.createElement('div'); // create auto-scroll footer gutter div
					jQuery(dialogScrollFooter).attr('class','evo-dialog-scrolling-footer'); // Add class to auto-scroll footer gutter div
					jQuery(this).parent().append(dialogScrollFooter); // Add auto-scroll footer to bottom of modal
				}
			}
		},
		close: function() { // Events for when dialog closes

			// Remove class from body to allow for overflow hidden, so you can scroll content in document again
			jQuery('html').removeClass('evo-dialog-open');

			// Remove container around dialog for positioning properly
			jQuery(this).parent().unwrap('<div class="evo-dialog-position-ctn"></div>');
		}
	};

	// Modal dialog function, pass id of modal dialog and any modal dialog options you want to add/override
	var evoDialogModal = function(id, options) {
		
		// Variable to define id of dialog
		var dialogModalId = jQuery('#'+id);

		// Check to make sure there's not already a dialog attached
		// Explanation: When jQueryUI attaches a dialog to an element, 
		// it adds 'dialog' property to the element's data object, so 
		// presence of 'dialog' property indicates that a dialog is already attached.
		if (!dialogModalId.is(':data(dialog)')) {
		
			// Make specific dialog resource div into a dialog and add modal dialog default options and then pass in any additional or overriding options
			dialogModalId.dialog(jQuery.extend({},evoDialogModalDefaults,options));

			// Close dialog click event used by dialog buttons or links, closes only specific dialog with id passed in
			jQuery('.js-evo-dialog-close').click(function(){
				jQuery('#'+id).dialog('close');
			});
		}
	};
