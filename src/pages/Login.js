import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import "./Login.css";
import { ReactComponent as Logo} from "./assets/icon.svg";
import { ReactComponent as NTU} from "./assets/ntu.svg";

class Login extends Component {
    render() {
        return (
            <div className="login">
                <NTU className="ntu"/>
                <h1 className="NTULearn">NTU Learn</h1>
                <h1 className="forum">FORUM</h1>
                <Logo className = "student"/>
                <p className = "description">A learning forum for NTU 
                students to ask questions and 
                exchange materials</p>
            </div>
        );
    }
}

export default Login;