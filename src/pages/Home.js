import React, { Component } from 'react'
import HomeIcon from '../components/HomeIcon';
import ModuleList from '../components/ModuleList';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import queryString from 'query-string';
import "./Home.css";
import { ReactComponent as HomePlaceholder} from "./assets/home-placeholder.svg";
import {stringify} from "@billjs/query-string";
import {NavLink} from "react-router-dom";
import {ReactComponent as CourseInfoIcon} from "./assets/folder.svg";
import {ReactComponent as CourseForumIcon} from "./assets/edit.svg";

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
    constructor(props) {
        super(props);

        this.toggleSearch = this.toggleSearch.bind(this);
        this.exitSearch = this.exitSearch.bind(this);
        this.search = this.search.bind(this);
        this.toggleActive= this.toggleActive.bind(this);
        this.filterSearch = this.filterSearch.bind(this);

        let query = queryString.parse(this.props.location.search).query;
        let search = "";

        this.state = {searchClass: search, query: query, courseList: { courses:[] },
            matchedCourses: { courses:[] }, registeredCourses: { courses:[] }, registeredCoursesActive: '-active', searchResultsActive: ''};

        if(query !== undefined && query.length > 0) {
            search = " search";
            this.filterSearch(query);
            this.toggleActive('results');
        }
    }

    componentDidMount() {
        fetch("https://sunny-inn-269207.appspot.com/read?collectionName=users&documentName=TMc8Iiu2P9cdZBgFQdrx")
            .then(res => res.json())
            .then(
                (data) => {
                    let courses = {courses: []};
                    for (let course of data["registeredCourses "]) {
                        courses.courses.push({courseCode: course});
                    }
                    console.log(courses);
                    this.setState({
                        registeredCourses: courses,
                        courseList: courses
                    });

                    let query = queryString.parse(this.props.location.search).query;
                    if (query !== undefined && query.length > 0) {
                        this.toggleSearch();
                        this.search(query);
                    }
                },
                (error) => {
                    console.log("Unable to do request");
                }
            )

    }


    filterSearch(query) {
        let matchedCourses = { courses:[] };
        let re = new RegExp(".*" + query + ".*", "i");
        for (let course of courseList.courses) {
            if (course.courseCode.match(re)) {
                matchedCourses.courses.push({courseCode: course.courseCode});
            }
        }

        console.log(matchedCourses);

        this.setState({ matchedCourses: matchedCourses, courseList: courseList}, function() {
            this.toggleActive('results');
        });
    }

    toggleSearch() {
        this.setState( { searchClass : " search" } );
    }

    search(query) {
        this.filterSearch(query);
    }

    exitSearch() {
        this.setState( { searchClass : "" } );
    }

    toggleActive(active) {
        if(active === 'courses')
            this.setState({ registeredCoursesActive: '-active', searchResultsActive: '', courseList: this.state.registeredCourses});
        else {
            this.setState({registeredCoursesActive: '', searchResultsActive: '-active', courseList: this.state.matchedCourses});
        }
    }

    render() {
        return (
            <div className={"home-div"}>
                <HomeIcon />
                <p id="welcome-msg" className={ "center" + this.state.searchClass }>Hey Jia Chin!</p>
                <h1 id="title" className={ "center" + this.state.searchClass }>Welcome to Showtime</h1>
                <SearchBar className={ this.state.searchClass } search={this.search} toggleSearch={this.toggleSearch} query={ this.state.query } history={this.props.history}/>
                <div className={"sidebar" + this.state.searchClass}>
                    <div className={"sidebar-item-holder"}>
                        <a href={"#"} className={"sidebar-item-holder" + this.state.registeredCoursesActive} aria-current="page" onClick={()=>{this.toggleActive('courses')}} >
                            <CourseInfoIcon />
                            <p>Registered Courses</p>
                        </a>
                    </div>

                    <div className={"sidebar-item-holder"}>
                        <a href={"#"} className={"sidebar-item-holder" + this.state.searchResultsActive} onClick={()=>{this.toggleActive('results')}}>
                            <CourseForumIcon />
                            <p>Search Results</p>
                        </a>
                    </div>
                </div>
                <ModuleList className={ "module-list-holder" + this.state.searchClass } courseList={ this.state.courseList }/>
                <HomePlaceholder className={ "home-placeholder center" + this.state.searchClass }  />
            </div>
        );
    }
}

export default Home;
