const sass = require('node-sass');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          sourcemap: true,
          compress: false,
          yuicompress: false,
          style: 'expanded',
          implementation: sass
        },
        files: {
          'css/main.css': 'scss/main.scss'
        }
      },
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['main.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'cssmin']
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['watch']);
};