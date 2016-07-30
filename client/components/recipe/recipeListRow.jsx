/* eslint-disable max-len */
import React, { PropTypes } from "react";

const RecipeListRow = ({recipe, recipeId}) => {
    return (
        <tr>
            <td>
                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select" htmlFor={recipeId}>
                    <input type="checkbox" id={recipeId} className="mdl-checkbox__input" />
                </label>
            </td>
            <td classNameName="mdl-data-table__cell--non-numeric">{recipe.name}</td>
            <td classNameName="mdl-data-table__cell--non-numeric">{recipe.type}</td>
            <td>{recipe.cook_time}</td>
            <td classNameName="mdl-data-table__cell--non-numeric">{recipe.ingredients}</td>
        </tr>
    );
};

RecipeListRow.propTypes = {
    recipe: PropTypes.object.isRequired,
    recipeId: PropTypes.string.isRequired
};

export default RecipeListRow;