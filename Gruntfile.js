module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      all: ['public/js/**/*.js']
    },

  	nodemon: {
      dev: {
        script: 'server.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint','nodemon']);  

};