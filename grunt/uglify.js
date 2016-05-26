module.exports = {

  // Minify script files
  options: {
    mangle: false
  },
  core: {
    files: {
      'dist/assets/js/evolution.js': [
        'dist/assets/js/evolution.js'
      ]
    }
  },
  animation: {
    files: {
      'dist/assets/js/evolution-animations.js': [
        'dist/assets/js/evolution-animations.js'
      ]
    }
  },
  site: {
    files: {
      'dist/assets/js/app.js': [
        'dist/assets/js/app.js'
      ]
    }
  }

};