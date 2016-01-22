module.exports = {

  // Copy files and directories during build, used for files and directories that are not processed but need to be copied to generated files directory
  dist: {
    files: [
      {
      expand: true,
      cwd: 'src/assets/',
      src: [
        'docs/**',
        'fonts/**',
        'images/core/favicon.ico',
        'scripts/core/foundation/vendor/modernizr.js'
      ],
      dest: 'dist/assets'
      }
    ]
  },
  patterns: {
    files: [
      {
      expand: true,
      cwd: 'src/patterns/',
      src: [
        '**/*.js',
        '**/*.json'
      ],
      dest: 'dist/patterns'
      }
    ]
  }

};