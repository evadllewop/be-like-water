import React from 'react';
import FixedButton from "../components/FixedButton";
import { withRouter } from 'react-router-dom';
import Header from "../components/Header";
import WaterDrop from '../images/waterDrop.png';

function Drink() {
    return (
        <>
            <Header />
            <div className="loginContainer">
                <div className="row" align="center">
                    <div className="col-md-12">
                        <img src={WaterDrop} className="waterDrop" />

                        <div className="row">
                            <div className="col-md-12">
                                <button className="btn-secondary" type="submit">drink!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <FixedButton label="settings" path="/settings" />
            </div>
        </>

    )
}
export default withRouter(Drink);