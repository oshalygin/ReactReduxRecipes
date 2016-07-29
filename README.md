##To run this application follow these steps:
1.  Clone this repository
2.  Run `npm install` to pull in the project dependencies
3.  Run `npm start -s` to kick off the application.  It should automatically load a browser window and point to localhost:9999.  If the browser window does not load then manually navigate to http://localhost:9999.
4.  Run `npm test` to explicitly run the tests in the solution.  Note that they are ran upon application start regardless, but this is a quicker feedback loop.

##Sample application which implements the following requirements:

* Using the provided JSON data representing a collection of meal recipes, create a micro frontend application that meets the following criteria:

* Display a list (or table) of recipes.
* Allow filtering of recipes by a single ingredient.
* Add checkboxes to allow selection of multiple recipes.
* Show an alphabetically ordered list of distinct ingredients for the selected recipes. This should update as recipes are selected / unselected.
* Persist the selections locally and regenerate the view on page refresh.
* In a README note any required setup to be able to run the app, such as modifying hosts file, etc.

####Primary Technology Used in this application:
* ExpressJs
* ReactJs
* Redux
* ES2015(ES6) JavaScript
* WebPack
* ESLint
* PhantomJS
* DefinitelyTyped
* Standard JavaScript, HTML, CSS, C#
* Mocha
* Enzyme