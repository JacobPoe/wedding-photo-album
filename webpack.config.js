const Dotenv = require('dotenv-webpack');

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ASSET_PATH_COMPRESSED = process.env.ASSET_PATH_COMPRESSED || path.join(__dirname, 'assets');
const ASSET_PATH_FULLSIZE = process.env.ASSET_PATH_FULLSIZE || path.join(__dirname, 'assets');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Path to your index.html
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new Dotenv()
  ],
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist')
      },
      {
        directory: path.join(__dirname, 'public'),
        publicPath: '/',
        watch: true
      },
      {
        directory: ASSET_PATH_COMPRESSED,
        publicPath: '/assets/compressed'
      },
      {
        directory: ASSET_PATH_FULLSIZE,
        publicPath: '/assets/fullsize',
      }
    ],
    compress: true,
    port: 8080,
  },
  mode: 'development'
};
