
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      concat: {
        dist: {
          src: [
              'src/js/*.js',
              'src/js/project_js/*.js',
              '! src/js/npm.js'
          ],
          dest: 'dist/js/total.js'
        },  
        dist: {
          src: [
              'src/css/bootstrap.css',
              'src/css/project_css/*.css' 
          ],
          dest: 'dist/css/total.css'
        }
      },
      uglify: {
        build: {
          src: 'dist/js/total.js',
          dest: 'dist/js/total.min.js'
        }
      },
      imagemin: {
        dynamic: {
          files: [{
            expand: true,
            cwd: 'src/img/initial/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/img/'
          }]
        }
      },
      cssmin: {
        target: {
          files: [{
            expand: true,
            cwd: 'src/css',
            src: ['total.css'],
            dest: 'dist/css',
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