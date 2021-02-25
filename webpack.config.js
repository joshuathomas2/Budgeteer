const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: './src/javascripts/main.js'
    },
    watch: true,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8080
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'javascripts/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
            }, {
                test: /\.css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            }, {
                test: /\.scss$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            }, {
                test: /\.(html|json|txt|dat|gif|jpg|ico|png|svg|eot|ttf|woff|woff2)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: (url, resourcePath, context) => {
                            return resourcePath.includes(`${path.sep}images${path.sep}`) ? `images/${url}` : url
                        }
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'stylesheets/main.css',
        })
    ]
};