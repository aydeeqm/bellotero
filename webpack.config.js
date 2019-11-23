const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCSSExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              {
                plugins: [
                  '@babel/plugin-transform-runtime'
                ]
              }
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        loader: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
