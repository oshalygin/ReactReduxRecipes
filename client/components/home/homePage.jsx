import React from "react";
import { Link } from "react-router";

class HomePage extends React.Component {
    render() {
        return (
            <div className= "jumbotron">
                <h3>Recipe Portal</h3>
                <p>All things recipes</p>
                <Link to="recipes" className="btn btn-primary btn-sm">Get Started</Link>
            </div>
        );
    }
}

export default HomePage;