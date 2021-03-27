import React, { Component } from "react";
import FixedButton from "../components/FixedButton";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { withRouter } from 'react-router-dom';
import Header from "../components/layout/Header";
import maleImage from '../images/blw_settings_male.png';
import femaleImage from '../images/blw_settings_female.png';
import axios from "axios";

const selectedStyle = { borderWidth: "1px", borderStyle: "solid", borderColor: "black" };

class Settings extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    state = {
        weight: "",
        goal: "",
        gender: ""
    }

    render() {
        const { user } = this.props.auth;

        return (
            <>
                <Header />
                <div className="loginContainer">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="settingsHeader">gender</h2>
                            <div className="row" align="center">
                                <div className="col-md-12">
                                    <img src={maleImage} style={this.state.gender === "male" ? selectedStyle : {}} onClick={() => { this.setState({ gender: "male" }) }} alt={maleImage} className="genderIcon" />
                                    <img src={femaleImage} style={this.state.gender === "female" ? selectedStyle : {}} onClick={() => { this.setState({ gender: "female" }) }} alt={femaleImage} className="genderIcon" />

                                    <div className="row">
                                        <div className="col-md-12">
                                            <h2 className="settingsHeader">weight</h2>

                                            <form className="login">
                                                <div className="form-group">
                                                    <input type="input" className="form-control" onChange={(e) => { this.setState({ weight: e.target.value }) }} value={this.state.weight} id="weight-input"
                                                        placeholder="Enter your weight" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h2 className="settingsHeader">daily goal</h2>

                                                        <form className="login">
                                                            <div className="form-group">
                                                                <input type="input" className="form-control" onChange={(e) => { this.setState({ goal: e.target.value }) }} value={this.state.goal} id="goal-input"
                                                                    placeholder="Enter daily goal (ml)" />
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
                    <FixedButton label="next" onClick={(e) => {
                        const weightNum = parseInt(this.state.weight);
                        const goalNum = parseInt(this.state.goal);
                        const waterData = {
                            gender: this.state.gender,
                            weight: weightNum,
                            goal: goalNum
                        }
                        axios
                            .post("/api/water", waterData)
                            .then(res => {
                                console.log(res.data._id);
                                this.props.history.push(`/drink/${res.data._id}`)
                            })
                    }} />
                </div>
                <div className="row" align="center">
                    <div className="col">
                        <button
                            style={{
                                width: "400px",
                                borderRadius: "8px",
                                // letterSpacing: "1.5px",
                                marginBottom: "40px"
                            }}
                            onClick={this.onLogoutClick}
                            className="btn-logout"
                        >
                            logout
              </button></div>
                </div>
            </>

        )
    }
}
Settings.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default withRouter(connect(
    mapStateToProps,
    { logoutUser }
)(Settings));