import React, { PropTypes } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import * as recipeActions from "../../actions/recipeActions.js";

import RecipeList from "./recipeList.jsx";
import IngredientFilter from "../ingredient/ingredientFilter.jsx";
import NotFound from "../common/notFound.jsx";

class RecipesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            recipes: Object.assign([], ...props.recipes),
            query: ""
        };
        this.updateRecipeState = this.updateRecipeState.bind(this);
        this.filterIngredients = this.filterIngredients.bind(this);
        this.ingredientExistsInRecipe = this.ingredientExistsInRecipe.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({ recipes: newProps.recipes });

    }

    componentDidMount() {
        componentHandler.upgradeDom(); //eslint-disable-line
        this.setState({ //eslint-disable-line
            recipes: this.props.recipes
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

    render() {
        const {recipes, query} = this.state;
        const recipeContent = !!recipes.length
            ? (<RecipeList
                recipes={recipes}
                query={query} />)
            : (<NotFound message={`There were no matches for ${query}...`} />);
        return (
            <div className="content-grid mdl-grid">
                <div className="mdl-layout-spacer"></div>
                <div className="mdl-cell mdl-cell--8-col">
                    <div className="mdl-cell mdl-cell--2-col">
                        <IngredientFilter onChange={this.updateRecipeState} />
                    </div>
                    {recipeContent}
                </div>
                <div className="mdl-layout-spacer"></div>
            </div>
        );
    }
}

RecipesPage.propTypes = {
    recipes: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        recipes: state.recipes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(recipeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);