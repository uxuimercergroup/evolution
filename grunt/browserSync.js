module.exports = {

  // BrowserSync task, time-saving synchronised browser testing.
  dist: {
    options: {
      port: 9000,
      server: './dist',
      ui: {
        port: 9001
      },
      watchTask: true
    },
    bsFiles: {
      src : [
        'dist/**/*',
      ]
    }
  }

};