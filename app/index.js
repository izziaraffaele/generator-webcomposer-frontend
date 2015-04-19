'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var Generator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));
    },
    app: function () {
        // main htaccess
        var appName = this.options['projectName'] || 'myApp';
        this.template('_bower.json', 'bower.json',{'projectName':appName});
        this.template('_gulpfile.js', 'gulpfile.js',{'projectName':appName});
        this.copy('preprocessor.js', 'preprocessor.js');
        this.copy('bowerrc', '.bowerrc');

        // webroot & bootstrap
        this.directory('app/assets','app/assets');
    }
});

module.exports = Generator;
