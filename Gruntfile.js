module.exports = function(grunt) {
  'use strict';
  require('jit-grunt')(grunt, {
    "ngtemplates" : "grunt-angular-templates"
  });
  var MODULE = 'esis.angular-course';
  var BUILD_DEST = './public/build/application.js';
  var BUILD_DEST_TPLS = './public/build/application.tpls.js';
  var BUILD_DEST_MIN = './public/build/application.min.js';
  var pkg = grunt.file.readJSON('package.json');

  var _banner = "/**!\n" +
    " * @Project: <%= pkg.name %>\n" +
    " * @Authors: <%= pkg.authors.join(', ') %>\n" +
    " * @Link: <%= pkg.homepage %>\n" +
    " * @License: MIT\n" +
    " * @Date: <%= grunt.template.today('yyyy-mm-dd') %>\n" +
    " * @Version: <%= pkg.version %>\n" +
    " * \n" +
    " * @ngdoc: module\n" +
    " * @namespace: esis\n" +
    " * @name: angular-course\n" +
    " * @module: "+ MODULE +"\n" +
    " * @description: Course on AngularJS.\n" +
    "***/\n\n";



  grunt.config.init({
    pkg: pkg,

    jshint: {
      options: {
        jshintrc: './.jshintrc',
        force: true
      },
      frontend: {
        src: [
          BUILD_DEST
        ]
      }
    },

    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      modules: {
        files: [
          {
            src: BUILD_DEST,
            dest: BUILD_DEST
          }
        ]
      }
    },

    ngtemplates: {
      sample: {
        options: {
          module: MODULE,
          htmlmin: {
            collapseBooleanAttributes:      true,
            collapseWhitespace:             true,
            removeAttributeQuotes:          true,
            removeComments:                 true,
            removeEmptyAttributes:          true,
            removeRedundantAttributes:      true,
            removeScriptTypeAttributes:     true,
            removeStyleLinkTypeAttributes:  true
          },
          url: function(url) {
            url = url.replace('./sample', '');
            return url;
          }
        },
        src:      './src/js/**/*.html',
        dest:     BUILD_DEST_TPLS
      }
    },

    uglify: {
      development: {
        options: {
          mangle: false,
          sourceMap: true,
          compress: {
            sequences: false,
            unused: false
          },
          beautify: {
            indent_level: 3,
            indent_start: 3,
            ascii_only: true,
            beautify: true,
            bracketize: true,
            semicolons: true,
            quote_keys: true,
            width: 80
          },
          banner: "(function(window, angular) {\n   'use strict';\n",
          footer: '\n\n})(window, angular);',
          preserveComments: function(node, comment) {
            var whiteList = /(jshint|@ngInject|@preserve)/g;
            var keepComment = false;

            if( whiteList.test(comment.value) ) {
              keepComment = true;
            }

            return keepComment;
          }
        },
        files: [
          {
            src: [
              './src/js/module.js',
              './src/js/configs/**/*.js'
            ],
            dest: BUILD_DEST
          }
        ]
      },
      production: {
        options: {
          mangle: {
            except: []
          },
          compress: {
            drop_console: true,
            join_vars: true,
            unused: true
          },
          beautify: {
            ascii_only: true,
            beautify: false
          },
          sourceMap: false,
          preserveComments: false,
          report: 'gzip',
          footer: '\n'
        },
        files: [
          {
            src: BUILD_DEST,
            dest: BUILD_DEST_MIN
          }
        ]
      }
    },

    concat: {
      bannerize: {
        options: {
          banner: _banner
        },
        files: [
          {
            src: BUILD_DEST,
            dest: BUILD_DEST
          },
          {
            src: BUILD_DEST_MIN,
            dest: BUILD_DEST_MIN
          }
        ]
      }
    },

    libsass: {
      stylesheets : {
        files: [
          {
            src: './src/scss/application.scss',
            dest: './public/build/application.css'
          },
          {
            src: './src/scss/bootstrap.scss',
            dest: './public/build/bootstrap.css'
          }
        ]
      }
    },

    watch: {
      compile: {
        tasks: ['default'],
        files: [
          './src/js/**/*.js'
        ]
      },
      stylesheets: {
        tasks: ['stylesheets'],
        files: [
          './src/scss/**/*.scss'
        ]
      },
      frontend: {
        options: {
          livereload: true,
          spawn: false
        },
        files: [
          './src/js/**/*.html',
          './public/**/*.*'
        ]
      }
    }

  });


  grunt.registerTask('default',
    [
      'newer:uglify:development',
      'newer:ngAnnotate',
      'newer:jshint:frontend'
    ]
  );

  grunt.registerTask('stylesheets',
    [
      'newer:libsass:stylesheets'

    ]
  );


  grunt.registerTask('release',
    [
      'uglify:development',
      'ngAnnotate:modules',
      'uglify:production',
      'concat:bannerize'
    ]
  );
};
