import React, { Component } from 'react';
import "./CourseForum.css";
import HomeIcon from '../components/HomeIcon';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';
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
            <div>
                <HomeIcon />
                <SearchBar/>
                <Sidebar className = "mysidebar"/>
                <HomePlaceholder className = "myhomeplaceholder"/>
            </div>
        );
    }
}

export default CourseForum;