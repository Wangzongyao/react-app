const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const common = require('./webpack.common.js')

const PORT = 8080

const TARGET_SERVER = 'http://127.0.0.1:3000' // 本地联调后端服务
// const TARGET_SERVER = 'http://127.0.0.1:8080' // 本地mock数据服务

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new ReactRefreshWebpackPlugin(),
    ],
    devServer: {
        port: PORT,
        contentBase: [path.join(__dirname, 'mock'), path.join(__dirname, 'dist')],
        hot: true,
        historyApiFallback: true,
        // https://github.com/chimurai/http-proxy-middleware
        proxy: {
            '/api/*': {
                target: TARGET_SERVER,
                pathRewrite(paths) {
                    const newPaths = `${paths.replace(/^\/api/, '')}`
                    // eslint-disable-next-line no-console
                    console.info(`本地请求地址：${TARGET_SERVER}${newPaths}`)
                    return `${newPaths}`
                },
                changeOrigin: true,
                onProxyReq(proxyReq) {
                    proxyReq.setHeader('Access-Control-Allow-Origin', true)
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            }, {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]',
                    'less-loader',
                ],
                include: [path.join(__dirname, 'src')],
            },
        ],
    },
})
