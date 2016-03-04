module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      css: {
        files: {
          'build/emoji_picker.css': [
            'lib/css/nanoscroller.css', 
            'lib/css/emoji.css', 
          ]
        }
      }
    },

    uglify: {
      main: {
        files: {
          'build/emoji_picker.min.js': [
            'lib/js/nanoscroller.min.js', 
            'lib/js/tether.min.js',
            'lib/js/config.js',
            'lib/js/util.js',
            'lib/js/jquery.emojiarea.js',
            'lib/js/emoji-picker.js',
          ]
        }
      }
    } 
  });

  grunt.registerTask('default', ['uglify:main', 'concat:css']);
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
};
