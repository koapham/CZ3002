import React, { Component } from 'react';
import './CourseReviewCard.css';
import Popup from 'reactjs-popup';

import { ReactComponent as SearchIcon} from "../pages/assets/search.svg";
import { ReactComponent as HomePlaceholder} from "../pages/assets/home-placeholder.svg";

class CourseReviewCard extends Component {
    constructor(props) {
        super(props);

        this.onLikeClick = this.onLikeClick.bind(this);

        this.state = {
            like: false
        }
    }

    onLikeClick() {
        if (this.state.like === true) {
            this.setState({like : false})
        } else {
            this.setState({like: true})
        }
    }

    render() {
        this.evenOrOdd_1 = isEven(this.props.id);
        return (
            <Popup trigger=
                       {
                           <div className={this.evenOrOdd_1 ? 'course-review-card-section-even' : 'course-review-card-section-odd'}>
                               <SearchIcon className="course-review-card-profile-picture" />
                               {/*<img className={"course-review-card-profile-picture"} src="home-icon.svg"  alt="Profile Picture" />*/}
                               <div className="course-review-card-review">{this.props.description}</div>
                               <div className="course-review-card-date">{this.props.date}</div>
                               <HomePlaceholder className="course-review-card-like-symbol" />
                               {/*<img className="course-review-card-like-symbol" src="home-icon.svg" alt="Like Symbol" />*/}
                               <div className="course-review-card-like-number">{this.props.like}</div>
                               <div className="course-review-card-rating-number">{this.props.rating}</div>
                               {/*<img className="course-review-card-rating-symbol" src="home-icon.svg" alt="Rating Symbol" />*/}
                               <HomePlaceholder className="course-review-card-rating-symbol" />
                           </div>
                       } modal closeOnDocumentClick>
                <div className="course-review-card-detail">
                    <div>
                        <div className="course-review-card-detail-title">{this.props.title}</div>
                        <HomePlaceholder className="course-review-card-detail-rating-symbol" />
                        <div className="course-review-card-detail-rating">{this.props.rating}</div>
                        <div className="course-review-card-detail-like" onClick={this.onLikeClick}>
                            {this.state.like ? <SearchIcon className="course-review-card-detail-like-symbol"/> : <HomePlaceholder className="course-review-card-detail-like-symbol" />}
                    </div>
                    </div>
                    <div className="course-review-card-detail-date">{this.props.date}</div>
                    <div className="course-review-card-detail-description">{this.props.description}</div>
                </div>
            </Popup>
        )
    }
}

function isEven(n) {
    return (n % 2) === 0;
}

export default CourseReviewCard;
