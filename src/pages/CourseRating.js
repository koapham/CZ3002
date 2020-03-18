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
import Select from '@material-ui/core/Select';

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

        this.state = {courseTitle: "-", courseCoordinator: "-", courseRatings: [], ratingCount: 1, averageRating: 0};




    }

    componentDidMount() {
        let course = queryString.parse(this.props.location.search).course;
        let URL = 'https://sunny-inn-269207.appspot.com/read?collectionName=courses&documentName=';
        let ratingURL = 'https://sunny-inn-269207.appspot.com/readall?collectionName=courses/' + course + '/ratings';
        let endpoint;

        endpoint = URL + course;

        localStorage.setItem("course", course);

        fetch(endpoint)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    courseTitle: json.courseName,
                    courseCoordinator: json.courseCoord
                });
            });

        fetch(ratingURL)
            .then(response => response.json())
            .then(json => {
                let count = 0;
                let rating = 0;

                this.setState({
                    courseRatings: json
                });

                for (let i = 0; i < json.length; i++) {
                    count++;
                    rating += json[i].rating;
                }

                this.setState({averageRating: rating/count});
            });
    }

    render() {
        return (
            <div className={"course-rating"}>
                <HomeIcon />
                <SearchBar className={"search"} history={this.props.history} />
                <Sidebar className={ "sidebar search"}/>
                <HomePlaceholder className={ "home-placeholder center" }  />
                <div className="courseTitle">{this.state.courseTitle}</div>
                <a href="#" className="courseContent">Content</a>
                <div className="courseCoord">
                    <div className="courseCoordinator">Course Coordinator</div>
                    <div className="courseCoordinatorContent">Dr {this.state.courseCoordinator}</div>
                </div>
                <div className="courseRating">
                    <HomePlaceholder className="courseAverageRatingSymbol" />
                    <div className="courseAverageRating">{this.state.averageRating}</div>
                </div>
                <Popup trigger=
                           {
                               <div className="courseReviewAdd">Add Rating</div>
                           } modal closeOnDocumentClick>
                    <div className="courseReviewAddSection">
                        <div className="courseReviewAddTitle">Title</div>
                        <input type="text" className="courseReviewAddTitleContent" />
                        <label for={"rating"}>Rating: </label>
                        <select id={"rating"}>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <div type="text" className="courseReviewAddDescription">Description</div>
                        <input type="text" className="courseReviewAddDescriptionContent" />
                    </div>
                </Popup>
                <hr className="lineDivision" />
                <div className="courseReviews">
                    {
                        this.state.courseRatings.map((review) =>
                        <CourseReviewCard
                            id={this.state.ratingCount}
                            description={review.description}
                            date={review.timeStamp}
                            like={review.likes}
                            rating={review.rating}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default CourseRating;
