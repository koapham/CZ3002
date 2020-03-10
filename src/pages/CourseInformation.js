import React, { Component } from 'react'
import HomeIcon from '../components/HomeIcon';
import ModuleList from '../components/ModuleList';
import Sidebar from '../components/Sidebar';
import "./Home.css";
import { ReactComponent as SearchIcon} from "./assets/search.svg";
import { ReactComponent as HomePlaceholder} from "./assets/home-placeholder.svg";

class CourseInformation extends Component {
    constructor(props) {
        super(props);

        this.toggleSearch = this.toggleSearch.bind(this);
        this.exitSearch = this.exitSearch.bind(this);

        this.state = {searchClass: " search"};
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
                <div className={ "input-holder center" + this.state.searchClass }>
                    <SearchIcon className="search-icon"/>
                    <input id="course-search" className={"center"} placeholder="Type the code or title of a course"
                           onChange={this.toggleSearch}/>
                </div>
                <Sidebar className={ "sidebar" + this.state.searchClass }/>
                <ModuleList className={ "module-list-holder" + this.state.searchClass }/>
                <HomePlaceholder className={ "home-placeholder center" + this.state.searchClass }  />
            </div>
        );
    }
}

export default CourseInformation;
