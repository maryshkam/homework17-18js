module.exports = function(grunt) {

grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
            	seperation: ';'
            },
            dist: {
            	src: ['src/js/**/*.js'],
            	dest: 'dist/js/script.main.js',
            }

        },
        uglify: {
        	build: {
        		src: 'dist/js/script.main.js',
        		dest: 'dist/js/script.main.min.js',
        	}

        },
        cssmin: {
        	target: {
        		files: {
        			'dist/css/main.min.css': ['src/css/**/*.css']
        		}
        	}

        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img'
                }]
            }
        },
        // watch: {
        //     scripts: {
        //         files: ['src/js/**/*.js'],
        //         tasks: ['concat', 'uglify'],
        //         options: {
        //             spawn: false,
        //         },
        //     },
        // //     css: {
        // //         files: ['src/css/**/*.css'],
        // //         tasks: ['cssmin'],
        // //         options: {
        // //             spawn: false,
        // //         }
        // //     }
        // },
        
    });


grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-imagemin');
// grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'imagemin']);

};

