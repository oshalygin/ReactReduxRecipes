/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import colors from "colors";
import axios from "axios";

export function getAllRecipes(query, callback) {
    let queryCriteria = {};
    if (!!query && query.ingredient) {
        queryCriteria.ingredient = query.ingredient;
    }

    let recipePromise = axios.get(
        "https://raw.githubusercontent.com/datascienceinc/frontend-code-test/master/recipes.json")
        .then(recipes => {
            callback(null, recipes.data);
        })
        .catch(error => {
            console.log(error.red);
            callback(error);
        });
}

