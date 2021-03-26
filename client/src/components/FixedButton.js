import React from 'react';
import { withRouter } from "react-router-dom";

function FixedButton(props) {

    const handleClick = () => {
        // serves as a redirect
        props.history.push(props.path)
    }

    return (
        <button className="btn-primary fixed-button" onClick={handleClick}>{props.label}</button>
    )
}
export default withRouter(FixedButton);