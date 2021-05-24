// nodejsに組み込まれているpathモジュールを読み込む
const path = require("path");

module.exports = {
    entry: {
        app: "./webroot/js/src/app.js",
        another: "./webroot/js/src/another.js",
        practice: "./webroot/js/src/practice.js",
        ckeditor: "./webroot/js/src/ckeditor.js",
    },
    output: {
        path: path.resolve(__dirname, "webroot/js/public"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].js", // チャンクで分割するファイル名 entrypoint以外からのファイル名
    },
    module: {
        rules: [
            {
                // 拡張子 .js の場合
                test: /\.js$/,
                exclude: /node_modules/, // 除外対象 今回はnode_moduleは不要
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
            //画像
            {
                test: /\.(jpg?g|gif|png|svg)$/,
                use: [
                    "file-loader",
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "images",
                            publicPath: "/images",
                            url: false,
                        },
                    },
                ],
            },
        ],
    },
    // splichunckpluginの設定 どのファイルを分割するか
    optimization: {
        splitChunks: {
            chunks: "initial", // 静的にimportしているモジュールが分割対象になる デフォルトだとnode_modules以下
            name: "vendor",
        },
    },
};
