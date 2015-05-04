var gulp = require('gulp'),
    appPath = require('./../paths.js'),
    browserSync = require("browser-sync").create(),
    reload = browserSync.reload,
    $ = require('gulp-load-plugins')(),
    appPath = require('./../paths.js');

module.exports = function(){
    browserSync.init({
        notify: true,
        logPrefix: 'BS',
        // Run as an https by uncommenting 'https: true'
        // Note: this uses an unsigned certificate which on first access
        //       will present a certificate warning in the browser.
        // https: true,
        proxy: "test-generator.dev/web"
    });

    gulp.watch(appPath.rootIn + '/' + appPath.sassDir + '/**/*(*.scss|*.css)', ['styles',reload]);
    gulp.watch(appPath.rootOut + '/**/*(*.js|*.png|*.jpg)', [reload]);
}