var path = require('path');

const SRC_DIR = path.resolve(__dirname, 'frontend', 'src');
const DIST_DIR = path.resolve(__dirname, 'frontend', 'public');

module.exports = {
  entry: path.join(SRC_DIR, 'index.jsx'),
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }
};