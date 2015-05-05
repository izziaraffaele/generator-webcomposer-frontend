'use strict';

var gulp = require('./gulp')([
        'bower',
        'clean',
        'extra',
        'images',
        'scripts',
        'sass',
        'postBuild',
    ]);

var serveTask = require('./gulp/tasks/serve.js');


gulp.task('styles', ['sass']);
gulp.task('build', ['clean', 'bower', 'styles', 'scripts','images','extra']);

gulp.task('dist', ['build','minify','postBuild']);

gulp.task('watch', ['build'],function(){
    return serveTask(<%= _.slugify(projectName) %>);
});

gulp.task('default', ['dist']);