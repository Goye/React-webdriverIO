'use strict';

const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const srcPath = path.join(__dirname, '../src');
const seedConfig = {
    port: 3000
};

const common = {
    entry: {
        main: './src/main.js'
    },

    output: {
        filename: '[name].js',
        publicPath: '/',
        path: path.resolve(__dirname, '../public')
    },

    module: {
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'eslint',
                include: srcPath
            }
        ],
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                include: srcPath
            },
            {
                test: /\.css$/,
                include: srcPath,
                loader: 'style-loader!css-loader?modules&importLoaders=1&sourceMap'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    resolve: {
        modules: [srcPath, 'node_modules'],
        extensions: ['', '.js', '.jsx', '.json']
    },

    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
        new HtmlPlugin({
            title: 'React and WebdriverIO',
            template: './src/index.html',
            inject: true
        })
    ]
};



module.exports = merge(common, {
    entry: {
        main: [
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://localhost:${seedConfig.port}`,
            'webpack/hot/only-dev-server',
            './src/main.js'
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        port: seedConfig.port,
        inline: true,
        hot: true,
        historyApiFallback: true,
        stats: 'minimal'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: 2,
            name: 'vendor'
        })
    ]
});
