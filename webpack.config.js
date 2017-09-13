const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/app.js'
    ],
    output:{
        path: __dirname,
        publicPath: '/',
        filename: "index.js"
    },
    devServer:{
        inline: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 8080,
        disableHostCheck: true,        
        contentBase: "./public"
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.css$/,
                loader: ExtractTextPlugin.extract(['css-loader'])
            },
            {
                test:/\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(
                    [
                        'css-loader',
                        'sass-loader'
                    ])
            },
            
        ]
    },
    plugins:[
        new ExtractTextPlugin("app.css")
    ]
};

