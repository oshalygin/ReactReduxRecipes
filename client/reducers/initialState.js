/* eslint-disable no-console */
import { loadState } from "./localStorage";
const initialState = loadState();

export default {
    recipes: !!initialState && initialState.recipes
        ? initialState.recipes
        : []
};