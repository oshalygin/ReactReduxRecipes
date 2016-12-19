import { combineReducers } from 'redux';
import recipes from './recipeReducer';

const rootReducer = combineReducers({
  recipes
});

export default rootReducer;
