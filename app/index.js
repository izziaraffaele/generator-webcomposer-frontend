'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var Generator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));
        this.options['projectName'] = this.options['projectName'] || 'MyApp';
    },
    app: function () {
        // main htaccess
        this.template('_bower.json', 'bower.json',{'projectName':this.options['projectName']});
        this.copy('gulpfile.js', 'gulpfile.js');
        this.copy('preprocessor.js', 'preprocessor.js');
        this.copy('webpack.config.js', 'webpack.config.js');
        this.copy('bowerrc', '.bowerrc');

        // webroot & bootstrap
        this.directory('app/assets','app/assets');
        this.directory('gulp','gulp');
    }
});

module.exports = Generator;
