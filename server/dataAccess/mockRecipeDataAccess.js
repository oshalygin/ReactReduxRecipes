/* eslint-disable no-console */
import colors from "colors";
import axios from "axios";

export function getAllRecipes(query, callback) {

    let queryCriteria = {};
    if (!!query && query.ingredient) {
        queryCriteria.ingredient = query.ingredient;
    }

    let recipePromise = axios.get("../assets/recipes.json")
        .then(recipes => {
            callback(null, recipes);
        })
        .catch(error => {
            console.log(error.red);
            callback(error);
        });
}

