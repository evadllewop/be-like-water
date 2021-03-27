import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import ButtonHydrate from '../ButtonHydrate';
import { withRouter } from 'react-router-dom';
import Header from "../layout/Header";

class Dashboard extends Component {
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
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-12">
                <h4 className="h2MainHeader">
                  <b>Hey there,</b> {user.name.split(" ")[0]}
                </h4>
                <p>Drinking water is a very important thing. This app will help you...blah blah blah.</p>
                <ButtonHydrate label="let's get hydrated" path='/settings' />
              </div>
            </div>
          </div>
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
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard));
