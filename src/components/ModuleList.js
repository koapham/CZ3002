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
        fetch("https://909d2921.ngrok.io/read/users/TMc8Iiu2P9cdZBgFQdrx")
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        courses: data["registeredCourses "]
                    });
                },
                (error) => {
                    console.log("Unable to do request");
                }
            )
    }

    render() {
        return (
            <div className={this.props.className}>
                <ul>
                    {/*{this.state.courses.map(course =>*/}
                    {/*    <li>{course}</li>*/}
                    {/*)}*/}
                    {data.reviews.map(course =>
                        <li className="courseName">
                            <NavLink to={course.url + '?course=' + course.courseName}>{course.courseName}</NavLink>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default ModuleList;