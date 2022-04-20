/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const WebpackDevServerUrl = 'http://localhost:3002'

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/client/index.tsx',
  output: {
    path: path.resolve('dist'),
    publicPath: `${WebpackDevServerUrl}/dist/`, // MUST BE FULL PATH!
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
}
