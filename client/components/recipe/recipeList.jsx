import React, { PropTypes } from "react";
import RecipeListRow from "./recipeListRow.jsx";

const RecipeList = ({recipes}) => {
    return (
        <table className="table">
            <thead>
                <tr>Name</tr>
                <tr>Type</tr>
                <tr>Ingredients</tr>
                <tr>Cook Time</tr>
            </thead>
            <tbody>
                {recipes.map(recipe => {
                    <RecipeListRow key={recipe.id} recipe={recipe} />;
                }) }
            </tbody>
        </table>
    );
};

RecipeList.propTypes = {
    recipes: PropTypes.array.isRequired
};

export default RecipeList;

