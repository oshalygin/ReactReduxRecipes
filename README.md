# <a href='#'>React Redux Recipes</a>


[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7e15c62b3b5e45d09f063ed8f311d2c4)](https://www.codacy.com/app/oshalygin/ReactReduxRecipes?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=oshalygin/ReactReduxRecipes&amp;utm_campaign=badger)
&nbsp;&nbsp; [![Build Status](https://travis-ci.org/oshalygin/ReactReduxRecipes.svg?branch=master)](https://travis-ci.org/oshalygin/ReactReduxRecipes)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7e15c62b3b5e45d09f063ed8f311d2c4)](https://www.codacy.com/app/oshalygin/ReactReduxRecipes?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=oshalygin/ReactReduxRecipes&amp;utm_campaign=Badge_Grade)


####To run this application follow these steps:
1.  Clone this repository.
2.  Run  `npm install`  to pull in the project dependencies.
3.  Run  `npm start`  to kick off the application.
    * It should automatically load a browser window and point to  `http://localhost:9999`.
    * If the browser window does not load, then manually navigate your browser to  `http://localhost:9999`.
3.  If you are on a Windows environment, run `npm run start-windows` to launch the application.
    * babel-watch doesn't work on Windows as it uses unix named pipes.
    * Various other differences between OSX and windows such as setting the node environment variable and path lookup.
4.  Run `npm test` to explicitly run the tests in the solution.
    * In windows run, `npm run windows-test`.
5.  The build steps are also available and are in development mode. It is recommended that you run `npm start` to experience HMR and other development level features.  For production deployment builds, the command is `npm build`.

### OSX/Linux
```sh
npm install
npm start
# This will run all tests with coverage
npm test:cover 
npm build
```

### Windows
```sh
npm install
npm run windows-start
npm run windows-test
npm run windows-build
```

####Primary Technology Used in this application:
* ExpressJs
* ReactJs
* Redux
* ES2015(ES6) JavaScript
* WebPack
* ESLint
* PhantomJS
* Axios
* Babel
* TypeScript definitions
* Mocha
* Expect
* Redux Mock Store
* Nock
* JSDOM
* Toastr
* Enzyme
* Istanbul
