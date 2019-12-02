const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        // якщо потрібно абсолютний шлях до імтортованих файлів js та css в index.html
        // значення publicPath: '/', якщо відносне publicPath: './'
        // параметр перенесено з webpack.base.conf оскільки тут вищий пріоритет при мерджі
        publicPath: './',
    },
    plugins: []
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig);
});
