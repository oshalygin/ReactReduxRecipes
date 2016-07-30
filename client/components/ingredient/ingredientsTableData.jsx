import React, { PropTypes } from "react";

function mutate(s) {
    return function splice() {
        let a = s.split("");
        Array.prototype.splice.apply(a, arguments);
        return a.join("");
    };
}

function highlightQuery(ingredients, searchCriteria) {

    return ingredients.reduce((ingredientsArray, ingredient) => {
        let index = ingredient
            .toLowerCase()
            .indexOf(searchCriteria);
        let highlightedIngredient = ingredient;
        if (index >= 0) {
            highlightedIngredient = mutate(ingredient)((index + searchCriteria.length), 0, "</code>");
            highlightedIngredient = mutate(highlightedIngredient)((index), 0, "<code>");
        }

        return [...ingredientsArray, highlightedIngredient];
    }, []);
}


const IngredientsTableData = ({ingredients, query}) => {

    const parsedIngredients = highlightQuery(ingredients, query)
        .reduce((collectionOfIngredients, ingredient) => {
            if (!collectionOfIngredients) {
                return ingredient;
            }
            return { __html: `${collectionOfIngredients}, ${ingredient}` };
        });

    return (
        <td
            className="mdl-data-table__cell--non-numeric"
            dangerouslySetInnerHTML={parsedIngredients}>
        </td>

    );
};

IngredientsTableData.propTypes = {
    ingredients: PropTypes.array.isRequired,
    query: PropTypes.string.isRequired
};

export default IngredientsTableData;



