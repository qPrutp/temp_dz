const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}

module.exports = {
    /*
        * externals: розшарюємо константу для використання в інших config файлах
    */
    externals: {
        paths: PATHS
    },
    // The point or points to enter the application. This is where Webpack will
    // start. We generally have one entry point per HTML page. For single-page
    // applications, this means one entry point. For traditional multi-page apps,
    // we may have multiple entry points.
    // https://webpack.js.org/concepts#entry
    entry: {
        /*
            * точка входу в проект повинна бути дефолтна src/index.js
        */
        app: PATHS.src,
    },
    // Tell Webpack where to emit the bundles it creates and how to name them.
    // https://webpack.js.org/concepts#output
    // https://webpack.js.org/configuration/output#output-filename
    output: {
        filename: `${PATHS.assets}js/[name].[hash].js`,
        path: PATHS.dist,
    },
    // Determine how the different types of modules will be treated.
    // https://webpack.js.org/configuration/module
    // https://webpack.js.org/concepts#loaders
    module: {
        rules: [{
            test: /\.(js|jsx)$/, // Apply this rule to files ending in .(js|jsx)
            exclude: /node_modules/, // Don't apply to files residing in node_modules
            // use: ['babel-loader']
            //--------------------
            use: { // Use the following loader and options
                loader: 'babel-loader',
                // We can pass options to both babel-loader and Babel. This option object
                // will replace babel.config.js
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            debug: true, // Output the targets/plugins used when compiling
                            // Configure how @babel/preset-env handles polyfills from core-js.
                            // https://babeljs.io/docs/en/babel-preset-env
                            useBuiltIns: 'usage',
                            // Specify the core-js version. Must match the version in package.json
                            corejs: 3,
                        }],
                        // The react preset includes several plugins that are required to write
                        // a React app. For example, it transforms JSX:
                        // <div> -> React.createElement('div')
                        '@babel/preset-react',
                    ],

                    plugins: [
                        "@babel/plugin-syntax-dynamic-import",
                        "@babel/plugin-proposal-class-properties",
                        "@babel/plugin-transform-runtime"
                    ]
                },
            }
            //--------------------
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                }, {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: `config/postcss.config.js` } }
                }, {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }
            ]
        }, {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                }, {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: `config/postcss.config.js` } }
                }
            ]
        }],
    },
    plugins: [
        // This plugin will delete all files inside `output.path` (the dist directory),
        // but the directory itself will be kept.
        // https://github.com/johnagan/clean-webpack-plugin
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].[hash].css`,
        }),

        // This plugin will generate an HTML5 file that imports all our Webpack
        // bundles using <script> tags. The file will be placed in `output.path`.
        // https://github.com/jantimon/html-webpack-plugin
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html'
        }),

        new CopyWebpackPlugin([
            { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
            { from: `${PATHS.src}/static`, to: `` },
        ])
    ],
};
