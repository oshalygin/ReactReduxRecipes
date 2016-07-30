import React, { PropTypes } from "react";

function highlight(ingredient, index, searchCriteria) {
    if (index < 0) {
        return ingredient;
    }
    const before = ingredient.substring(0, index);
    const match = ingredient.substring(index, index + searchCriteria.length);
    const after = ingredient.substring(index + searchCriteria.length);

    return (
        <span>
            {before}<mark>{match}</mark>{after}
        </span>
    );
}

function highlightQuery(ingredients, searchCriteria) {

    return ingredients.reduce((ingredientsDisplay, ingredient) => {
        const index = ingredient
            .toLowerCase()
            .indexOf(searchCriteria.toLowerCase());
        let highlightedIngredient = highlight(ingredient, index, searchCriteria);

        if (!!ingredientsDisplay) {
            return <span>{ingredientsDisplay}, {highlightedIngredient}</span>;
        }
        return <span>{highlightedIngredient}</span>;
    });
}


const IngredientsTableData = ({ingredients, query}) => {

    const parsedIngredients = highlightQuery(ingredients, query);

    return (
        <td className="mdl-data-table__cell--non-numeric">
            {parsedIngredients}
        </td>

    );
};

IngredientsTableData.propTypes = {
    ingredients: PropTypes.array.isRequired,
    query: PropTypes.string.isRequired
};

export default IngredientsTableData;



