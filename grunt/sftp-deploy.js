module.exports = {

  // Deploy contents of generated files directory to FTP server
  build: {
    auth: {
      host: 'usfkl21as292v',
      authKey: 'key1'
    },
    src: 'dist/',
    // dest: '/www/content/uxui/docs/path/to/project/dir',
    serverSep: '/',
    concurrency: 3,
    progress: true
  }

};