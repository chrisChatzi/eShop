module.exports = function(grunt) {
    grunt.initConfig({
        eslint: {
                options: {
                    configFile: './eslint.json',
                    // rulePaths: ['conf/rules']
                },
                target: ['./src/**/*.js']
            
        },
        sass: {
                options: {
                    sourceMap: true
                },
                dist: {
                    files: {
                        './dist/css/style.css': './src/css/style.scss',
                        '../kentro-jeans/dist/css/style.css': './src/css/style.scss',
                    }
                }
        },
        browserify: {
                dist: {
                    files: {
                        './dist/bundle.js': ['./src/index.js'],
                        '../kentro-jeans/dist/bundle.js': ['./src/index.js'],
                    },
                    options: {
                        transform: [
                            [
                                'babelify', 
                                {
                                    'presets': ["react", "es2015"]
                                }
                            ]
                        ]
                    }
                }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/bundle.min.js': ['./bundle.js'],
                    '../kentro-jeans/dist/bundle.min.js': ['./bundle.js'],
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask("default", ["eslint", 'sass', "browserify", /*"uglify"*/]);
};