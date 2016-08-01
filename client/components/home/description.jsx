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
                <li>If you are on a Windows environment, run <kbd>npm run start-windows -s</kbd>. <code>babel-watch</code> doesn't work on Windows as it uses unix named pipes.</li>
                <li>Run <kbd>npm test</kbd> to explicitly run the tests in the solution.Note that they are ran upon application start regardless, but this is a quicker feedback loop.</li>
            </ol>
            <h4>This application implements the following requirements:</h4>
            <ul>
                <li>Using the provided JSON data representing a collection of meal recipes, create a micro frontend application that meets the following criteria:
                    <ul>
                        <li>Display a list (or table) of recipes.</li>
                        <li>Allow filtering of recipes by a single ingredient.</li>
                        <li>Add checkboxes to allow selection of multiple recipes.</li>
                        <li>Show an alphabetically ordered list of distinct ingredients for the selected recipes.  This should update as recipes are selected / unselected.</li>
                        <li>Persist the selections locally and regenerate the view on page refresh.</li>
                        <li>In a README note any required setup to be able to run the app, such as modifying hosts file, etc.</li>
                    </ul>
                </li>

            </ul>
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