/* 

Handlebars Helper: Limit Array

Usage (in each loop): 

{{#each (limit global.item 5)}}
{{/each}}

*/

module.exports.register = function (Handlebars, options)  {
	var handlebars = require('handlebars');

	// limit an array to a maximum of elements (from the start)
	handlebars.registerHelper('limit', function (arr, limit) {
	  return arr.slice(0, limit);
	});

};