import React from 'react';

function Login() {
    return (

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
                        <button className="btn-primary" type="submit">get hydrated!</button>
                        <button className="btn-secondary" type="submit">create account</button>
                    </form>
                    <br />
                </div>
            </div>
        </div>
    )
}
export default Login;