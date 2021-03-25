import React from 'react';
import Wave from '../images/blw_header_wave.png';


function Header() {
    return (
        <div className="wrapper">
            <div className="row">
                <div className="col logoSm">be like water</div>
                <div className="d-flex flex-row-reverse bd-highlight"><img className="wave" src={Wave} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Header;