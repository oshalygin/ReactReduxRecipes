import React, { PropTypes } from "react";


const NotFound = ({message}) => {
    return (
        <div className="mdl-cell mdl-cell--12-col mdl-typography--text-center">
            <img src={require("../../images/noResult.png") } alt={"Not found Image"} />
            <br />
            <br />
            <p className="mdl-color-text--grey mdl-typography--headline">{message}</p>
        </div>
    );
};

NotFound.propTypes = {
    message: PropTypes.string
};

export default NotFound;