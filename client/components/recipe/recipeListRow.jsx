/* eslint-disable max-len */
import React, { PropTypes } from "react";

const RecipeListRow = ({recipe}) => {
    const parsedIngredients = recipe.ingredients.reduce((ingredients, ingredient) => {
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
    recipe: PropTypes.object.isRequired
};

export default RecipeListRow;