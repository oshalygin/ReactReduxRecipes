import expect from 'expect';
import recipeReducer from './recipeReducer';
import * as actionTypes from '../actions/actionTypes';

describe('Recipe Reducer', () => {

  it('recipe reducer should set the id property to the type-name of the recipe', () => {


    const initialState = [];
    const recipes = [
      {
        name: 'Risotto', type: 'Italian',
        ingredients: ['Rice', 'Chicken Stock']
      },
      {
        name: 'Enchiladas', type: 'Mexican',
        ingredients: ['Tomato Sauce', 'Tomato']
      }];

    const expected = 'italian-risotto';

    const loadRecipesAction = {
      type: actionTypes.LOAD_RECIPES_SUCCESS,
      recipes
    };

    const newRecipesState = recipeReducer(initialState, loadRecipesAction);
    const actual = newRecipesState[0].id;
    expect(actual).toEqual(expected);

  });

  it('recipe reducer should set the intiial state of checked to false for every recipe', () => {

    const initialState = [];
    const recipes = [
      {
        name: 'Risotto', type: 'Italian',
        ingredients: ['Rice', 'Chicken Stock']
      },
      {
        name: 'Enchiladas', type: 'Mexican',
        ingredients: ['Tomato Sauce', 'Tomato']
      }];

    const loadRecipesAction = {
      type: actionTypes.LOAD_RECIPES_SUCCESS,
      recipes
    };

    const newRecipesState = recipeReducer(initialState, loadRecipesAction);
    newRecipesState.forEach(recipe => {
      const actual = recipe.checked;
      expect(actual).toBeFalsy();
    });
  });

  it('updating a recipe properly returns a different(immuatble) recipe object', () => {

    const initialState = [
      {
        id: 'italian-risotto',
        name: 'Risotto', type: 'Italian',
        ingredients: ['Rice', 'Chicken Stock'],
        checked: false
      },
      {
        id: 'mexican-enchiladas',
        name: 'Enchiladas', type: 'Mexican',
        ingredients: ['Tomato Sauce', 'Tomato'],
        checked: false
      }];

    const updatedRecipe = {
      ...initialState[0], checked: true
    };

    const updateRecipesAction = {
      type: actionTypes.UPDATE_RECIPE_SUCCESS,
      recipe: updatedRecipe
    };

    const newRecipesState = recipeReducer(initialState, updateRecipesAction);
    expect(newRecipesState).toNotEqual(initialState);

  });

  it('updating a recipe properly updates a property on the object', () => {

    const initialState = [
      {
        id: 'italian-risotto',
        name: 'Risotto', type: 'Italian',
        ingredients: ['Rice', 'Chicken Stock'],
        checked: false
      },
      {
        id: 'mexican-enchiladas',
        name: 'Enchiladas', type: 'Mexican',
        ingredients: ['Tomato Sauce', 'Tomato'],
        checked: false
      }];

    const updatedRecipe = {
      ...initialState[0], checked: true
    };

    const updateRecipesAction = {
      type: actionTypes.UPDATE_RECIPE_SUCCESS,
      recipe: updatedRecipe
    };

    const newRecipesState = recipeReducer(initialState, updateRecipesAction);
    const actual = newRecipesState[0].checked;
    expect(actual).toBeTruthy();

  });
});
