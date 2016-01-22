module.exports = {

  // Automatic desktop notifications for Grunt errors and warnings. Supports OS X, Windows, Linux.

  //
  // Main Tasks
  //

  // Build and server notification
  browserSync: {
    options: {
      title: 'Build complete. Server running.',  // optional
      message: 'Build successful. Server is ready and running.' //required
    }
  },

  // Production files generation notification
  prod: {
    options: {
      title: 'Production files created.',  // optional
      message: 'Production files generated successfully.' //required
    }
  },

  // Production files deployment notification
  deploy: {
    options: {
      title: 'Production files deployed.',  // optional
      message: 'Production files deployed to FTP server successfully.' //required
    }
  },

  //
  // Watch Tasks
  //

  // Assemble notification
  assemble: {
    options: {
      title: 'Pages assembled.',  // optional
      message: 'Templates, partials, and data assembled successfully.' //required
    }
  },

  // Concatenate notification
  concat: {
    options: {
      title: 'Scripts concatenated.',  // optional
      message: 'Scripts concatenated successfully.' //required
    }
  },

  // Copy notification
  copy: {
    options: {
      title: 'Files copied.',  // optional
      message: 'Files copied successfully.' //required
    }
  },

  // Imagemin notification
  imagemin: {
    options: {
      title: 'Images optimized.',  // optional
      message: 'Images optimized successfully.' //required
    }
  },

  // Sass notification
  sass: {
    options: {
      title: 'Sass files preprocessed.',  // optional
      message: 'Sass files preprocessed successfully.' //required
    }
  }

};