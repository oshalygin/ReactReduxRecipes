/* eslint-disable max-len */
import React, { PropTypes } from "react";
// import { helpers } from "../../../utilities/helpers";
function mutate(s) {
    return function splice() {
        let a = s.split("");
        Array.prototype.splice.apply(a, arguments);
        return a.join("");
    };
}

function highlightQuery(ingredients, searchCriteria) {
    // let ingredients = ["Rice", "Chicken Stock", "Parmesan Cheese", "White Wine", "Butter", "Salt", "Pepper", "Peas"];
    // let query = "r";
    return ingredients.reduce((ingredientsArray, ingredient) => {
        let index = ingredient
            .toLowerCase()
            .indexOf(searchCriteria);
        let highlightedIngredient = ingredient;
        if (index >= 0) {

            highlightedIngredient = mutate(ingredient)((index + searchCriteria.length), 0, "</mark>");
            highlightedIngredient = mutate(highlightedIngredient)((index), 0, "<mark>");

        }

        return [...ingredientsArray, highlightedIngredient];
    }, []);
}

const RecipeListRow = ({recipe, query}) => {
    console.log(query);
    const highlightedIngredients = highlightQuery(recipe.ingredients, query);
    const parsedIngredients = highlightedIngredients.reduce((ingredients, ingredient) => {
        if (!ingredients) {
            return ingredient;
        }
        return `${ingredients}, ${ingredient}`;
    });

    return (
        <tr>
            <td>
                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select" htmlFor={recipe.id}>
                    <input type="checkbox" id={recipe.id} className="mdl-checkbox__input" />
                </label>
            </td>
            <td className="mdl-data-table__cell--non-numeric">{recipe.name}</td>
            <td className="mdl-data-table__cell--non-numeric">{recipe.type}</td>
            <td>{recipe.cook_time}</td>
            <td className="mdl-data-table__cell--non-numeric">{parsedIngredients}</td>
        </tr>
    );
};

RecipeListRow.propTypes = {
    recipe: PropTypes.object.isRequired,
    query: PropTypes.string
};

export default RecipeListRow;