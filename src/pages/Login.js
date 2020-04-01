import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core';
import "./Login.css";
import { ReactComponent as Logo} from "./assets/icon.svg";
import { ReactComponent as NTU} from "./assets/ntu.svg";
//import {ReactComponent as login} from "./assets/login.svg"

class Login extends Component {
    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
    }

    login(event) {
        //Login logic
        localStorage.setItem('username', 'Er Chin'); //Set username/first name here
        this.props.history.push('/home');
    }

    render() {
        return (
            <div class="login" id="login" >
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
                                                 type={"text"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Password:</p>
                                        </td>
                                        <td>
                                        <input className="loginInput"
                                               type={"password"} />
                                        </td>
                                    </tr>
                              </table>
                               <Button className="btn btn-primary btn-block login-btn" variant="contained" color="primary" onClick={this.login}> <span>Log In</span> </Button>
                          </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
