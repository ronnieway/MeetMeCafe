
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      concat: {
        dist: {
          src: [
              'js/*.js',
              'js/project_js/*.js',
              '! js/npm.js'
          ],
          dest: 'js/total.js'
        },  
        dist: {
          src: [
              'css/*.css',
              '!css/*.min.css',
              'css/project_css/*.css' 
          ],
          dest: 'css/total.css'
        }
      },
      uglify: {
        build: {
          src: 'js/total.js',
          dest: 'js/total.min.js'
        }
      },
      imagemin: {
        dynamic: {
          files: [{
            expand: true,
            cwd: 'img/initial/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'img/'
          }]
        }
      },
      cssmin: {
        target: {
          files: [{
            expand: true,
            cwd: 'css',
            src: ['total.css'],
            dest: 'css',
            ext: '.min.css'
          }]
        }
      }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'cssmin']);

};