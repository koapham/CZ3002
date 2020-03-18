import React, { Component } from 'react'
import HomeIcon from '../components/HomeIcon';
import ModuleList from '../components/ModuleList';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import queryString from 'query-string';
import "./Home.css";
import { ReactComponent as SearchIcon} from "./assets/search.svg";
import { ReactComponent as HomePlaceholder} from "./assets/home-placeholder.svg";
import {stringify} from "@billjs/query-string";

let courseList = {
    courses: [
        {
            "courseCode": "CZ1003"
        },
        {
            "courseCode": "CZ3002"
        },
        {
            "courseCode": "CZ3003"
        },
        {
            "courseCode": "CZ3004"
        }
    ]
};


class Home extends Component {
    matchedCourses = { courses:[] };

    constructor(props) {
        super(props);

        this.toggleSearch = this.toggleSearch.bind(this);
        this.exitSearch = this.exitSearch.bind(this);

        let query = queryString.parse(this.props.location.search).query;
        let search = "";

        if(query !== undefined && query.length > 0) {
            search = " search";
            this.filterSearch(query);
        }

        this.state = {searchClass: search, query: query};
    }

    filterSearch(query) {
        this.matchedCourses = { courses:[] };
        let re = new RegExp(".*" + query + ".*", "i");

        for (let course of courseList.courses) {
            console.log(re.test(course.courseCode));
            if (course.courseCode.match(re)) {
                this.matchedCourses.courses.push({courseCode: course.courseCode});
            }
        }
    }

    toggleSearch(query) {
        this.setState( { searchClass : " search" } );
        this.filterSearch(query);
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
                <SearchBar className={ this.state.searchClass } toggleSearch={this.toggleSearch} query={ this.state.query } history={this.props.history}/>
                <ModuleList className={ "module-list-holder" + this.state.searchClass } courseList={ this.matchedCourses }/>
                <HomePlaceholder className={ "home-placeholder center" + this.state.searchClass }  />
            </div>
        );
    }
}

export default Home;
