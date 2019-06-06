const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js',
		vendor: [
			'lodash'
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'webpack-demo',
			template: path.resolve(__dirname, 'src/index.html')
		}),
	],
	output: {
		filename: '[name].[hash].js',
		chunkFilename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					name: 'vendor',
					chunks: 'initial',
					minChunks: 2
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}, {
				test: /\.less$/,
				use: [
					'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
					'less-loader'
				],
				include: [path.join(__dirname, 'src')]
			}, {
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}, {
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			}, {
				test: /\.js$/,
				include: [path.join(__dirname, 'src')],
				use: [
					'babel-loader',
				],
			}
		]
	}
};