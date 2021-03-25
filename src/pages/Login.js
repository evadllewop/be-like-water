import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from "../components/Header";
import ButtonHydrate from '../components/ButtonHydrate';

function Login() {
    return (
        <>
            <Header />
            <div className="loginContainer">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="h2MainHeader">login</h2>
                        <form className="login">
                            <div className="form-group">
                                <input type="email" className="form-control" id="email-input" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="password-input" placeholder="Password" />
                            </div>
                            <ButtonHydrate label="get hydrated" path='/settings' />
                            <button className="btn-secondary" type="submit">create account</button>
                        </form>
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}
export default withRouter(Login);