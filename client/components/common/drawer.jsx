import React from "react";
import { IndexLink, Link } from "react-router";

const Drawer = () => {
    return (
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">React Redux Recipes</span>
                <nav className="mdl-navigation">
                    <IndexLink to="/" className="mdl-navigation__link">Home</IndexLink>
                    <Link to="recipes" className="mdl-navigation__link">Recipes</Link>
                </nav>
            </div>
    );
};

export default Drawer;