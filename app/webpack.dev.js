const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
    mode: "development",
    watch: true, // ファイルを更新したら自動でビルドを実行するモード
    devtool: "cheap-module-eval-source-map", // ソースマップの生成をする エラー発生箇所のバンドル前のファイルが見れる
});
