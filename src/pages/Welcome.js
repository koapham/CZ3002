import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { Button } from '@material-ui/core';
import "./Welcome.css";
import { ReactComponent as Logo} from "./assets/icon.svg";
import { ReactComponent as NTU} from "./assets/ntu.svg";

class Login extends Component {
    render() {
        return (
            <div className="login">
                <NTU className={"ntu"}/>
                <h1 className="NTULearn">Showtime</h1>
                <p className = "welcome-description">A learning forum for NTU
                    students to ask questions and 
                    exchange study materials.</p>
                <Logo className = "student"/>

                    <Button className="studentLogin" variant="contained" color="primary" component={Link} to="/login"> <span>Student</span> </Button>
                    {/* <Button className="adminLogin" variant="contained" color="secondary" component={Link} to="/home"> <span>Admin</span> </Button> */}

            </div>
        );
    }
}

export default Login;
