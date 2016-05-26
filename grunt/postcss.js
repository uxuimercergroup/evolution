module.exports = {

// https://www.npmjs.com/package/grunt-postcss

	options: {
		map: false, // inline sourcemaps

		processors: [
			require('autoprefixer')({
				browsers: ['last 2 versions', 'IE 9'], // Matches compatibilty specs
				add: true,
				remove: true,
				casade: true
			}),
		]
	},
	dist: {
		files: [{
			expand: true,
			cwd: 'dist/',
			src: ['**/*.css'],
			dest: 'dist/'
		}]
	}

};