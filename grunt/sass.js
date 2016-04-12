module.exports = {

  // Sass preprocessing into CSS files
  options: {
    check: false, // Just check the Sass syntax, does not evaluate and write the output.
    compass: false, // Make Compass imports available and load project configuration (config.rb located close to the Gruntfile.js).
    debugInfo: false, // Emit extra information in the generated CSS that can be used by the FireSass Firebug plugin.
    loadPath: ['node_modules/foundation-sites/scss'], // Array for adding Sass import paths.
    lineNumbers: false, // Emit comments in the generated CSS indicating the corresponding source line.
    noCache: false, // Don't cache to sassc files.
    precision: 5, // How many digits of precision to use when outputting decimal numbers.
    quiet: false, // Silence warnings and status messages during compilation.
    sourcemap: 'none', // Write our sourcemap files for use in browser inspection of sass, increases preprocessing time when enabled
    style: 'expanded', // Output style. Can be nested, compact, compressed, expanded.
    trace: true, // Show a full traceback on error.
    unixNewlines: false, // Force Unix newlines in written files.
    update: true // Only compile changed files.
  },
  dist: {
    files: [
      {
      expand: true,
      cwd: 'src/assets/scss/',
      src: ['**/*.scss'],
      dest: 'dist/assets/css',
      ext: '.css'
      }
    ]
  },
  prod: {
    options: {
      style: 'compressed'
    },
    files: [
      {
      expand: true,
      cwd: 'src/assets/scss/',
      src: ['**/*.scss'],
      dest: 'dist/assets/css',
      ext: '.css'
      }
    ]
  },
  patterns: {
    files: [
      {
      expand: true,
      cwd: 'src/patterns',
      src: ['**/*.scss'],
      dest: 'dist/patterns',
      ext: '.css'
      }
    ]
  }

};