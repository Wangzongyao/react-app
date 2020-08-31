const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const common = require('./webpack.common.js')

const PORT = 8080

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin({
            forceEnable: true,
        }),
    ],
    devServer: {
        port: PORT,
        contentBase: [path.join(__dirname, 'mock')],
        hot: true,
        historyApiFallback: true,
        // https://github.com/chimurai/http-proxy-middleware
        proxy: {
            '/api/*': {
                target: `http://127.0.0.1:${PORT}`,
                pathRewrite(paths, req) {
                    console.info(`本地请求地址：${req.originalUrl}`)
                    return `${paths.replace(/^\/api/, '')}.json`
                },
                changeOrigin: true,
                onProxyReq(proxyReq) {
                    // eslint-disable-next-line no-param-reassign
                    proxyReq.method = 'GET'
                    proxyReq.setHeader('Access-Control-Allow-Origin', true)
                },
            },
        },
    },
})
