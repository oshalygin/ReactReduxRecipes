module.exports = function (wallaby) {

    return {
        files: [
            "client/**/*.js*",
            "server/**/*.js",
            "!client/**/*.json",
            "!client/**/*.spec.js*",
            "!server/**/*.spec.js*",
            { pattern: "/**/*.png", load: "null" }
        ],

        tests: [
            "client/**/*.spec.js",
            "server/**/*.spec.js"

        ],
        env: {
            type: "node",
            params: {
                env: "NODE_ENV=test"
            }
        },
        compilers: {
            "**/*.js*": wallaby.compilers.babel({
                presets: ["react", "es2015"],
                plugins: ["transform-object-rest-spread"]
            })
        },

        setup: function () {

            const noop = () => { };

            require.extensions[".css"] = noop;
            require.extensions[".ico"] = noop;
            require.extensions[".png"] = noop;
            require.extensions[".svg"] = noop;

            let jsdom = require("jsdom").jsdom;
            let exposedProperties = ["window", "navigator", "document"];

            global.document = jsdom("");
            global.window = document.defaultView;
            Object.keys(document.defaultView).forEach((property) => {
                if (typeof global[property] === "undefined") {
                    exposedProperties.push(property);
                    global[property] = document.defaultView[property];
                }
            });


            global.localStorage = {
                getItem: function () { },
                setItem: function () { }
            };

            global.navigator = {
                userAgent: "node.js"
            };

            documentRef = document; //eslint-disable-line no-undef
        }
    };
};