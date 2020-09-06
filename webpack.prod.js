const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const common = require('./webpack.common.js')

const MiniCssExtractPluginConf = {
    loader: MiniCssExtractPlugin.loader,
    options: { esModule: true },
}

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new OptimizeCssAssetsPlugin({
            // eslint-disable-next-line global-require
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true,
        }),
        new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[name].[chunkhash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPluginConf,
                    'css-loader',
                ],
            }, {
                test: /\.less$/,
                use: [
                    MiniCssExtractPluginConf,
                    'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]',
                    'less-loader',
                ],
                include: [path.join(__dirname, 'src')],
            },
        ],
    },
})
