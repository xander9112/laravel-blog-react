var NpmInstallPlugin = require('npm-install-webpack-plugin');

const fs = require('fs');
const path = require('path');
const webpack = require('webpack-stream').webpack;

module.exports = {
	devtool: 'cheap-module-inline-source-map',
	entry:   [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./resources/assets/js/index'
	],
	output:  {
		// filename: 'bundle.js'
		path:          '/assets/js/',
		filename:      '[name].js',
		chunkFilename: '[id].chunk.js',
		publicPath:    '/assets/js/'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('main', 'main.js', Infinity),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new NpmInstallPlugin()
	],

	module: {
		preLoaders: [ //добавили ESlint в preloaders
			{
				test:    /\.js$/,
				loaders: [ 'eslint' ],
				include: [
					path.resolve(__dirname, '../../resources/assets/js')
				]
			}
		],
		loaders:    [
			{
				loaders: [ 'react-hot', 'babel-loader' ],
				test:    /\.js$/,
				include: path.join(__dirname, '../../resources/assets/js'),
				exclude: /node_modules/,
				plugins: [ 'transform-runtime' ]
			}, {
				test:    /\.css$/,
				loader:  'style!css?modules',
				include: /flexboxgrid/,
			}

		]
	},

	resolve: {
		modulesDirectories: [ 'resources/assets/js', 'node_modules' ]
	}
};
