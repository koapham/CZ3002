import React, { Component } from 'react'
import "./HomeIcon.css";
import { ReactComponent as HomeIconSvg} from "../pages/assets/home-icon.svg";

class HomeIcon extends Component {
    render() {
        return (
            <div>
                <a id="home-icon-holder" href="/home">
                    <HomeIconSvg className="home-icon"/>
                    <p>Home</p>
                </a>
            </div>
        );
    }
}

export default HomeIcon;