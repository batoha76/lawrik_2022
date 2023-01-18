let path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: '/dist/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '.'),
        }
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.module\.css$/, /* кто заканчивается на .module действует принцип модульного css */
                use: [/* СЕЙЧАС ПРОПИСЫВАЕМ ТОПОРНО, ПОТОМ ИСПРАВИМ */
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules:{
                                localIdentName: '[local]__[sha1:hash:hex:7]'/* путь до компонента */
                            }
                        }
                    }
                ]
            },
            {
                test: /^((?!\.module).)*css$/, /* для тех кто без .module действует обычное правило */
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ]
};

module.exports = (env, options) => {
    let isProd = options.mode === 'production';
    conf.devtool = isProd ? false : 'eval-cheap-module-source-map';
    conf.target = isProd ? 'browserslist' : 'web';
    return conf;
};