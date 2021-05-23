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
    },
};
