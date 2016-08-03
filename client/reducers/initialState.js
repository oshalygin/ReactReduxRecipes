/* eslint-disable no-console */
import { loadState } from "./localStorage";

console.log("Pulling state information from localStorage");
const initialState = loadState();

if (!!initialState) {
    console.log(`Initial state pulled from localStorage: ${initialState}`);
} else {
    console.log("Local Storage was empty, persisting from application");
}
console.log(initialState);
export default {
    recipes: initialState ? initialState.recipes : []
};