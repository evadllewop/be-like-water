import React from 'react';
import FixedButton from "../components/FixedButton";
import { withRouter } from 'react-router-dom';
import Header from "../components/layout/Header";
import maleImage from '../images/blw_settings_male.png';
import femaleImage from '../images/blw_settings_female.png';


function Settings() {


    return (
        <>
            <Header />
            <div className="loginContainer">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="settingsHeader">gender</h2>
                        <div className="row" align="center">
                            <div className="col-md-12">
                                <img src={maleImage} alt={maleImage} className="genderIcon" />
                                <img src={femaleImage} alt={femaleImage} className="genderIcon" />

                                <div className="row">
                                    <div className="col-md-12">
                                        <h2 className="settingsHeader">weight</h2>

                                        <form className="login">
                                            <div className="form-group">
                                                <input type="input" className="form-control" id="weight-input"
                                                    placeholder="Enter your weight" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h2 className="settingsHeader">daily goal</h2>

                                                    <form className="login">
                                                        <div className="form-group">
                                                            <input type="input" className="form-control" id="goal-input"
                                                                placeholder="Enter daily goal (ml)" />
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <h2 className="settingsHeader">schedule</h2>
                                                                <div className="row g-3">
                                                                    <div className="col">
                                                                        <form className="login">
                                                                            <select className="form-select"
                                                                                aria-label="Default select example">
                                                                                <option selected>Wake Time
                                                                            </option>
                                                                                <option value="1">5:00am</option>
                                                                                <option value="2">6:00am</option>
                                                                                <option value="3">7:00am</option>
                                                                                <option value="4">8:00am</option>
                                                                                <option value="5">9:00am</option>
                                                                                <option value="6">10:00am</option>
                                                                            </select>
                                                                        </form>
                                                                        <div>
                                                                            <div className="col">
                                                                                <select className="form-select"
                                                                                    aria-label="Default select example">
                                                                                    <option selected>Sleep Time
                                                                        </option>
                                                                                    <option value="1">7:00pm</option>
                                                                                    <option value="2">8:00pm</option>
                                                                                    <option value="3">9:00pm</option>
                                                                                    <option value="4">10:00pm</option>
                                                                                    <option value="5">11:00pm</option>
                                                                                    <option value="6">12:00am</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div align="center">
                <FixedButton label="next" path="/drink" />
            </div>
        </>

    )
}
export default withRouter(Settings);