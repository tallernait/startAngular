// npm i html-webpack-plugin                ////// Incluir html en el empaquetado de webpack
// npm install webpack-dev-server           ////// para tener un servidor con web pack y hacer modificationes live
//                                                  npx webpack-dev-server 
// npm i style-loader css-loader            ////// Para cargar css en el package   
'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname + '/builder',
        filename:'bundle.js'
    },

    devServer: {
        port : 5000
    },

    module : {
        rules :[
            {
                test: /\.scss$/i,
                use: [  MiniCssExtractPlugin.loader,    // Creates `style` nodes from JS strings
                        'css-loader',                   // Translates CSS into CommonJS
                        'sass-loader'                   // Compiles Sass to CSS
                    ],
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
}