import React, { PropTypes } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import * as recipeActions from "../../actions/recipeActions.js";

import RecipeList from "./recipeList.jsx";

class RecipesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidUpdate() {
        componentHandler.upgradeDom(); //eslint-disable-line
    }

    render() {
        const {recipes} = this.props;
        return (
            <div className="content-grid mdl-grid">
                <div className="mdl-layout-spacer"></div>
                <div className="mdl-cell mdl-cell--4-col">
                    <RecipeList recipes={recipes} />
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