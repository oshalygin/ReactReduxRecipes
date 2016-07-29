/* eslint-disable no-console */
import express from "express";
import webpack from "webpack";
import path from "path";
import config from "../webpack.config.dev";
import open from "open";

const port = 9999;
const applicationCompiler = webpack(config);

let application = express();

application.use(require("webpack-dev-middleware")(applicationCompiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

application.use(require("webpack-hot-middleware")(applicationCompiler));

application.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../src/index.html"));
});

application.listen(port, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    open(`http://localhost:${port}`);
});