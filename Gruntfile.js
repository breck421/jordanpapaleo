'use strict';

var util = require('util');

module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
//        karma: {
//            unit: {
//                configFile: 'conf/karma.conf.js',
//                singleRun: true
//            }
//            // ,
//            // e2e: {
//            // 	configFile: 'conf/karma-e2e.conf.js',
//            // 	singleRun: true,
//            // },
//            // continuous: {
//            // 	configFile: 'conf/karma.coverage.conf.js',
//            // 	singleRun: true,
//            // 	browsers: ['PhantomJS']
//            // }
//        }
        /**
         * The copy task takes files that are not moved by any other means (usemin, htmlmin,
         * minification) and simply copies them into the dist/ directory.
         * Options:
         * 		expand: Use expanded options (usually always true)
         * 		dot: Include files that start with a dot ('.'; i.e. hidden files) that also match
         * 				the glob patterns in src
         * 		cwd: Execute from the app directory
         * 		dest: The destination directory, dist/
         * 		src: A list of files to copy, including glob file patterns
         *
         * Subtasks:
         * 		dist: Files for the distrbution build.
         */
//        copy: {
//            dist: {
//                files: [{
//                    expand: true,
//                    dot: true,
//                    cwd: 'app',
//                    dest: 'dist',
//                    src: [
//                        'images/**',
//                        'css/**/*.css',
//                        'css/**/*.png',
//                        'data/**',
//                        'libs/**',
//                        'favicon.ico',
//                        'mockRules.json',
//                        'version.json'
//                    ]
//                }]
//            }
//        },
//        replace: {
//            stylesheet: {
//                src: [
//                    'dist/index.html'
//                ],
//                overwrite: true,
//                replacements: [
//                    {
//                        from: /rel=\"stylesheet\/less\"/,
//                        to: 'rel="stylesheet"'
//                    },
//                    {
//                        from: /<script src=\"libs\/less\/less.js\"><\/script>/,
//                        to: ''
//                    }
//                ]
//            }
//        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            main: {
                src: [
                    'public/app/views/**/*.js',
                    'server/routes/*.js',
                    'Gruntfile.js',
                    'server.js'
                ]
            }
        },
        htmlhint: {
            build: {
                options: {
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': false,
                    'head-script-disabled': false,
                    'id-unique': true,
                    'img-alt-require': true,
                    'tag-self-close': true,
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'spec-char-escape': true,
                    'style-disabled': true
                },
                src: ["Public/app/views/**/*.html"]
            }
        }
        /**
         * Triggers tasks to run when certain files change.
         *
         * Options:
         * 		files: A list of files to check, includes glob patterns.
         * 		tasks: A list of tasks to check. Can be one, or many.
         *
         * Subtasks:
         * 		js: Checks for changes in JavaScript files, and then runs minification
         * 		copy: checks for changes in non-minified files, and just copies them to their new
         * 				location.
         */
//        watch: {
//            options: {
//                livereload: true
//            },
//            js: {
//                files: [
//                    'app/js/**/*.js',
//                    'app/html/**/*.js',
//                    'app/js/**/*.html'
//                ],
//                tasks: ['buildjs-dev']
//            },
//            jshint: {
//                files: [
//                    'app/js/**/*.js',
//                    'app/html/**/*.js',
//                    'app/js/**/*.html'
//                ],
//                tasks: ['jshint']
//            },
//            less: {
//                files: [
//                    'app/css/**/*.less'
//                ],
//                tasks: ['buildless-dev']
//            }
//        },
//        less: {
//            dev: {
//                options: {
//                    strictImports: false,
//                    compress: true
//                },
//                files: {
//                    "dist/css/bootstrap.css": "app/css/bootstrap.less",
//                    "dist/css/cc-buildingblocks-v1.css": "app/css/cc-buildingblocks-v1.less",
//                    "dist/css/saasplatform.css": "app/css/saasplatform.less",
//                    "dist/css/main.css": "app/css/main.less"
//                }
//            }
//        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-htmlhint');

    grunt.registerTask('html', ['htmlhint']);
    grunt.registerTask('js', ['jshint']);

    grunt.registerTask('validate', ['jshint', 'htmlhint']);
};