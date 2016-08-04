/* eslint-disable import/default */
import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { loadRecipes } from "./actions/recipeActions";
import { saveState } from "./reducers/localStorage";

import "../node_modules/material-design-lite/material.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/material-design-lite/material.min.js";
import "./styles/material.icons.css";
import "./styles/material.style.css";

import "./images/favicon.ico";
import "./images/apple-touch-icon.png";
import "./images/favicon-16x16.png";
import "./images/favicon-32x32.png";
import "./images/mstile-150x150.png";
import "./images/safari-pinned-tab.svg";

import Application from "./components/application.jsx";
import HomePage from "./components/home/homePage.jsx";
import RecipesPage from "./components/recipe/recipesPage.jsx";


const store = configureStore();

if (!store.getState().recipes.length) {
    store.dispatch(loadRecipes());
}

store.subscribe(() => {
    saveState(store.getState());
});

render(
    <Provider store={store}>
        <Router history={browserHistory}>

            <Route path="/" component={Application}>
                <IndexRoute component={HomePage} />
                <Route path="home" component={HomePage} />
                <Route path="recipes" component={RecipesPage} />
            </Route>

        </Router>
    </Provider>,
    document.getElementById("application")
);
