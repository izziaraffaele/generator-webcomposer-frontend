var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    appPath = require('./../paths.js');

module.exports = function(){
    $.util.log('Minifying styles');

    //minify-css
    gulp.src(appPath.rootOut + '/' + appPath.sassDir + '/**/*.css')
        .pipe($.minifyCss())
        .pipe(gulp.dest(appPath.rootOut + '/' + appPath.sassDir + '/min'))
        .pipe($.size());

    $.util.log('Uglifying js');

    //uglify-js
    gulp.src(appPath.rootOut + '/' + appPath.scriptDir + '/**/*.js')
        .pipe($.uglify())
        .pipe($.stripDebug())
        .pipe(gulp.dest(appPath.rootOut + '/' + appPath.scriptDir + '/min'))
        .pipe($.size());
}