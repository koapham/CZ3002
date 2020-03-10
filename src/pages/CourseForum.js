import React, { Component } from 'react';
import HomeIcon from '../components/HomeIcon';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';
import "./Home.css";
import "./CourseForum.css";
import { ReactComponent as HomePlaceholder} from "./assets/home-placeholder.svg";

class CourseForum extends Component {
    constructor(props) {
        super(props);

        this.toggleSearch = this.toggleSearch.bind(this);

        this.state = {searchClass: ""};
    } 
    
    toggleSearch() {
        this.setState( { searchClass : " search" } );
    }

    render() {
        return (
            <div className={"home-div course-forum"}>
                <HomeIcon />
                <SearchBar className="search" />
                <Sidebar className = {"sidebar search"}/>
                <HomePlaceholder className = "home-placeholder search"/>
            </div>
        );
    }
}

export default CourseForum;