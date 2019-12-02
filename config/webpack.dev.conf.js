const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    // Tell Webpack to do some optimizations for our environment (development
    // or production). Webpack will enable certain plugins and set
    // `process.env.NODE_ENV` according to the environment we specify.
    // https://webpack.js.org/configuration/mode
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    // Configuration options for Webpack DevServer, an Express web server that
    // aids with development. It provides live reloading out of the box and can
    // be configured to do a lot more.
    devServer: {
        // The dev server will serve content from this directory
        contentBase: baseWebpackConfig.externals.paths.dist,
        // Specify a host. (Defaults to 'localhost'.)
        host: 'localhost',
        // Specify a port number on which to listen for requests.
        port: 3000,
        // When using the HTML5 History API (you'll probably do this with React
        // later), index.html should be served in place of 404 responses.
        historyApiFallback: true,
        // Show a full-screen overlay in the browser when there are compiler
        // errors or warnings.
        overlay: {
            errors: true,
            warnings: true,
        },
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
});
