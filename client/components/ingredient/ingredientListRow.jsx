import React, { PropTypes } from "react";

const IngredientListRow = ({ingredient}) => {
    return (
        <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
                <i className="material-icons mdl-list__item-icon">add_shopping_cart</i>
                {ingredient}
            </span>
        </li>
    );
};

IngredientListRow.propTypes = {
    ingredient: PropTypes.string.isRequired
};

export default IngredientListRow;