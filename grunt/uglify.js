module.exports = {

  // Minify script files
  options: {
    mangle: false
  },
  core: {
    files: {
      'dist/assets/scripts/evolution.min.js': [
        'dist/assets/scripts/evolution.js'
      ]
    }
  },
  site: {
    files: {
      'dist/assets/scripts/site.min.js': [
        'dist/assets/scripts/site.js'
      ]
    }
  }

};