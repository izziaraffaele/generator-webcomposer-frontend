/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('generator-webcomposer-frontend', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('webcomposer-frontend:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected gulp files', function (done) {
    var expected = [
        'gulpfile.js',
        'webpack.config.js',
        'gulp/path.js',
        'gulp/tasks/script.js',
        'gulp/tasks/serve.js',
    ];

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });

  it('creates expected files', function (done) {
    var expected = [
        'bower.json',
        'app/assets/styles/_main.scss',
        'app/assets/scripts/utils/reactMounter.js',
    ];

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
