import React, { PropTypes } from "react";
import IngredientListRow from "./ingredientListRow.jsx";
//UUID passed

const IngredientList = ({ingredients}) => {
    return (
        <ul className="mdl-list">
            {ingredients.map(ingredient => {
                return (
                    <IngredientListRow
                        key={Math.random(1000)}
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