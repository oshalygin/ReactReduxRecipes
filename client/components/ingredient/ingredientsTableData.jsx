import React, { PropTypes } from "react";

export function highlight(ingredient, index, searchCriteria) {
    if (index < 0) {
        return ingredient;
    }
    const before = ingredient.substring(0, index);
    const match = ingredient.substring(index, index + searchCriteria.length);
    const searchQuery = (!!match ? <code>{match}</code> : null);
    const after = ingredient.substring(index + searchCriteria.length);
    return (
        <span>
            {before}{searchQuery}{after}
        </span>
    );
}

export function highlightQuery(ingredients, searchCriteria) {
    return ingredients.reduce((ingredientsDisplay, ingredient) => {
        const index = ingredient
            .toLowerCase()
            .indexOf(searchCriteria.toLowerCase());
        const highlightedIngredient = highlight(ingredient, index, searchCriteria);
        return <span>{ingredientsDisplay} {highlightedIngredient} | </span>;
    }, []);
}

export const IngredientsTableData = ({ingredients, query}) => {
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



