import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { withRouter } from 'react-router-dom';
import FixedButton from "../components/FixedButton";
import Header from "../components/layout/Header";
import WaterDrop from '../images/waterDrop.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './sparkle.css';
import axios from 'axios';
import BeerGlass from '../images/glass-of-beer.png';

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
                        <p align="center">Apparently, you're so drunk that you need to be reminded to drink some water, ya lush. Click the "drink" button and find out how close you are to getting back to your hydrated self.</p>
                        <div className="col-md-12">
                            <ProgressBar animated now={60} /><br /><br />
                            {/* <img src={WaterDrop} className="waterDrop" /> */}
                            <div className="beerSparkle">
                                <div id='beerWrapper' class="beerWrapper">

                                    <div className="bubble small"></div>
                                    <div className="bubble s-medium"></div>
                                    <div className="bubble large"></div>
                                    <div className="bubble small-l"></div>
                                    <img src={BeerGlass} />
                                </div>

                            </div>
                            <div style={{ color: 'black' }}>{this.state.weight}</div>
                            <div className="row">
                                <div className="col-md-12">
                                    <button className="btn-secondary" type="submit">drink water!</button>
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