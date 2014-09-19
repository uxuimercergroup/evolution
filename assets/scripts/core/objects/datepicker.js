//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.5 - Datepicker JS
// DATE - June 13, 2014
// AUTHOR - Doug Fraize, Matthew Holmes, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// Define datepicker defaults
var mulDatepickerDefaults = {
	autoSize: true, // auto-size the date input field for date format choosen
	buttonText: "Choose Date", // Title text of the button image
	changeMonth: true,
	changeYear: true,
	closeText: "Close", // Set text of close button in button panel
	currentText: "Today", // Set text of choosing today button in button panel
	dateFormat: "m/d/yy", // date format: m/d/yyyy - 1/1/2013, not including preceding zeros for single date values
	minDate: 0, // Dates in the past are disabled and navigation to past calendars is disabled, set to 'null' to allow for dates in the past
	maxDate: null, // Dates in the future are disabled and navigation to the future is disabled, default is null, refer to jQuery UI Datepicker API documentation for disabing dates in the future (http://api.jqueryui.com/datepicker/#option-maxDate)
	numberOfMonths: 1, // Show # of months in datepicker
	showButtonPanel: false, // Show button panel at bottom of datepicker, default is false
	showOn: "both", // when the datepicker should appear, a value of 'both' means when the input field receives focus or calendar icon is clicked
	beforeShow: function(input, inst) {
		
		// If datepicker input has masked option enabled, change date format to mm/dd/yy.
		var datepickerMaskedInput = jQuery(this).hasClass("mul-datepicker-masked-input"); // set variable to check if datepicker input has class for masked input option
		if (datepickerMaskedInput) {
			jQuery(this).datepicker("option", "dateFormat", "mm/dd/yy").mask("99/99/9999",{placeholder:"_"}); // If masked input option class then mask input for specified format of mm/dd/yyyy in datepicker call
		};
		
		// If datepicker calendar has message option enabled, append to calendar. Gets label from "data-mul-datepicker-message-label" attribute on datepicker input in HTML
		var datepickerMessageLabel = jQuery(this).attr("data-mul-datepicker-message-label");
		var appendDatepickerMessage = function () {
			jQuery("<div class='mul-datepicker-message'><label>" + datepickerMessageLabel + "</label></div>").appendTo(".ui-datepicker");
		};
		if (datepickerMessageLabel) {
			setTimeout(appendDatepickerMessage, 10); // If a datepicker message label is available, show the datepicker message after generating datepicker
		};
	},
	onChangeMonthYear: function () {
		
		// If datepicker calendar has message option enabled, append to calendar. Gets label from "data-mul-datepicker-message-label" attribute on datepicker input in HTML
		var datepickerMessageLabel = jQuery(this).attr("data-mul-datepicker-message-label");
		var appendDatepickerMessage = function () {
			jQuery("<div class='mul-datepicker-message'><label>" + datepickerMessageLabel + "</label></div>").appendTo(".ui-datepicker");
		};
		if (datepickerMessageLabel) {
			setTimeout(appendDatepickerMessage, 10); // If a datepicker message label is available, Show the datepicker message after generating datepicker on month/year change
		};
	}
};

// Datepicker function, pass id of datepicker input and any datepicker options you want to override
var mulDatepicker = function(id, options) {
	var datepickerId = jQuery("#"+id);
	datepickerId.datepicker(jQuery.extend({},mulDatepickerDefaults,options));
};

// Define datepicker date range defaults
var mulDatepickerRangeDefaults = {
	autoSize: true, // auto-size the date input field for date format choosen
	buttonText: "Choose Date", // Title text of the button image
	changeMonth: true,
	changeYear: true,
	closeText: "Close", // Set text of close button in button panel
	currentText: "Today", // Set text of choosing today button in button panel
	dateFormat: "m/d/yy", // date format: m/d/yyyy - 1/1/2013, not including preceding zeros for single date values
	minDate: 0, // Dates in the past are disabled and navigation to past calendars is disabled, set to 'null' to allow for dates in the past
	maxDate: null, // Dates in the future are disabled and navigation to the future is disabled, default is null, refer to jQuery UI Datepicker API documentation for disabing dates in the future (http://api.jqueryui.com/datepicker/#option-maxDate)
	numberOfMonths: 1, // Show # of months in datepicker
	showButtonPanel: false, // Show button panel at bottom of datepicker, default is false
	showOn: "both", // when the datepicker should appear, a value of 'both' means when the input field receives focus or calendar icon is clicked
	beforeShow: function(input, inst) {
		
		// If datepicker input has masked option enabled, change date format to mm/dd/yy.
		var datepickerMaskedInput = jQuery(this).hasClass("mul-datepicker-masked-input"); // set variable to check if datepicker input has class for masked input option
		if (datepickerMaskedInput) {
			jQuery(this).datepicker("option", "dateFormat", "mm/dd/yy").mask("99/99/9999",{placeholder:"_"}); // If masked input option class then mask input for specified format of mm/dd/yyyy in datepicker call
		};
		
		// If datepicker calendar has message option enabled, append to calendar. Gets label from "data-mul-datepicker-message-label" attribute on datepicker input in HTML
		var datepickerMessageLabel = jQuery(this).attr("data-mul-datepicker-message-label");
		var appendDatepickerMessage = function () {
			jQuery("<div class='mul-datepicker-message'><label>" + datepickerMessageLabel + "</label></div>").appendTo(".ui-datepicker");
		};
		if (datepickerMessageLabel) {
			setTimeout(appendDatepickerMessage, 10); // If a datepicker message label is available, show the datepicker message after generating datepicker
		};
	},
	onChangeMonthYear: function () {
		
		// If datepicker calendar has message option enabled, append to calendar. Gets label from "data-mul-datepicker-message-label" attribute on datepicker input in HTML
		var datepickerMessageLabel = jQuery(this).attr("data-mul-datepicker-message-label");
		var appendDatepickerMessage = function () {
			jQuery("<div class='mul-datepicker-message'><label>" + datepickerMessageLabel + "</label></div>").appendTo(".ui-datepicker");
		};
		if (datepickerMessageLabel) {
			setTimeout(appendDatepickerMessage, 10); // If a datepicker message label is available, Show the datepicker message after generating datepicker on month/year change
		};
	}
};

// Datepicker date range function, pass id of datepicker input and any datepicker date range options you want to override
var mulDatepickerRange = function(id, options) {
	var datepickerId = jQuery("#"+id);
	datepickerId.datepicker(jQuery.extend({},mulDatepickerRangeDefaults,options));
};
