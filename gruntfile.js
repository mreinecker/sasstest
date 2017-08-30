// Wrapper function
module.exports = function (grunt) {
    //Everything goes in here
    // Project configuration. 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });




    require('load-grunt-tasks')(grunt);


    grunt.initConfig({
        //    Grunt Sass
        //    Compile Sass to CSS
        //    https://www.npmjs.com/package/grunt-sass
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'stylesheet.css': 'scss/stylesheet.scss'
                }
            },
        },
        // Grunt Contrib Watch
        // Updates files for me
        // https://www.npmjs.com/package/grunt-contrib-watch

        watch: {
            scripts: {
                files: ['assets/js/*.js'],
                tasks: ['uglify']
            },
        
              sass: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            }
        },
        // Grunt Contrib Uglify
        // Minify JS Files
        // https://www.npmjs.com/package/grunt-contrib-uglify
        uglify: {
            my_target:{
                files: {
                    'scripts.js' : ['node_modules/jquery/dist/jquery.js', 'assets/js/workingscripts.js']
                }
            }
        }


    });
    // Custom task(s).
    grunt.registerTask('default', ['watch']);

};
