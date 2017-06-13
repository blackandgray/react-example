var path = require('path');
var webpack = require('webpack');

module.exports = {

	entry: ['webpack/hot/dev-server', __dirname + '/app/main.js'],

	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
	},

	resolve: {
		extensions: ['.js', '.jsx']
	},

	// 启动dev source map
	devtool: 'eval-source-map',

	devServer: {
		contentBase: './build',
		historyApiFallback: true,
		// colors: true,
		inline: true,
		// hot: true,
		// process: true,
	},

	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/	//屏蔽不需要loader处理的文件（文件夹）（可选）
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules'
			}
		]
	},

	plugins: [
		// 使用uglifyJs压缩js代码
		// new webpack.optimize.UglifyJsPlugin({minimize: true}),
		new webpack.HotModuleReplacementPlugin()
	]

}