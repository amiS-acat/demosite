const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

const entryList = {
  './src/common/js/index': './src/_dev/ts/index.ts',
  './src/common/css/style': './src/_dev/scss/style.scss',
}

const removeList = [];

for(let i = 1; i <= 2; i++) {
  removeList.push(Object.keys(entryList)[i] + '.js');
}

module.exports = {
  mode: 'production',
  entry: entryList,
  devServer: {
    hot: "only",
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, ''),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')({ grid: true })],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      // {
      //   test: /\.m?js$/i,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env'],
      //     },
      //   },
      // },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new RemovePlugin({
      after: {
        include: removeList,
      },
    }),
  ],
};
