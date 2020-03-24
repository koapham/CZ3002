import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import "./ModuleList.css";

var data = {
    reviews: [
        {
            "courseName": "CZ3002",
            "url": "/courseRating"
        },
        {
            "courseName": "CZ3003",
            "url": "/courseRating"
        },
        {
            "courseName": "CZ3004",
            "url": "/courseRating"
        }
    ]
};

class ModuleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={this.props.className}>
                <ul>
                    {/*{this.state.courses.map(course =>*/}
                    {/*    <li>{course}</li>*/}
                    {/*)}*/}
                    {this.props.courseList.courses.map(course =>
                        <li className="courseName">
                            <NavLink to={"/courseRating" + '?course=' + course.courseCode}>{course.courseCode}</NavLink>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default ModuleList;