/* eslint-disable max-len */
import React, { PropTypes } from "react";
import RecipeListRow from "./recipeListRow.jsx";

const RecipeList = ({recipes}) => {
    return (
        <div>
            <h4 className="mdl-typography--text-center">Recipes</h4>
            <table className="mdl-data-table mdl-shadow--2dp">
                <thead>
                    <tr>
                        <th>
                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select" htmlFor="table-header">
                                <input type="checkbox" id="table-header" className="mdl-checkbox__input" />
                            </label>
                        </th>
                        <th className="mdl-data-table__cell--non-numeric">Name</th>
                        <th className="mdl-data-table__cell--non-numeric">Type</th>
                        <th>Cook Time</th>
                        <th className="mdl-data-table__cell--non-numeric">Ingredients</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map(recipe => {
                        const recipeId = `row[${recipe.id}]`;
                        return (<RecipeListRow
                            key={recipe.id}
                            recipeId={recipeId}
                            recipe={recipe} />);
                    }) }
                </tbody>
            </table>
        </div>
    );
};

RecipeList.propTypes = {
    recipes: PropTypes.array.isRequired
};

export default RecipeList;

