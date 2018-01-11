module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
        concat: {
              options: {
                separator: ';'
              },
              dist: {
                src: ['src/*.js'],
                dest: 'dist/js/<%= pkg.name %>.js'
              }
        },
          uglify: {
              options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
              },
              dist: {
                files: {
                  'dist/js/script.js' : 'src/js/script.js'
                }
              }
            },
          minified: {
              files: {
                src: 'src/js/*.js',
                dest: 'dist/js/'
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
                        'dist/js/app.js': 'src/js/app.js'
                    }
                }
            },
            cssmin: {
              target: {
                files: [{
                  expand: true,
                  cwd: 'src/css',
                  src: ['*.css', '!*.min.css'],
                  dest: 'dist/css',
                  ext: '.css'
                }]
              }
            },
            copy: {
                main: {
                    expand: true,
                    cwd: 'src/',
                    src: ['**'],
                    dest: 'dist/'
                },
            },
    });
        
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-minified');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    grunt.registerTask('default', ['copy', 'minified', 'uglify', 'babel', 'cssmin']);
    
    
};