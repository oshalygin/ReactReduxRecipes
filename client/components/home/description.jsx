/* eslint-disable max-len */
import React from "react";

const Description = () => {
    return (
        <div>
            <h4>Follow these steps to launch the application: </h4>
            <ol>
                <li>Clone this repository</li>
                <li>Run <kbd>npm install</kbd> to pull in the project dependencies</li>
                <li>Run <kbd>npm start</kbd> to kick off the application.  It should automatically load a browser window and point to <code>http://localhost:9999</code>.  If the browser window does not load, then manually navigate your browser to <code>http://localhost:9999</code>.</li>
                <li>If you are on a Windows environment, run <kbd>npm run windows-start -s</kbd>. <code>babel-watch</code> doesn't work on Windows as it uses unix named pipes.</li>
                <li>Various other differences between OSX and windows such as setting the node environment variable and path lookup.</li>
                <li>Run <kbd>npm test</kbd> to explicitly run the tests in the solution.Note that they are ran upon application start regardless, but this is a quicker feedback loop.
                    <ul>
                        <li>In windows run, <kbd>npm run windows-test.</kbd></li>
                    </ul>
                </li>
                <li>The build steps are also available and are in development mode. It is recommended that you run <kbd>npm start</kbd> to experience HMR and other development level features.  For production deployment builds, the command is <kbd>npm build</kbd>.</li>
            </ol>
            <h4>Primary Technology Used:</h4>
            <ul>
                <li>ExpressJs</li>
                <li>ReactJs</li>
                <li>Redux</li>
                <li>ES2015(ES6) JavaScript</li>
                <li>WebPack</li>
                <li>ESLint</li>
                <li>PhantomJS</li>
                <li>Axios</li>
                <li>Babel</li>
                <li>TypeScript definitions</li>
                <li>Mocha</li>
                <li>Expect</li>
                <li>Redux Mock Store</li>
                <li>Nock</li>
                <li>JSDOM</li>
                <li>Toastr</li>
                <li>Enzyme</li>
                <li>Istanbul</li>
            </ul>
        </div>
    );
};

export default Description;