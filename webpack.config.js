const path = require('path');

const include = join(__dirname, 'src');

export default {
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'ReactTwitterLogin',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: [
          'babel-loader'
        ],
        exclude: [
          /node_modules/
        ],
      },
    ],
  },
};
