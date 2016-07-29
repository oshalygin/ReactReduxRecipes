import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as recipeActions from "../../actions/recipeActions.js";

class RecipePage extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {
        const {recipes} = this.props;
        return (
            <div>
                <h4>Recipes</h4>
            </div>
        );
    }
};

RecipePage.propTypes = {
    recipes: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        recipes: state.recipes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(recipeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);