module.exports = {

  // Minify script files
  options: {
    mangle: false
  },
  core: {
    files: {
      'dist/assets/js/evolution.min.js': [
        'dist/assets/js/evolution.js'
      ]
    }
  },
  site: {
    files: {
      'dist/assets/js/app.min.js': [
        'dist/assets/js/app.js'
      ]
    }
  }

};