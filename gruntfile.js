module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
        concat: {
              options: {
                separator: ';'
              },
              dist: {
                src: ['src/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
              }
        },
          uglify: {
              options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
              },
              dist: {
                files: {
                  'dist/script.min.js' : 'src/script.js'
                }
              }
            },
          minified: {
              files: {
                src: 'src/*.js',
                dest: 'dist/script.min.js'
              },
                options : {
                    sourcemap: false
                }
            },
            babel: {
                options: {
                    sourceMap: true,
                    presets: ['env']
                },
                dist: {
                    files: {
                        'dist/app.js': 'src/app.js'
                    }
                }
            }
    });
        
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-minified');
    grunt.loadNpmTasks('grunt-babel');
    
    grunt.registerTask('default', ['minified', 'uglify', 'babel']);
    
    
};