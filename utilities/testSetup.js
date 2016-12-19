require("babel-register")();

// Setting NODE_ENV to test instead of production because setting it to production will suppress error messaging
// and propType validation warnings.
process.env.NODE_ENV = "test"; //eslint-disable-line no-process-env

[".scss", ".png", ".jpg"].forEach((extension) => {
  require.extensions[extension] = () => null;
});

const jsdom = require("jsdom").jsdom;
const exposedProperties = ["window", "navigator", "document"];

global.document = jsdom("");
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === "undefined") {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.localStorage = {
  getItem() {
  },
  setItem() {
  }
};

global.navigator = {
  userAgent: "node.js"
};
