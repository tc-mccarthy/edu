module.exports = function (grunt) {

  const output_prefix = './';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    eslint: {
      options: {
        configFile: './eslint.json',
        fix: true
      },
      target: ['assets/js/*.js', 'assets/js/**/*.js', 'assets/js/*.jsx', 'assets/js/**/*.jsx']
    },

    uglify: {
      files: {
        cwd: `${output_prefix}js`,
        src: ['*.js', '**/*.js', '!*.min.js', '!**/*.min.js', '!**/*.es6.js', '!**/*.babel.js'], // source files mask
        dest: `${output_prefix}js/`, // destination folder
        expand: true, // allow dynamic building
        ext: '.min.js' // replace .js to .min.js
      }
    },

    compass: {
      dist: {
        options: {
          sassDir: 'assets/scss',
          cssDir: `${output_prefix}css`
        }
      }
    },

    concat: {
      dist: {
        files: [{
          src: ['assets/js/*.js'],
          dest: `${output_prefix}js/working/app.es6.js`
				}]
      }
    },

    babel: {
      options: {
        sourceMap: false,
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: ["@babel/plugin-transform-modules-commonjs", "@babel/plugin-proposal-class-properties"]
      },
      react: {
        files: [{
          cwd: "assets/js",
          src: ["*.jsx", "**/*.jsx", "*.js", "**/*.js", "!*.min.js", "!**/*.min.js"],
          dest: `${output_prefix}js/working`,
          expand: true // allow dynamic building
								}]
      },
    },

    browserify: {
      react: {
        files: [{
          cwd: `${output_prefix}js/working`,
          src: ["*.js", "**/*.js", "!*.min.js", "!**/*.min.js"],
          dest: `${output_prefix}js`,
          expand: true // allow dynamic building
				}]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: `${output_prefix}css`,
          src: ['*.css', '!*.min.css'],
          dest: `${output_prefix}css`,
          ext: '.min.css'
				}]
      }
    },

    watch: {
      js: {
        files: ['assets/js/*.js', 'assets/js/**/*.js', 'Gruntfile.js'],
        tasks: ['newer:eslint', 'babel', 'browserify']
      },
      jsx: {
        files: ['assets/js/*.jsx', 'assets/js/**/*.jsx'],
        tasks: ['newer:eslint', 'babel', 'browserify']
      },

      css: {
        files: '**/*.scss',
        tasks: ['compass', 'cssmin']
      }
    },

    removelogging: {
      dist: {
        files: [{
          cwd: `${output_prefix}js`,
          src: ['*.js', '!*.min.js', '**/*.js', '!**/*.min.js', '*.jsx', '**/*.jsx'], // source files mask
          dest: `${output_prefix}js/`, // destination folder
          expand: true // allow dynamic building
  			}]
      },
    },

    env: {
      build: {
        NODE_ENV: 'production'
      }
    }
  });

  // load plugins
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });

  // register at least this one task
  grunt.registerTask('default', ['env:build', 'babel', 'removelogging', 'browserify', 'uglify', 'compass', 'cssmin']);
  grunt.registerTask('dev', ['eslint', 'babel', 'browserify', 'compass', 'cssmin', 'watch']);
  grunt.registerTask('des', ['compass', 'cssmin', 'watch:css']);
};