import React from "react";
import { IndexLink, Link } from "react-router";

const Navigation = () => {
    return (
                <nav className="mdl-navigation mdl-layout--large-screen-only">
                    <IndexLink to="/" className="mdl-navigation__link">Home</IndexLink>
                    <Link to="recipes" className="mdl-navigation__link">Recipes</Link>
                </nav>
    );
};

export default Navigation;