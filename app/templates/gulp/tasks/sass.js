var gulp = require('gulp');
var appPath = require('./../paths.js');
var $ = require('gulp-load-plugins')();

module.exports = function() {
    return gulp.src(appPath.rootIn + '/' + appPath.sassDir + '/**/*(*.scss|*.css)')
        .pipe($.rubySass({
            style: 'expanded',
            precision: 10,
            loadPath: [appPath.rootIn + '/bower_components']
        }))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest(appPath.rootOut + '/' + appPath.sassDir))
        .pipe($.size());
};