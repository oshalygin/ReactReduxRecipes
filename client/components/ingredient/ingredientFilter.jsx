import React, { PropTypes } from "react";

const IngredientFilter = ({onChange}) => {
    return (
        <span>
            <form>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--align-right">
                    <input className="mdl-textfield__input"
                        type="text"
                        name="ingredient"
                        onChange={onChange} />
                    <label className="mdl-textfield__label" htmlFor="ingredient">Filter Ingredient</label>
                </div>
            </form>
        </span>
    );
};

IngredientFilter.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default IngredientFilter;