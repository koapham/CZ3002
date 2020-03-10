import React, { Component } from 'react'
import "./Sidebar.css";
import { ReactComponent as CourseInfoIcon} from "../pages/assets/folder.svg";
import { ReactComponent as CourseForumIcon} from "../pages/assets/edit.svg";

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.toggleActive = this.toggleActive.bind(this);

        this.state = {courseInfo: " active", courseForum: ""};
    }

    toggleActive(e) {
        let selected = e.currentTarget.id;
        let courseInfo = '';
        let courseForum = '';
        e.preventDefault();

        if(selected === 'course-info')
            courseInfo = ' active';
        else if(selected === 'course-forum')
        courseForum = ' active';

        this.setState( {courseInfo: courseInfo, courseForum: courseForum} );
    }


    render() {
        return (
            <div className={this.props.className}>
                <div className={"sidebar-item-holder"}>
                    <a id="course-info" className={this.state.courseInfo} href={"#"} onClick={this.toggleActive}>
                        <CourseInfoIcon />
                        <p>Course Information</p>
                    </a>
                </div>

                <div className={"sidebar-item-holder"}>
                    <a id="course-forum" className={this.state.courseForum} href={"#"} onClick={this.toggleActive}>
                        <CourseForumIcon />
                        <p>Course Forum</p>
                    </a>
                </div>
            </div>
        );
    }
}

export default Sidebar;