const path = require('path')

module.exports = {
	entry: './src/card.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'card.js'
	},
	module: {
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
}