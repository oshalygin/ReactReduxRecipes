/* eslint-disable no-use-before-define */
import express from 'express'; //eslint-disable-line no-unused-vars
import * as dataAccessApi from '../dataAccess/recipeDataAccess';

export default function recipeController(dataAccess = dataAccessApi) {
  return {
    get
  };

  function get(request, response) {
    const query = request.query;
    dataAccess.getAllRecipes(query, (error, recipes) => {
      if (!!error) {
        response.status(500).json(error);
      }
      response.status(200).json(recipes);
    });
  }
}
