var path = require('path');
var root = path.dirname(__dirname);

module.exports = {
    root: root,
    rootIn:root+'/app/assets',
    rootOut:root+'/web/assets',
    scriptDir: 'scripts',
    sassDir: 'styles',
    imagesDir: 'images',
    vendorAssets: [
        root+'/app/assets/bower_components/jquery/dist/jquery.js',
        root+'/app/assets/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js'
    ]
};