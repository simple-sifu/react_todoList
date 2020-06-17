const path = require('path');

// ｢wds｣: webpack output is served from /
// ｢wds｣: Content not from webpack is served from
//Users/tommy/projects/javascript/build-tools-module/build
module.exports = {
  entry: './client/App.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    // contentBase: path.resolve(__dirname, 'build'),
    // compress: true,
    publicPath: '/build',
    port: 9090,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        // options: {
        //   presets: ['@babel/preset-env', '@babel/preset-react'],
        // },
      },
    ],
  },
  mode: 'development',
};
