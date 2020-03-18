import React, { Component } from 'react'
import HomeIcon from '../components/HomeIcon';
import ModuleList from '../components/ModuleList';
import Sidebar from '../components/Sidebar';
import "./Home.css";
import "./CourseRating.css";
import { ReactComponent as SearchIcon} from "./assets/search.svg";
import { ReactComponent as HomePlaceholder} from "./assets/home-placeholder.svg";
import CourseReviewCard from "../components/CourseReviewCard";
import Popup from "reactjs-popup";
import queryString from 'query-string';
import Button from '@material-ui/core/Button';
import SearchBar from '../components/SearchBar';


var data = {
    "reviews": [
        {
            "id": "1",
            "title": "Nice review",
            "description": "description",
            "date": "10 March 2020",
            "like": "6000",
            "rating": "9"
        },
        {
            "id": "2",
            "title": "Nice La",
            "description": "description",
            "date": "11 March 2020",
            "like": "5000",
            "rating": "9.2"
        },
        {
            "id": "3",
            "title": "Nice review",
            "description": "description",
            "date": "10 March 2020",
            "like": "6500",
            "rating": "9.1"
        },
    ]
};

class CourseRating extends Component {
    constructor(props) {
        super(props);

        this.state = {courseTitle: "-", courseCoordinator: "-", courseRatings: ''};

        let course = queryString.parse(this.props.location.search).course;
        let URL = 'https://sunny-inn-269207.appspot.com/read?collectionName=courses&documentName=';
        let ratingURL = 'https://sunny-inn-269207.appspot.com/readall?collectionName=courses/' + course + '/ratings';
        let endpoint, id;

        if(course === 'CZ3002')
            id = '/7tTsljHJLz2pLi72letq';
        else if(course === 'CZ3003')
            id='/k3tsiInXswPVBkmpadVF';
        else if(course === 'CZ3004')
            id = '/WotB0wHrIAaGwNXqefOF';

        endpoint = URL + course;

        fetch(endpoint)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    courseTitle: json.courseName,
                    courseCoordinator: json.courseCoord
                });
            });

        fetch(ratingURL)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    courseRatings: json
                });
            });
    }

    render() {
        return (
            <div className={"course-rating"}>
                <HomeIcon />
                <SearchBar className={"search"} history={this.props.history} />
                <Sidebar className={ "sidebar"}/>
                <HomePlaceholder className={ "home-placeholder center" }  />
                <div className="courseTitle">{this.state.courseTitle}</div>
                <a href="#" className="courseContent">Content</a>
                <div className="courseCoord">
                    <div className="courseCoordinator">Course Coordinator</div>
                    <div className="courseCoordinatorContent">Dr {this.state.courseCoordinator}</div>
                </div>
                <div className="courseRating">
                    <HomePlaceholder className="courseAverageRatingSymbol" />
                    <div className="courseAverageRating">9.2</div>
                </div>
                <Popup trigger=
                           {
                               <div className="courseReviewAdd">Add Rating</div>
                           } modal closeOnDocumentClick>
                    <div className="courseReviewAddSection">
                        <div className="courseReviewAddTitle">Title</div>
                        <input type="text" className="courseReviewAddTitleContent" />
                        <div className="courseReviewAddRating">Rating</div>
                        <input type="number" step="any" className="courseReviewAddRatingContent" />
                        <div type="text" className="courseReviewAddDescription">Description</div>
                        <input type="text" className="courseReviewAddDescriptionContent" />
                    </div>
                </Popup>
                <hr className="lineDivision" />
                <div className="courseReviews">
                    
                </div>
            </div>
        );
    }
}

export default CourseRating;
