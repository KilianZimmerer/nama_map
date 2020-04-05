var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var publicDir = 'public';

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, publicDir),
  },
  devServer: {
    contentBase: path.join(__dirname, publicDir),
    compress: true,
    port: 9000
  },
  plugins: [new HtmlWebpackPlugin()],
};