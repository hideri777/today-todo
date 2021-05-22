const path = require("path");
//const webpack = require('webpack');
const Dotenv = require("dotenv-webpack");

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",
    entry: "./webroot/app.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/webroot/js"),
    },
    module: {
        rules: [
            {
                // 拡張子 .js の場合
                test: /\.js$/,
                use: [
                    {
                        // Babel を利用する
                        loader: "babel-loader",
                        // Babel のオプションを指定する
                        options: {
                            presets: [
                                // プリセットを指定することで、ES2020 を ES5 に変換
                                "@babel/preset-env",
                                // React の JSX を解釈
                                "@babel/react",
                            ],
                        },
                    },
                ],
            },
            //css
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                        },
                    },
                ],
            },
        ],
    },
    // dotenv使う
    //const env = dotenv.config().parsed;
    plugins: [
        new Dotenv(),
        //new webpack.DefinePlugin({
        //    'process.env': JSON.stringify(dotenv.config().parsed)
        //})
    ],
    // ES5(IE11等)向けの指定（webpack 5以上で必要）
    target: ["web", "es5"],
};
