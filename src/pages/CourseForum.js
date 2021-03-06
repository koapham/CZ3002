import React, { Component } from 'react';
import HomeIcon from '../components/HomeIcon';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import "./CourseForum.css";
import { NavLink } from 'react-router-dom';
import { ReactComponent as HomePlaceholder} from "./assets/home-placeholder.svg";

var data = [
        {
            "vote": 12,
            "answer": 3,
            "view": 201,
            "question": "Wordpress CRON job commands",
            "datetime": "Feb 27 at 22:14 ",
            "owner": "Chipro"
        }, 
        {
            "vote": 5,
            "answer": 3,
            "view": 96,
            "question": "Building a header only framework for iOS with Bazel (to be consumed by a native iOS implementation)",
            "datetime": "Mar 3 at 7:43 ",
            "owner": "Khoa005"
        },
        {
            "vote": -1,
            "answer": 2,
            "view": 150,
            "question": "How to open Minecraft character skin in Xcode?",
            "datetime": "20 hours ago ",
            "owner": "Daniel"
        },
        {
            "vote": 0,
            "answer": 0,
            "view": 54,
            "question": "When is CUDA/OpenGL interop thread safe?",
            "datetime": "15 hours ago ",
            "owner": "ATM"
        }
    ];

class CourseForum extends Component {
    constructor(props) {
        super(props);

        this.toggleSearch = this.toggleSearch.bind(this);

        this.state = {searchClass: "", threads: []};
    }

    componentDidMount() {
        let course = localStorage.getItem("course");
        let URL = 'https://sunny-inn-269207.appspot.com/readall?collectionName=courses/' + course + '/threads';

        fetch(URL)
            .then(response => response.json())
            .then(json => {
                // this.setState({
                //     courseTitle: json.courseName,
                //     courseCoordinator: json.courseCoord
                // });
                console.log(json);

                for(let i = 0; i < json.length; i++) {
                    let timestamp = new Date(json[i].timeStamp);

                    json[i].timeStamp = timestamp.getDate() + " " + new Intl.DateTimeFormat('en-US', {month: 'short'}).format(timestamp) + " " + timestamp.getFullYear();
                    json[i].answer = 0;
                }

                this.setState({"threads": json});
            });
    }

    toggleSearch() {
        this.setState( { searchClass : " search" } );
    }

    renderForum(){
        const items = this.state.threads.map((item)=>{
            var color;
            if(item.answer>=3) color = " full-green";
            else if(item.answer>0) color = " border-green";
            else color = "";
            return (
                <div>
                <Divider/>
                <ListItem className="list">
                    <div className="vote text">
                        {item.votes} <span class="br"></span> {"votes"}
                    </div>
                    <div className={"answer text"+color}>
                        {item.answer} <span class="br"></span> {"answers"}
                    </div>
                    <div className="view text">
                        {item.views} <span class="br"></span> {"views"}
                    </div>
                    <NavLink to={"/question" + '?title=' + item.title}>
                        <div className="question big">
                            {item.title}
                        </div>
                    </NavLink>
                    <div className="info">
                        <span className="owner">{item.username}</span>
                        {" posted on "+item.timeStamp}
                    </div>
                </ListItem>
                </div>
            );  
        });
        return (<List className="forum">
                    {items}
               </List>);
    }

    render() {
        return (
            <div className={"home-div course-forum"}>
                <HomeIcon />
                <SearchBar className="search" history={this.props.history} />
                <Sidebar className = {"sidebar search"}/>
                <HomePlaceholder className = "home-placeholder search"/>
                <span className="top-question">Top Questions</span>
                <NavLink to="/askQuestion">
                    <div className="ask-question">Ask Question</div>
                </NavLink>
                
                {this.renderForum()}
            </div>
        );
    }
}

export default CourseForum;