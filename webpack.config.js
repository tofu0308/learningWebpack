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
      }
    ]
  },
  devServer: {
    // 起動時に参照するパス
    contentBase: outputPath
    
  }

}