var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');
var path = require('path');

var PUBLIC_DIR = path.join(__dirname, 'dist');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  // devtool: 'inline-source-map',
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
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR,
  },
  devServer: {
    contentBase: PUBLIC_DIR,
    compress: true,
    port: 9000
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new CopyPlugin([
      { from: 'static', to: PUBLIC_DIR },
    ]),
  ],
};
