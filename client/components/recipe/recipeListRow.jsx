import React, { PropTypes } from "react";

const RecipeListRow = ({recipe}) => {
    return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.type}</td>
            <td>{recipe.cook_time}</td>
        </tr>
    );
}

RecipeListRow.PropTypes = {
    recipe: PropTypes.object.isRequired
};

export default RecipeListRow;