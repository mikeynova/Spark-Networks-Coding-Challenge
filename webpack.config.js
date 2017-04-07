const path = require('path');
process.noDeprecation = true

module.exports = {
	entry: './client/index.js',
	output: {
		path: path.resolve(__dirname, './client/dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/, 
				exclude: '/node_modules',
				loader: 'babel-loader',
				query: { presets: ['es2015', 'react'] }
			}
		]
	}
}