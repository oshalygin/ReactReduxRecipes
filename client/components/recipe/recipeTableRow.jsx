import React, { PropTypes } from "react";
import IngredientsTableData from "../ingredient/ingredientsTableData.jsx";

const RecipeTableRow = ({recipe, query, checked}) => {
    return (
        <tr>
            <td>
                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select" htmlFor={recipe.id}>
                    <input type="checkbox" id={recipe.id} className="mdl-checkbox__input" onChange={checked} />
                </label>
            </td>
            <td className="mdl-data-table__cell--non-numeric">{recipe.name}</td>
            <td className="mdl-data-table__cell--non-numeric">{recipe.type}</td>
            <IngredientsTableData ingredients={recipe.ingredients} query={query} />
            <td>{recipe.cook_time}</td>
        </tr>
    );
};

RecipeTableRow.propTypes = {
    recipe: PropTypes.object.isRequired,
    query: PropTypes.string,
    checked: PropTypes.func.isRequired
};

export default RecipeTableRow;