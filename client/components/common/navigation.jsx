import React from "react";
import { IndexLink, Link } from "react-router";

const Navigation = () => {
    const undecoratedAnchorTag = {
        textDecoration: "none"
    };
    return (
        <nav className="mdl-navigation mdl-layout--large-screen-only">
            <IndexLink to="/" className="mdl-navigation__link" style={undecoratedAnchorTag}>Home</IndexLink>
            <Link to="recipes" className="mdl-navigation__link" style={undecoratedAnchorTag}>Recipes</Link>
        </nav>
    );
};

export default Navigation;