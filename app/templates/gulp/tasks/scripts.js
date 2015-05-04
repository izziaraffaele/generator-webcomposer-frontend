var gulp = require('gulp'),
    glob = require('glob'),
    path = require('path'),
    Q = require('q'),
    $ = require('gulp-load-plugins')(),
    appPath = require('./../paths.js');

var webPackConfig = require(appPath.root + '/webpack.config.js');

module.exports = function(cb) {

    glob(appPath.rootIn + '/' + appPath.scriptDir + '/bundles/*(*.js|*.jsx)', {}, function(err, files) {
        files.forEach(function(file) {
            var name = path.parse(file).name;
            webPackConfig.entry[name] = file;
        });

        var stream = gulp.src(appPath.rootIn + '/' + appPath.scriptDir + '/bundles/*(*.js|*.jsx)')
            .pipe($.webpack(webPackConfig, null, function(err, stats) {
                if (err) {
                    throw new $.util.PluginError('webpack', err)
                }
                $.util.log("[webpack]", stats.toString({
                    colors:true,
                    version: false,
                    assets:true,
                    chunks:true,
                    chunkModules:false
                }));
            }))
            .pipe(gulp.dest(appPath.rootOut + '/' + appPath.scriptDir + '/'));
            cb();
    });
};