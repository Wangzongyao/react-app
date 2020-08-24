const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const merge = require('webpack-merge')
const prodConfig = require('./webpack.prod.js')

module.exports = merge(
    prodConfig,
    {
        plugins: [
            new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
        ],
    },
)
