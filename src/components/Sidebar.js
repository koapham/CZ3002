import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
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
        else if(selected === 'course-eval')
            courseForum = ' active';

        this.setState( {courseInfo: courseInfo, courseForum: courseForum} );
    }


    render() {
        return (
            <div className={this.props.className}>
                <div className={"sidebar-item-holder"}>
                    {/*<a id="course-info" className={this.state.courseInfo} href={"#"} onClick={this.toggleActive}>*/}
                    {/*    <CourseInfoIcon />*/}
                    {/*    <p>Course Information</p>*/}
                    {/*</a>*/}
                    <NavLink to={"/courseRating?course=" + localStorage.getItem("course")}  id="course-info" activeClassName="sidebar-item-holder-active" aria-current="page">
                        <CourseInfoIcon />
                        <p>Course Information</p>
                    </NavLink>
                </div>

                <div className={"sidebar-item-holder"}>
                    {/*<a id="course-eval" className={this.state.courseEval} href={"#"} onClick={this.toggleActive}>*/}
                    {/*    <CourseEvalIcon />*/}
                    {/*    <p>Course Evaluation</p>*/}
                    {/*</a>*/}
                    <NavLink to="/courseForum" id="course-forum" activeClassName="sidebar-item-holder-active">
                        <CourseForumIcon />
                        <p>Course Forum</p>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Sidebar;