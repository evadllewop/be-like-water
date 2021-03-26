import React from 'react';
import { withRouter } from "react-router-dom";

function ButtonCreateAccount(props) {

    const handleClick = () => {
        // serves as a redirect
        props.history.push(props.path)
    }

    return (
        <button className="btn-secondary" onClick={handleClick}>{props.label}</button>
    )
}
export default withRouter(ButtonCreateAccount);