const path = require('path') 
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// resolve...絶対パスを生成するメソッド
const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  module: {
    rules:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.(jpe?g|gif|png|svg|ico)$/i,
        loader:'url-loader',
        options: {
          limit: 2048,
          name: './images/[name].[ext]',
        },
      },
      {
        test:/\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  devServer: {
    // 起動時に参照するパス
    contentBase: outputPath
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    })
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin(
      {
        uglifyOptions: {
          compress: {
            drop_console: true
          }
        }
      }
    ),
    new OptimizeCSSAssetsPlugin({})
  ]
  }
}