const path = require('path')

const MODULE = {
	rules: [
		{
			test: /\.js$/,
			loader: 'babel-loader',
			options: {
				presets: [
					"@babel/preset-env"
				],
				plugins: ["@babel/plugin-proposal-class-properties"]
			}
		}
	]
}

module.exports = [
	{
		entry: './src/card.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'card.js'
		},
		module: MODULE
	},
	{
		entry: './src/slider.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'slider.js'
		},
		module: MODULE
	},
	{
		entry: './src/lovelace.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'lovelace.js'
		},
		module: MODULE
	}
]