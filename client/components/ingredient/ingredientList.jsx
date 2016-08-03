import React, { PropTypes } from "react";
import IngredientListRow from "./ingredientListRow.jsx";
import uuid from "uuid";

const IngredientList = ({ingredients}) => {
    return (
        <ul className="mdl-list">
            {ingredients.map(ingredient => {
                return (
                    <IngredientListRow
                        key={uuid.v4()}
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