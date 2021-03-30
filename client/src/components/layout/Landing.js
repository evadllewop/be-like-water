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
        <div className="row">
          <div className="logoSm">stay hydrated, stupid</div>
        </div>
        <div className="row">
          <div className="txtWrapper">Beer is good...we get it. But you are gonna need a reminder to drink some water while you're out on your little journey to stupidville. We're here to help.</div>
        </div>
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
        <section>
          <div class="wave wave1"></div>
          <div class="wave wave2"></div>
          <div class="wave wave3"></div>
          <div class="wave wave4"></div>
        </section>
      </>
    );
  }
}

export default Landing;
