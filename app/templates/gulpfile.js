'use strict';

var gulp = require('./gulp')([
        'bower',
        'clean',
        'extra',
        'images',
        'scripts',
        'sass',
        'postBuild',
        'serve'
    ]);


gulp.task('styles', ['sass']);
gulp.task('build', ['clean', 'bower', 'styles', 'scripts','images','extra']);

gulp.task('dist', ['build','minify','postBuild']);

gulp.task('watch', ['build','serve']);

gulp.task('default', ['dist']);