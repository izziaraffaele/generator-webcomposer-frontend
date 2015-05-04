var gulp = require('gulp');
var appPath = require('./../paths.js');
var $ = require('gulp-load-plugins')();

module.exports = function() {
    return gulp.src([appPath.rootIn + '/*(*.txt|*.ico)'])
        .pipe(gulp.dest(appPath.rootOut + '/'))
        .pipe($.size());
};