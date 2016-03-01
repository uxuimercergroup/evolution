module.exports = {

  // Watch for file changes and refresh browser with livereload
  options: {
    livereload: true,
    spawn: false
  },
  layouts: {
    files: ['src/views/layouts/**/*.hbs'],
    tasks: ['assemble', 'notify:assemble']
  },
  partials: {
    files: ['src/views/partials/**/*{.hbs,.md}', 'src/patterns/**/*.hbs', 'src/views/page-templates/partials/**/*.hbs'],
    tasks: ['assemble', 'notify:assemble']
  },
  templates: {
    files: ['src/views/templates/**/*.hbs'],
    tasks: ['newer:assemble:dist', 'notify:assemble']
  },
  pattern_library: {
    files: ['src/views/pattern-library/**/*.hbs'],
    tasks: ['newer:assemble:pattern_library', 'notify:assemble']
  },
  page_templates: {
    files: ['src/views/page-templates/**/*.hbs'],
    tasks: ['newer:assemble:page_templates', 'notify:assemble']
  },
  content: {
    files: ['src/content/**/*.md'],
    tasks: ['assemble', 'notify:assemble']
  },
  data: {
    files: ['src/data/**/*.json'],
    tasks: ['assemble', 'notify:assemble']
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
      'src/assets/images/**',
      'src/assets/scripts/core/foundation/vendor/modernizr.js',
      'src/assets/scripts/lib/prism/prism.js'
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