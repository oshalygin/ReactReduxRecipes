import React, {PropTypes} from "react";
import { connect } from "react-redux";
import Header from "./common/header.jsx";
import Drawer from "./common/drawer.jsx";

class Application extends React.Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header />
                <Drawer />
                <main className="mdl-layout__content">
                    {this.props.children}
                </main>
            </div>
        );
    }
}

Application.propTypes = {
    children: PropTypes.object.isRequired
};

export default connect()(Application);