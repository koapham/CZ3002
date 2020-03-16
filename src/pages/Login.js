import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core';
import "./Login.css";
import { ReactComponent as Logo} from "./assets/icon.svg";
import { ReactComponent as NTU} from "./assets/ntu.svg";
//import {ReactComponent as login} from "./assets/login.svg"

class Login extends Component {
    render() {
        return (
            <div class="login" id="login" style={{background: '#FFF2c8' }}>
                <div id="message" class="alert alert-success" role="alert" style={{display: 'none'}}></div>
                <div id="error" class="alert alert-danger" role="alert" style={{display: 'none'}}></div>
                <div class="container">
                    <h2 id="titleLogin">ShowTime</h2>
                    <div class="card-login mx-auto mt-5 login-form">
                          <div class="card-header">
                              <p>Login</p>
                          </div>
                          <div class="card-body">
                              <table>
                                    <tr>
                                        <td>
                                            <p style={{overflowWrap: 'normal'}}>Username:</p>
                                        </td>
                                        <td>
                                          <input className="loginInput"
                                            type="Enter Username"
                                         />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Password:</p>
                                        </td>
                                        <td>
                                        <input className="loginInput"
                                          type="Enter password"
                                       />
                                        </td>
                                    </tr>
                              </table>
                               <Button className="btn btn-primary btn-block" variant="contained" color="primary" style={{marginTop:'20px'}} component={Link} to="/home"> <span>Log In</span> </Button>
                          </div>
                          <div className="text-center">
                              <Link className="ForgotPassword"  style={{float: 'right'}}>Forgot Password?</Link>
                          </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
