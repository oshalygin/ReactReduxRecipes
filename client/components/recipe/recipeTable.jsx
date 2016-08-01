import React, { PropTypes } from "react";
import RecipeTableRow from "./recipeTableRow.jsx";

const RecipeTable = ({recipes, query, checked}) => {
    return (
        <table className="mdl-data-table mdl-shadow--2dp">
            <thead>
                <tr>
                    <th>
                        &nbsp;
                    </th>
                    <th className="mdl-data-table__cell--non-numeric">Name</th>
                    <th className="mdl-data-table__cell--non-numeric">Type</th>
                    <th className="mdl-data-table__cell--non-numeric">Ingredients</th>
                    <th>Cook Time</th>
                </tr>
            </thead>
            <tbody>
                {recipes.map(recipe => {
                    return (
                        <RecipeTableRow
                            key={recipe.id}
                            recipe={recipe}
                            query={query}
                            checked={checked} />);
                }) }
            </tbody>
        </table>
    );
};

RecipeTable.propTypes = {
    recipes: PropTypes.array.isRequired,
    checked: PropTypes.func.isRequired,
    query: PropTypes.string
};

export default RecipeTable;

