module.exports = {

  // Watch for file changes and refresh browser with livereload
  options: {
    livereload: true,
    spawn: false
  },
  layouts: {
    files: ['src/views/layouts/**/*'],
    tasks: ['assemble', 'notify:assemble']
  },
  partials: {
    files: ['src/views/partials/**/*', 'src/patterns/**/*'],
    tasks: ['assemble', 'notify:assemble']
  },
  templates: {
    files: ['src/views/**/*.hbs'],
    tasks: ['newer:assemble:dist', 'notify:assemble']
  },
  data: {
    files: ['src/data/**/*.json'],
    tasks: ['assemble', 'notify:assemble']
  },
  images: {
    files: ['src/assets/images/**/*'],
    tasks: ['newer:imagemin:dist', 'notify:imagemin']
  },
  sass: {
    files: ['src/assets/css/**/*.scss', 'src/patterns/**/*.scss'],
    tasks: ['sass', 'notify:sass']
  },
  scripts: {
    files: ['src/assets/scripts/**/*.js', 'src/patterns/**/*.js'],
    tasks: ['newer:concat:core', 'newer:concat:site', 'notify:concat']
  },
  assets_copy: {
    files: [
      'src/assets/docs/**',
      'src/assets/fonts/**',
      'src/assets/images/core/favicon.ico',
      'src/assets/scripts/core/foundation/vendor/modernizr.js'
    ],
    tasks: ['newer:copy:dist', 'notify:copy']
  },
  patterns_copy: {
    files: [
      'src/patterns/**/*.js'
    ],
    tasks: ['newer:copy:patterns', 'notify:copy']
  }

};