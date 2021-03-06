const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  mode: 'production',
  target: 'browserslist',
  devtool: 'source-map',

  module: {
    rules: [
      // sass/sccs
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, // generate separate CSS files rather than injecting CSS into our HTML as style tags
          'css-loader', // translates CSS into CommonJS
          'postcss-loader',
          'sass-loader', // compiles Sass to CSS
        ],
      },

      // css
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // generate separate CSS files rather than injecting CSS into our HTML as style tags
          'css-loader', // translates CSS into CommonJS
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),

    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),

    new MiniCssExtractPlugin({
      filename: 'styles/index-[hash:8].css',
    }),
  ],

  optimization: {
    minimize: true,
  },
});
