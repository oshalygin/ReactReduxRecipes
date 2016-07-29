import express from "express";
import recipeApi from "./controllers/recipeController";

let router = express.Router();
let recipeController = recipeApi();

// {api/recipe}
router
    .route("/recipe")
    .get(recipeController.get);

export default router;