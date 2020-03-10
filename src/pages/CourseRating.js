import React, { Component } from 'react'
import HomeIcon from '../components/HomeIcon';
import ModuleList from '../components/ModuleList';
import Sidebar from '../components/Sidebar';
import "./Home.css";
import "./CourseRating.css";
import { ReactComponent as SearchIcon} from "./assets/search.svg";
import { ReactComponent as HomePlaceholder} from "./assets/home-placeholder.svg";
import CourseReviewCard from "../components/CourseReviewCard";

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

        this.toggleSearch = this.toggleSearch.bind(this);
        this.exitSearch = this.exitSearch.bind(this);

        this.state = {searchClass: " search"};
    }

    toggleSearch() {
        this.setState( { searchClass : " rating" } );
    }

    exitSearch() {
        this.setState( { searchClass : "" } );
    }

    render() {
        return (
            <div>
                <HomeIcon />
                <div className={ "input-holder center" + this.state.searchClass }>
                    <SearchIcon className="search-icon"/>
                    <input id="course-search" className={"center"} placeholder="Type the code or title of a course"
                           onChange={this.toggleSearch}/>
                </div>
                <Sidebar className={ "sidebar" + this.state.searchClass }/>
                <HomePlaceholder className={ "home-placeholder center" + this.state.searchClass }  />
                <div className="courseTitle">CZ3002 - Advance Software Engineering</div>
                <a href="#" className="courseContent">Content</a>
                <div className="courseCoord">
                    <div className="courseCoordinator">Course Coordinator</div>
                    <div className="courseCoordinatorContent">Dr Shen Zhiqi</div>
                </div>
                <div className="courseRating">
                    <HomePlaceholder className="courseAverageRatingSymbol" />
                    <div className="courseAverageRating">9.2</div>
                </div>
                <div className="courseReviewAdd">Add</div>
                <hr className="lineDivision" />
                <div className="courseReviews">
                    {data.reviews.map(review =>
                        <CourseReviewCard
                            id={review.id}
                            title={review.title}
                            description={review.description}
                            date={review.date}
                            like={review.like}
                            rating={review.rating}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default CourseRating;
