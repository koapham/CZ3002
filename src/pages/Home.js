import React, { Component } from 'react'
import HomeIcon from '../components/HomeIcon';
import "./Home.css";
import { ReactComponent as SearchIcon} from "./assets/search.svg";
import { ReactComponent as HomePlaceholder} from "./assets/home-placeholder.svg";

class Home extends Component {
    render() {
        return (
            <div>
                <HomeIcon />
                <p id="welcome-msg" className="center">Hey USERNAME!</p>
                <h1 id="title" className="center">Welcome to Showtime</h1>
                <div className="input-holder center">
                    <SearchIcon className="search-icon"/>
                    <input id="course-search" className="center" placeholder="Type the code or title of a course"/>
                </div>
                <HomePlaceholder className="home-placeholder center" />
            </div>
        );
    }
}

export default Home;