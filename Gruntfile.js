module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            test: {
                port: 3000
            }
        },

        jshint: {
            // Define the files to lint
            files: ['Gruntfile.js', 'solutions/**/*.js', 'test/**/*.js'],
            // Configure JSHint
            options: {
                globals: {
                    module:     true,
                    console:    true,
                    $:          true,
                    jQuery:     true
                }
            }
        },

        qunit: {
            files: ['tests/**/*.html']
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: './',
                    mainConfigFile: './src/main.js'
                }
            }
        },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        }
    });

    // Load all grunt plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Run with "grunt test" on the command line
    grunt.registerTask('test', ['jshint', 'qunit']);

    // Run with "grunt" on the command line
    grunt.registerTask('default', ['jshint', 'qunit']);
};