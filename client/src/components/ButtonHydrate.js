import React from 'react';
import { withRouter } from "react-router-dom";

function ButtonHydrate(props) {

    const handleClick = () => {
        // serves as a redirect
        props.history.push(props.path)
    }

    return (
        <button className="btn-primary" onClick={handleClick}>{props.label}</button>
    )
}
export default withRouter(ButtonHydrate);