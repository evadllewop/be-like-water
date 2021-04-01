import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { withRouter } from 'react-router-dom';
import FixedButton from "../components/FixedButton";
import Header from "../components/layout/Header";
// import WaterDrop from '../images/waterDrop.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './sparkle.css';
import axios from 'axios';
import BeerGlass from '../images/glass-of-beer.png';
// import WaterGlass from '../images/glass-of-water.png';

class Drink extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    state = {

        current: 0
    };

    // /api/water/hasan
    // /api/water/dave
    // /api/water/6547373


    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`/api/water/${id}`)
            .then((res) => {
                console.log(res.data)
                this.setState(res.data);

            })
    }

    render() {

        return (
            <>
                <Header />
                <div className="loginContainer">
                    <div className="row" align="center">
                        <p align="center">Apparently, you're so drunk that you need to be reminded to drink some water, ya lush.
                        Click the "drink" button and find out how close you are to getting back to your hydrated self.</p>

                        <div style={{ fontWeight: 'bold' }}>You entered {`${this.state.goal}`} beers. This means that for a {`${this.state.gender}`} at {`${this.state.weight}`} lbs, you will need to drink {`${this.state.goal}`} 16oz. glasses of water.
                        <br /><br /></div>
                        <div className="col-md-12">
                            <ProgressBar animated now={this.state.current} label={`${this.state.current}%`} /><br />
                            {/* <img src={WaterDrop} className="waterDrop" /> */}
                            <div className="beerSparkle">
                                <div id='beerWrapper' class="beerWrapper">

                                    <div className="bubble small"></div>
                                    <div className="bubble s-medium"></div>
                                    <div className="bubble large"></div>
                                    <div className="bubble small-l"></div>
                                    <img src={BeerGlass} alt={BeerGlass} />
                                    <br /><br />
                                </div>

                            </div>
                            <div style={{ color: 'black' }}>{this.state.goal} glasses of water</div>
                            <div className="row">
                                <div className="col-md-12">
                                    <button className="btn-secondary" onClick={() => { this.setState({ current: this.state.current + 10 }) }}>drink some water!</button>
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