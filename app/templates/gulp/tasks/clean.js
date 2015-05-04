var gulp = require('gulp');
var appPath = require('./../paths.js');
var $ = require('gulp-load-plugins')();
var del = require('del');

module.exports = function (cb) {
    $.cache.clearAll();
    cb(del.sync([appPath.rootOut+'/'+appPath.sassDir, appPath.rootOut+'/'+appPath.scriptDir, appPath.rootOut+'/'+appPath.imagesDir,appPath.rootOut+'/bower_components']));
};