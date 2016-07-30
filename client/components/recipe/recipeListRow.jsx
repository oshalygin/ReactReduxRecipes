import React, { PropTypes } from "react";

import IngredientsTableData from "../ingredient/ingredientsTableData.jsx";

const RecipeListRow = ({recipe, query}) => {

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
            <IngredientsTableData ingredients={recipe.ingredients} query={query} />
        </tr>
    );
};

RecipeListRow.propTypes = {
    recipe: PropTypes.object.isRequired,
    query: PropTypes.string
};

export default RecipeListRow;