/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import colors from 'colors';
import axios from 'axios';

export function getAllRecipes(query, callback) {
  const queryCriteria = {};
  if (!!query && query.ingredient) {
    queryCriteria.ingredient = query.ingredient;
  }

  const recipePromise = axios.get(
    'https://raw.githubusercontent.com/oshalygin/ReactReduxRecipes/master/server/assets/recipes.json')
    .then(recipes => {
      callback(null, recipes.data);
    })
    .catch(error => {
      console.log(error.red);
      callback(error);
    });
}

