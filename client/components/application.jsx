import React, {PropTypes} from "react";
import { connect } from "react-redux";


class Application extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                {this.props.children}
            </div>
        );
    }
}

Application.propTypes = {
    children: PropTypes.object.isRequired,
};

export default connect(Application);