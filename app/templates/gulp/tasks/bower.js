var gulp = require('gulp');
var appPath = require('./../paths.js');

module.exports = function() {
    gulp.src(appPath.rootIn + '/bower_components/**/*(*.js|*.eot|*.svg|*.ttf|*.woff|*.woff2)', {
        base: appPath.rootIn + '/bower_components'
    })
        .pipe(gulp.dest(appPath.rootOut + '/bower_components/'));
};