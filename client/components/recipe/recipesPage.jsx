import React, { PropTypes } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import * as recipeActions from "../../actions/recipeActions.js";
import * as shoppingCartActions from "../../actions/shoppingCartActions.js";

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
            shoppingCart: Object.assign([], ...props.shoppingCart)
        };
        this.updateRecipeState = this.updateRecipeState.bind(this);
        this.filterIngredients = this.filterIngredients.bind(this);
        this.ingredientExistsInRecipe = this.ingredientExistsInRecipe.bind(this);
        this.checkboxChangeHandler = this.checkboxChangeHandler.bind(this);
        this.updateIngredientList = this.updateShoppingCart.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({ recipes: newProps.recipes, ingredients: newProps.ingredients });
    }

    componentDidMount() {
        componentHandler.upgradeDom(); //eslint-disable-line
        this.setState({ //eslint-disable-line
            recipes: this.props.recipes,
            shoppingCart: this.props.shoppingCart
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

    updateShoppingCart() {
        const updatedShoppingCart = this.props.recipes
            .filter(recipe => recipe.checked)
            .reduce((listOfIngredients, filteredRecipe) => {
                const compiledListOfIngredients = [...listOfIngredients, ...filteredRecipe.ingredients];
                return [...new Set(compiledListOfIngredients)];
            }, [])
            .slice()
            .sort();

        this.setState({ shoppingCart: updatedShoppingCart });
        return this.props.shoppingCartActions.saveShoppingCart(updatedShoppingCart);
    }

    checkboxChangeHandler(event) {
        const checkedRecipe = this.props.recipes
            .filter(recipe => recipe.id === event.target.id)[0];
        console.log(checkedRecipe);
        this.props.recipeActions.updateRecipe(checkedRecipe);
        this.updateShoppingCart();
    }

    render() {
        const {recipes, query, shoppingCart} = this.state;
        const recipeContent = !!recipes.length
            ? (<RecipeTable
                recipes={recipes}
                query={query}
                checked= {this.checkboxChangeHandler} />)
            : (<NotFound message={`There were no matches for ${query}...`} />);
        const ingredientContent = !!shoppingCart.length
            ? (<span>
                <p className="mdl-typography--text-center mdl-typography--title">
                    Ingredients to purchase...
                </p>
                <IngredientList ingredients={shoppingCart} />
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
    shoppingCart: PropTypes.array.isRequired,
    recipeActions: PropTypes.object.isRequired,
    shoppingCartActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        recipes: state.recipes,
        shoppingCart: state.shoppingCart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        recipeActions: bindActionCreators(recipeActions, dispatch),
        shoppingCartActions: bindActionCreators(shoppingCartActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);