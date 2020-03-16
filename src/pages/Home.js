import React, { Component } from 'react'
import HomeIcon from '../components/HomeIcon';
import ModuleList from '../components/ModuleList';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import "./Home.css";
import { ReactComponent as SearchIcon} from "./assets/search.svg";
import { ReactComponent as HomePlaceholder} from "./assets/home-placeholder.svg";

class Home extends Component {
    constructor(props) {
        super(props);

        this.toggleSearch = this.toggleSearch.bind(this);
        this.exitSearch = this.exitSearch.bind(this);

        this.state = {searchClass: ""};
    }

    toggleSearch() {
        this.setState( { searchClass : " search" } );
    }

    exitSearch() {
        this.setState( { searchClass : "" } );
    }

    render() {
        return (
            <div className={"home-div"}>
                <HomeIcon />
                <p id="welcome-msg" className={ "center" + this.state.searchClass }>Hey Jia Chin!</p>
                <h1 id="title" className={ "center" + this.state.searchClass }>Welcome to Showtime</h1>
                <SearchBar className="" toggleSearch={this.toggleSearch}/>
                <Sidebar className={ "sidebar" + this.state.searchClass }/>
                <ModuleList className={ "module-list-holder" + this.state.searchClass }/>
                <HomePlaceholder className={ "home-placeholder center" + this.state.searchClass }  />
            </div>
        );
    }
}

export default Home;
