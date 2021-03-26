import React, { Component } from "react";
import Header from "./Header";
import ButtonHydrate from '../ButtonHydrate';
import ButtonCreateAcc from '../ButtonCreateAcc';
import '../../styles.css';

class Landing extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="loginContainer">
          <div className="row">
            <div className="col-md-12">
              {/* <h2 className="h2MainHeader">login</h2> */}
              <ButtonHydrate label="log in" path='/login' />
              <ButtonCreateAcc label="create account" path='/register' />
              <br />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Landing;
