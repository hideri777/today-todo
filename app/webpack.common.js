// nodejsに組み込まれているpathモジュールを読み込む
const path = require("path");

module.exports = {
    entry: {
        app: "./webroot/js/src/app.js",
        another: "./webroot/js/src/another.js",
    },
    output: {
        path: path.resolve(__dirname, "webroot/js/public"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].js", // チャンクで分割するファイル名 entrypoint以外からのファイル名
    },
    // splichunckpluginの設定 どのファイルを分割するか
    optimization: {
        splitChunks: {
            chunks: "initial", // 静的にimportしているモジュールが分割対象になる デフォルトだとnode_modules以下
            name: "vendor",
        },
    },
};
