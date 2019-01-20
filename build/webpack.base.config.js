const path = require('path');

const resolve = dir => {
	return path.resolve(__dirname, '..', dir);
};

module.exports = {
	resolve: {
		modules: ['node_modules', './src'],
		extensions: ['.js', '.jsx', '.less'],
		alias: {
			'@': resolve('src')
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(css|less)$/,
				exclude: /\.module\.(less)$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'less-loader',
						options: {
							sourceMap: true,
							outputStyle: 'compact'
						}
					}
				]
			},
			{
				test: /\.module\.less$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: '[name]__[hash:base64:5]'
						}
					},
					'less-loader'
				]
			},
			{
				test: /\.(woff2?|eot|ttf|svg)$/,
				loader: 'file-loader'
			}
		]
	}
};
