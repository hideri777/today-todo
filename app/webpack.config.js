// nodejsに組み込まれているpathモジュールを読み込む
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./webroot/js/app.js",
    output: {
        path: path.resolve(__dirname, "webroot/js"),
        filename: "bundle.js",
    },
};
