const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        allowedHosts: [
            'https://sweb.ru',
            'sweb.ru',
            'localhost'
        ]
    },
});