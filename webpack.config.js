var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var publicDir = 'dist';

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        use: [
          'file-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, publicDir),
  },
  devServer: {
    contentBase: path.join(__dirname, publicDir),
    compress: true,
    port: 9000
  },
  plugins: [new HtmlWebpackPlugin()],
};