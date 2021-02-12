const path = require('path') 

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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },{
        test:/\.(jpe?g|gif|png|svg|ico)$/i,
        loader:'url-loader',
        options: {
          limit: 2048,
          name: './images/[name].[ext]',
        }
      }
    ]
  },
  devServer: {
    // 起動時に参照するパス
    contentBase: outputPath
    
  }

}