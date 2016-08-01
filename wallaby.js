const wallabyWebpack = require("wallaby-webpack");

module.exports = function (wallaby) {

    const webpackPostprocessor = wallabyWebpack({
        externals: {
            // Use external version of React instead of rebuilding it
            "react": "React" //eslint-disable-line
        },
        resolve: {
            extensions: ["", ".js", ".jsx"]
        }
    });

    return {
        files: [
            { pattern: "node_modules/babel-polyfill/dist/polyfill.min.js", instrument: false },
            { pattern: "node_modules/phantomjs-polyfill/bind-polyfill.js", instrument: false },
            { pattern: "node_modules/react/dist/react-with-addons.js", instrument: false },

            { pattern: "client/**/*.js*", load: false },
            { pattern: "!client/**/*.spec.js*", load: false }
        ],

        tests: [
            { pattern: "client/**/*.spec.js*", load: false }
        ],

        compilers: {
            "**/*.js*": wallaby.compilers.babel()
        },

        postprocessor: webpackPostprocessor,

        bootstrap: function () {
            window.__moduleBundler.loadTests(); //eslint-disable-line
        }
    };
};