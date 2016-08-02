import { loadState } from "./localStorage";

var derp = loadState();
console.log(derp);

export default {
    recipes: [],
    pendingXhrCalls: 0
};