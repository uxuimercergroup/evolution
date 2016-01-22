module.exports = {

  // Optimize images and copy to generated files images directory
  options: {
    optimizationLevel: 3 // For PNGs, select optimization level between 0 and 7, 3 is the default
  },
  dist: {
    files: [{
      expand: true,
      cwd: 'src/assets/images/',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'dist/assets/images'
    }]
  }

};