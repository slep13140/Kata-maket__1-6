const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devtool: "source-map",

    plugins: [
        new HtmlWebpackPlugin({
          title: 'Webpack 4 Starter',
          template: './src/index.html',
          inject: true,
          minify: {
            removeComments: true,
            collapseWhitespace: false,
          }
        }),
        
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/img',
                    to: 'img',
                },
                {
                    from: './src/fonts',
                    to: 'fonts',
                }                
            ]
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }    
            },
            
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader', 
                  'postcss-loader', 
                  'sass-loader',
                ],
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]

    }


}

