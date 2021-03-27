import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { withRouter } from 'react-router-dom';
import FixedButton from "../components/FixedButton";
import Header from "../components/layout/Header";
import WaterDrop from '../images/waterDrop.png';
import axios from 'axios';

class Drink extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    state = {};

    // /api/water/hasan
    // /api/water/dave
    // /api/water/6547373

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`/api/water/${id}`)
            .then((res) => {
                this.setState(res.data);

            })


    }

    render() {
        const { user } = this.props.auth;
        return (
            <>
                <Header />
                <div className="loginContainer">
                    <div className="row" align="center">
                        <div className="col-md-12">
                            <img src={WaterDrop} className="waterDrop" />
                            <div style={{ color: 'black' }}>{this.state.weight}</div>
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
                            className="btn-logout"
                        >
                            logout
              </button></div>
                </div>
                {/* <section>
                    <div class="wave wave1"></div>
                    <div class="wave wave2"></div>
                    <div class="wave wave3"></div>
                    <div class="wave wave4"></div>
                </section> */}
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