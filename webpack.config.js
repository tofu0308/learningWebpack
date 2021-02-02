const path = require('path') 

// resolve...絶対パスを生成するメソッド
const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  }

}