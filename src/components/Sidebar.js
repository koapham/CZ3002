import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import { ReactComponent as CourseInfoIcon} from "../pages/assets/folder.svg";
import { ReactComponent as CourseEvalIcon} from "../pages/assets/edit.svg";

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.toggleActive = this.toggleActive.bind(this);

        this.state = {courseInfo: " active", courseEval: ""};
    }

    toggleActive(e) {
        let selected = e.currentTarget.id;
        let courseInfo = '';
        let courseEval = '';
        e.preventDefault();

        if(selected === 'course-info')
            courseInfo = ' active';
        else if(selected === 'course-eval')
            courseEval = ' active';

        this.setState( {courseInfo: courseInfo, courseEval: courseEval} );
    }


    render() {
        return (
            <div className={this.props.className}>
                <div className={"sidebar-item-holder"}>
                    {/*<a id="course-info" className={this.state.courseInfo} href={"#"} onClick={this.toggleActive}>*/}
                    {/*    <CourseInfoIcon />*/}
                    {/*    <p>Course Information</p>*/}
                    {/*</a>*/}
                    <Link to="/course">
                        <CourseInfoIcon />
                        <p>Course Information</p>
                    </Link>
                </div>

                <div className={"sidebar-item-holder"}>
                    <a id="course-eval" className={this.state.courseEval} href={"#"} onClick={this.toggleActive}>
                        <CourseEvalIcon />
                        <p>Course Evaluation</p>
                    </a>
                </div>
            </div>
        );
    }
}

export default Sidebar;