import React from 'react';
import Wave from '../../images/blw_header_wave.png';


function Header() {
    return (
        <div className="wrapper">
            <div className="row">
                <div className="d-flex flex-row-reverse bd-highlight"><img className="wave" src={Wave} alt="" />
                </div>
                {/* <div id="box">
                    <div id="tile01">
                        <div id="mask">beer likes water</div>
                    </div> */}
            </div>
            <div className="col logoLg">beer likes water</div>
            {/* </div> */}
        </div>
        // </div > * /}
    )
}

export default Header;