module.exports.register = function (Handlebars, options)  {
	var handlebars = require('handlebars');

	// First item is the handlebars tag name to be used in page for ex: 'repeat',
	// the second part is the name of the Handlebars helper, this is required to get the helper registered to work
	// https://github.com/helpers/handlebars-helper-repeat
	handlebars.registerHelper('repeat', require('handlebars-helper-repeat'));
};