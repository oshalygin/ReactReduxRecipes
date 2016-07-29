import React from "react";
import { Link } from "react-router";
import Description from "./description.jsx";

class HomePage extends React.Component {
    render() {
        const undecoratedButton = {
            textDecoration: "none"
        };

        return (
            <div className="content-grid mdl-grid">
                <div className="mdl-layout-spacer"></div>
                <div className="mdl-cell mdl-cell--5-col">
                    <Description />
                    <div className="mdl-typography--text-center">
                        <Link to="recipes" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored"
                            style={undecoratedButton}>
                            Get Started With Recipes
                        </Link>
                    </div>
                </div>
                <div className="mdl-layout-spacer"></div>
            </div>
        );
    }
}

export default HomePage;