var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
	context: path.resolve('js'),

	entry: ["./utils", "./app"],
	output: {
		// where to put the compiled files
		path: path.resolve('build/'),

		// where the webserver should look for the built files
		publicPath: path.resolve('/assets/'),
		filename: "bundle.js"
	},

	devServer: {
		// where to find the root of the webserver
		contentBase: 'public'
	},

	plugins: [
		new ExtractTextPlugin("styles.css")
	],

	postcss: function(){
		return [autoprefixer({ browsers: ['last 2 versions', '> 2%'] })]
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
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
			},
			{
				test: /\.(png|jpg)$/,
				exclude: /node_modules/,
				// any image underneath that limit will be inlined, but any images greater will be a separate image
				loader: "url-loader?limit=10000"
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