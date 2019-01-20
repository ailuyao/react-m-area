const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config');

const config = {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	entry: ['./example/index.js'],
	output: {
		path: path.join(__dirname, '../example'),
		filename: 'bundle.js',
		library: 'marea',
		libraryTarget: 'umd'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: `./example/index.html`,
			filename: `index.html`
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: './example',
		historyApiFallback: true,
		disableHostCheck: true,
		port: 3001,
		inline: true,
		hot: true,
		open: true
	}
};

module.exports = merge(webpackBaseConfig, config);
