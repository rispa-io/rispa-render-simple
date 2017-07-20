import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WriteFilePlugin from 'write-file-webpack-plugin'
import StatsPlugin from 'stats-webpack-plugin'

const sourcePath = path.resolve(__dirname, '../../src')

export default context => ({
  entry: {
    app: [path.resolve(sourcePath, './scripts/app.js')],
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: require.resolve('pug-loader'),
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   inject: false,
    //   template: path.resolve(sourcePath, './pages/index.pug'),
    // }),
    new WriteFilePlugin({
      test: /stats.json/,
    }),
    new StatsPlugin('stats.json', {
      chunkModules: true,
      modules: true,
      chunks: true,
      assets: true,
      chunkOrigins: true,
      source: false,
      exclude: [/node_modules/],
    }),
  ],
})
