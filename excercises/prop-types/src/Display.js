import React from "react";
import PropTypes from "prop-types";

function Display(props) {
    return <div> {props.name}</div>
}
Display.proptypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    attributes: PropTypes.shape({
        height: PropTypes.string,
        weight: PropTypes.number
    })
}
export default Display;
