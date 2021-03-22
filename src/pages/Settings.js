import React from 'react';


function Settings() {

    return (

        <div className="loginContainer">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="settingsHeader">gender</h2>
                    <div className="row">
                        <div className="col-md-12 divCenter">
                            <img src="../public/images/blw_settings_male.png" className="genderIcon" />
                            <img src="../public/images/blw_settings_female.png" className="genderIcon" />

                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="settingsHeader">weight</h2>

                                    <form className="login">
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="email-input"
                                                placeholder="Email" />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h2 className="settingsHeader">daily goal</h2>

                                                <form className="login">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" id="email-input"
                                                            placeholder="Email" />
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
                <button className="btn-primary fixed-button" type="submit">next</button>
)


}