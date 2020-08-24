const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const common = require('./webpack.common.js')

const PORT = 8080

module.exports = merge(common, {
    devtool: 'inline-source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        port: PORT,
        contentBase: [path.join(__dirname, 'mock')],
        hot: true,
        historyApiFallback: true,
    },
})
