import React, { PropTypes } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import * as recipeActions from "../../actions/recipeActions.js";

import RecipeTable from "./recipeTable.jsx";
import IngredientList from "../ingredient/ingredientList.jsx";
import IngredientFilter from "../ingredient/ingredientFilter.jsx";
import NotFound from "../common/notFound.jsx";

export class RecipesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            recipes: Object.assign([], ...props.recipes),
            query: "",
            ingredients: Object.assign([], ...props.ingredients)
        };
        this.updateRecipeState = this.updateRecipeState.bind(this);
        this.filterIngredients = this.filterIngredients.bind(this);
        this.ingredientExistsInRecipe = this.ingredientExistsInRecipe.bind(this);
        this.checkboxChangeHandler = this.checkboxChangeHandler.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({ recipes: newProps.recipes, ingredients: newProps.ingredients });
    }

    componentDidMount() {
        componentHandler.upgradeDom(); //eslint-disable-line
        this.setState({ //eslint-disable-line
            recipes: this.props.recipes,
            ingredients: this.props.ingredients
        });
    }

    componentDidUpdate() {
        componentHandler.upgradeDom(); //eslint-disable-line
    }

    filterIngredients(ingredient) {
        const {recipes} = this.props;
        if (!!ingredient) {
            return recipes.filter(recipe => {
                return this.ingredientExistsInRecipe(ingredient, recipe.ingredients);
            });
        }
        return recipes;
    }

    ingredientExistsInRecipe(query, ingredients) {
        return !!ingredients
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase());
    }

    updateRecipeState(event) {
        const ingredientQuery = event.target.value;
        this.setState({
            recipes: this.filterIngredients(ingredientQuery),
            query: ingredientQuery
        });
    }

    checkboxChangeHandler(event) {
        const checkedRecipe = this.props.recipes
            .filter(recipe => recipe.id === event.target.id)[0];

        this.props.recipeActions.updateRecipe(Object.assign({}, checkedRecipe));
    }

    render() {
        const {recipes, query, ingredients} = this.state;
        const recipeContent = !!recipes.length
            ? (<RecipeTable
                recipes={recipes}
                query={query}
                checked= {this.checkboxChangeHandler} />)
            : (<NotFound message={`There were no matches for ${query}...`} />);
        const ingredientContent = !!ingredients.length
            ? (<span>
                <p className="mdl-typography--text-center mdl-typography--title">
                    Ingredients to purchase...
                </p>
                <IngredientList ingredients={ingredients} />
            </span>)
            : (<span></span>);

        return (
            <div>
                <div className="content-grid mdl-grid">
                    <div className="mdl-cell mdl-cell--2-col">
                        <IngredientFilter onChange={this.updateRecipeState} />
                    </div>
                </div>
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--9-col">
                        {recipeContent}
                    </div>
                    <div className="mdl-cell mdl-cell--3-col">
                        {ingredientContent}
                    </div>
                </div>
            </div>
        );
    }
}

RecipesPage.propTypes = {
    recipes: PropTypes.array.isRequired,
    ingredients: PropTypes.array.isRequired,
    recipeActions: PropTypes.object.isRequired
};

function updateIngredients(recipes) {
    const updatedingredients = recipes
        .filter(recipe => recipe.checked)
        .reduce((listOfIngredients, filteredRecipe) => {
            const compiledListOfIngredients = [...listOfIngredients, ...filteredRecipe.ingredients];
            return [...new Set(compiledListOfIngredients)];
        }, [])
        .slice()
        .sort();
    return updatedingredients;
}


function mapStateToProps(state) {
    const listOfIngredients = updateIngredients(state.recipes);
    console.log(listOfIngredients);
    return {
        recipes: state.recipes,
        ingredients: listOfIngredients
    };
}

function mapDispatchToProps(dispatch) {
    return {
        recipeActions: bindActionCreators(recipeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);