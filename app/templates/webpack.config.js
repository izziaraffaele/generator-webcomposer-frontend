var webpack = require('webpack');
var root = __dirname;
var appPath = root + '/app';
var bowerPath = appPath + '/assets/bower_components';

var config = {
    entry: {
        vendor: ['react','jquery']
    },
    output: {
        filename: "[name].js",
        chunkFilename: "[name].chunk.js",
    },
    watch:true,
    debug:false,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
            // (with more entries, this ensures that no other module
            //  goes into the vendor chunk)
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'jsx-loader?insertPragma=React.DOM&harmony' //ES6 syntax
        }]
    },
    resolve: {
        modulesDirectories: ['node_modules', bowerPath],
        extensions: ['', '.js', '.jsx']
    }
};

module.exports = config;