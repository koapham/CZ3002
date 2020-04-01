import React, { Component } from 'react'
import HomeIcon from '../components/HomeIcon';
import ModuleList from '../components/ModuleList';
import Sidebar from '../components/Sidebar';
import "./Home.css";
import "./CourseRating.css";
import { ReactComponent as SearchIcon} from "./assets/search.svg";
import { ReactComponent as HomePlaceholder} from "./assets/home-placeholder.svg";
import { ReactComponent as Star} from "./assets/star.svg";
import CourseReviewCard from "../components/CourseReviewCard";
import Popup from "reactjs-popup";
import queryString from 'query-string';
import SearchBar from '../components/SearchBar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

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

const SubmitButton = withStyles({
    root: {
        marginTop: '20px'
    }
})(Button);

class CourseRating extends Component {
    constructor(props) {
        super(props);

        this.handleChangeAddTitle = this.handleChangeAddTitle.bind(this);
        this.handleChangeAddRating = this.handleChangeAddRating.bind(this);
        this.handleChangeAddDescription = this.handleChangeAddDescription.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);

        this.state = {
            courseTitle: "-",
            courseCoordinator: "-",
            courseRatings: [],
            ratingCount: 1,
            averageRating: 0,
            addTitle: '',
            addRating: 0,
            addDescription: ''
        };
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
                    courseRatings: json,
                    ratingCount: json.length
                });

                console.log(json);

                for (let i = 0; i < json.length; i++) {
                    count++;
                    rating += json[i].rating;
                    
                    if(json[i].timeStamp === undefined) {
                        json[i].timeStamp = '-';
                        continue;
                    }
                    let timestamp = new Date(json[i].timeStamp);
                    json[i].timeStamp = timestamp.getDate() + " " + new Intl.DateTimeFormat('en-US', {month: 'short'}).format(timestamp) + " " + timestamp.getFullYear();
                }

                this.setState({averageRating: rating/count});
            });
    }

    handleChangeAddTitle (event) {
        this.setState({addTitle: event.target.value})
    }

    handleChangeAddRating (event) {
        this.setState({addRating: event.target.value})
    }

    handleChangeAddDescription (event) {
        this.setState({addDescription: event.target.value})
    }

    handleSubmitButton (event) {
        let course = queryString.parse(this.props.location.search).course;
        let docId = this.state.ratingCount + 1;

        let endpoint = 'https://sunny-inn-269207.appspot.com/create?collectionName=courses/' + course + '/ratings&documentName=' + docId;


        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: this.state.addTitle,
                rating: this.state.addRating,
                description: this.state.addDescription
            })
        }).then(r => console.log(r));
    }

    render() {
        return (
            <div className={"course-rating"}>
                <HomeIcon />
                <SearchBar className={"search"} history={this.props.history} />
                <Sidebar className={ "sidebar search"}/>
                <HomePlaceholder className={ "home-placeholder center" }  />
                <div className={"course-rating-holder"}>
                    <div className="courseTitle">{this.state.courseTitle}</div>
                    <div className="courseCoord">
                        <div className="courseCoordinator">Course Coordinator</div>
                        <div className="courseCoordinatorContent">{this.state.courseCoordinator}</div>
                    </div>
                    <div className="courseRating">
                        <Star className="courseAverageRatingSymbol" />
                        <div className="courseAverageRating">{this.state.averageRating}</div>
                        <Popup trigger=
                                   {
                                       <div className="courseReviewAdd">Add Rating</div>
                                   } modal closeOnDocumentClick>
                            {close => (
                                <div className="courseReviewAddSection">
                                    <p>Add Rating</p>
                                    <TextField required className="courseReviewAddTitle" label="Title" value={this.state.addTitle} defaultValue="Title" onChange={this.handleChangeAddTitle} />
                                    <div className="courseReviewAddRating">
                                        <InputLabel id="addRatingInputLabel" className="courseReviewAddRatingInputLabel">Rating</InputLabel>
                                        <Select
                                            labelId="addRatingInputLabel"
                                            className="courseReviewAddRatingContent"
                                            value={this.state.addRating}
                                            onChange={this.handleChangeAddRating}
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={6}>6</MenuItem>
                                            <MenuItem value={7}>7</MenuItem>
                                            <MenuItem value={8}>8</MenuItem>
                                            <MenuItem value={9}>9</MenuItem>
                                            <MenuItem value={10}>10</MenuItem>
                                        </Select>
                                    </div>
                                    <TextField
                                        className="courseReviewAddDescription"
                                        label="Description"
                                        multiline
                                        rowsMax="6"
                                        value={this.state.addDescription}
                                        onChange={this.handleChangeAddDescription}
                                    />
                                    <SubmitButton className="courseReviewAddSubmitButton" variant="contained" onClick={() => {this.handleSubmitButton();close();}}>Submit</SubmitButton>
                                </div>
                            )
                            }

                        </Popup>
                    </div>

                    <hr className="lineDivision" />
                    <div className="courseReviews">
                        {
                            this.state.courseRatings.map(review =>
                            <CourseReviewCard
                                title={review.title}
                                description={review.description}
                                date={review.timeStamp}
                                like={review.likes}
                                rating={review.rating}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseRating;
