var path = require('path');

module.exports = {
	context: path.resolve('js'),

	entry: ["./utils", "./app"],
	output: {
		// where to put the compiled files
		path: path.resolve('build/js/'),

		// where the webserver should look for the built files
		publicPath: path.resolve('/assets/js/'),
		filename: "bundle.js"
	},

	devServer: {
		// where to find the root of the webserver
		contentBase: 'public'
	},

	module: {
		preloaders: [
			{
				test: /\.js$/,
				exclude: 'node_modules',
				loader: 'jshint-loader'
			}
		],
		loaders: [
			{
				test: /\.css$/,
				exclude: /node_modules/,

				// will first do css-loader, THEN style-loader on file
				loader: "style-loader!css-loader"
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader!sass-loader"
			},
			{
				// regexp for files to apply this for
				test: /\.es6$/,

				// regexp for files to ignore
				exclude: /node_modules/,

				// what loader to apply
				loader: "babel-loader"
			}
		]
	},

	// what kind of file types we can process
	// without giving webpack a file extention (e.g. require("./login"))
	resolve: {
		extensions: ['', '.js', '.es6']
	}
}