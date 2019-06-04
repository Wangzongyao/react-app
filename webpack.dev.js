const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
		hot: true
    }
});