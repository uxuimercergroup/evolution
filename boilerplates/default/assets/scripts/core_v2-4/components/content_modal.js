//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.4 - Content Modal JS
// DATE - April 4, 2014
// AUTHOR - Doug Fraize, Matthew Holmes
//--------------------------------------------------------------------------------------------------------

// Define content modal defaults
var mulContentModalDefaults = {
	autoOpen:false, // Control if content modal auto opens
	closeOnEscape:true, // Control if user can close content modal with escape key, default is true
	closeText:'Close', // Content modal close text, set to nothing if using close button
	dialogClass:'mul-dialog mul-content-modal', // Additional classes added to content modal.
	draggable: false, // Control if content modal is draggable, default is false
	height:'auto', // Control height of the content modal, we set to 'auto' and allow the content to set the height
	modal:true, // Control if content modal is a modal type, default is true
	resizable:false, // Control if content modal is resizable, default is false
	position:'center', // Control the position of the content modal
	title:null, // Content modal title text, we set the title to null, since it is not used in content modal
	close: function() { // Events for when dialog closes

		// Remove class from body to allow for overflow hidden, so you can scroll content in document again
		jQuery('html').removeClass('mul-dialog-open');

		// Remove container around dialog for positioning properly
		jQuery(this).parent().unwrap('<div class="mul-dialog-position-ctn"></div>');
	}
};

// Modal dialog function, pass id of modal dialog and any modal dialog options you want to add/override
var mulContentModal = function(id, options) {
	
	// Variable to define id of dialog
	var contentModalId = jQuery('#'+id);

	// Check to make sure there's not already a dialog attached
	// Explanation: When jQueryUI attaches a dialog to an element, 
	// it adds 'dialog' property to the element's data object, so 
	// presence of 'dialog' property indicates that a dialog is already attached.
	if (!contentModalId.is(':data(dialog)')) {
	
		// Make specific dialog resource div into a dialog and add modal dialog default options and then pass in any additional or overriding options
		contentModalId.dialog(jQuery.extend({},mulContentModalDefaults,options));
		contentModalId.dialog({
			open: function() { // Events for when dialog opens

				// Add class to body to allow for overflow hidden, and so you can not scroll content behind modal
				jQuery('html').addClass('mul-dialog-open');

				// Add container around dialog for positioning properly
				jQuery(this).parent().wrap('<div class="mul-dialog-position-ctn"></div>');

				// Content modal tabbed nav
				jQuery('.js-mul-content-modal-tabs').tabs({
					active: 0, // Set the first tab of the content modal to be active
					activate: function(event, ui){ // When tab is activated apply scroll pane to tab panel
						var contentModalTabContentHeight = jQuery(ui.newPanel).height(); // tab panel content height
						var contentModalTabMaxContentHeight = $(window).height(); // viewport window height

						// if tab content height is greater than viewport height, show scrollbars
						if(contentModalTabContentHeight > contentModalTabMaxContentHeight) {
							jQuery('#'+id).addClass('mul-dialog-content-scrolling'); // Add classes required for auto-scroll
						}

						// On tab selection scroll to top of scroll pane
						jQuery('#'+id).scrollTop(0);
					}
				});

				// Check height of content modal content container
				var contentModalContentHeight = jQuery(this).height();
				
				// Set max height of content modal content container, for a content modal the max content height is the height of the browser viewport (window.height)
				var contentModalMaxContentHeight = $(window).height();

				// If content modal content container height is greater than content modal content container max height then add functionality for scrolling
				if(contentModalContentHeight > contentModalMaxContentHeight) {
					jQuery(this).addClass('mul-dialog-content-scrolling'); // Add classes required for auto-scroll
				}
			}
		});

		// Close dialog click event used by dialog buttons or links, closes only specific dialog with id passed in
		jQuery('.js-mul-dialog-close').click(function(){
			jQuery('#'+id).dialog('close');
		});
	}
};
