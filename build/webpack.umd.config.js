const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config');
const pkg = require('../package.json');

const version = pkg.version;

const config = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		library: 'rclib',
		libraryTarget: 'umd',
		path: path.join(process.cwd(), 'lib'),
		filename: 'rclib.min.js'
	},
	externals: {
		react: {
			root: 'React',
			commonjs2: 'react',
			commonjs: 'react',
			amd: 'react'
		},
		'react-dom': {
			root: 'ReactDOM',
			commonjs2: 'react-dom',
			commonjs: 'react-dom',
			amd: 'react-dom'
		},
		'prop-types': {
			commonjs: 'prop-types',
			commonjs2: 'prop-types',
			amd: 'prop-types'
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new UglifyJsPlugin(),
		new webpack.BannerPlugin(`
  react-lib-bundler v${version}
  Github: https://github.com/luyzh/react-lib-bundler
  Copyright (c) 2018-present, Author.

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
    `)
	]
};

module.exports = merge(webpackBaseConfig, config);
