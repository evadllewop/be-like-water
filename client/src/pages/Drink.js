import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { withRouter } from 'react-router-dom';
import FixedButton from "../components/FixedButton";
import Header from "../components/layout/Header";
import WaterDrop from '../images/waterDrop.png';

class Drink extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
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
                </div>
                <div align="center">
                    <FixedButton label="settings" path="/settings" />
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
                            className="btn-secondary"
                        >
                            logout
              </button></div>
                </div>
            </>

        )
    }
}
Drink.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default withRouter(connect(
    mapStateToProps,
    { logoutUser }
)(Drink));