module.exports.register = function (Handlebars, options)  {
	var handlebars = require('handlebars');

	// First item is the handlebars tag name to be used in page for ex: 'lorem',
	// the second part is the name of the Handlebars helper, this is required to get the helper registered to work
	// https://github.com/helpers/handlebars-helper-lorem
	handlebars.registerHelper('lorem', require('handlebars-helper-lorem'));
};