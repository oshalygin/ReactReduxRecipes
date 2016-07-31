import React, { PropTypes } from "react";
import IngredientListRow from "./ingredientListRow.jsx";

const IngredientList = ({ingredients}) => {
    return (
        <ul className="mdl-list">
            {ingredients.map(ingredient => {
                return (
                    <IngredientListRow
                        key={ingredient}
                        ingredient={ingredient} />
                );
            }) }
        </ul>
    );
};

IngredientList.propTypes = {
    ingredients: PropTypes.array
};

export default IngredientList;