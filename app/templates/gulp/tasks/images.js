var gulp = require('gulp');
var appPath = require('./../paths.js');
var $ = require('gulp-load-plugins')();

module.exports = function() {
    return gulp.src(appPath.rootIn + '/' + appPath.imagesDir + '/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(appPath.rootOut + '/' + appPath.imagesDir))
        .pipe($.size());
};