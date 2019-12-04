const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin"); // for Apache

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        publicPath: './',
    },
    plugins: [
        new CleanWebpackPlugin(),
        
        new HtmlWebPackPlugin({ // for Apache
            hash: false,
            template: `${baseWebpackConfig.externals.paths.src}/index.html`,
            filename: "./index.php"
        }),
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig);
});
