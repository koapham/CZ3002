import React, { Component } from 'react';
import HomeIcon from '../components/HomeIcon';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import "./CourseForum.css";
import { ReactComponent as HomePlaceholder} from "./assets/home-placeholder.svg";

class CourseForum extends Component {
    constructor(props) {
        super(props);

        this.toggleSearch = this.toggleSearch.bind(this);

        this.state = {searchClass: ""};
    } 
    
    toggleSearch() {
        this.setState( { searchClass : " search" } );
    }

    render() {
        return (
            <div className={"home-div course-forum"}>
                <HomeIcon />
                <SearchBar className="search" />
                <Sidebar className = {"sidebar search"}/>
                <HomePlaceholder className = "home-placeholder search"/>
                <List className="forum">
                    <Divider/>
                    <ListItem className="list" button>
                        <div className="vote text">
                            {"12"}
                            <span class="br"></span>  
                            {"votes"}
                        </div>
                        <div className="answer text">
                            {"3"}
                            <span class="br"></span>  
                            {"answers"}
                        </div>
                        <div className="view text">
                            {"201"}
                            <span class="br"></span>  
                            {"views"}
                        </div>
                        <div className="question">
                            {"Wordpress CRON job commands"}
                        </div>
                    </ListItem>

                    <Divider/>
                    <ListItem className="list" button>
                        <div className="vote text">
                            {"5"}
                            <span class="br"></span>  
                            {"votes"}
                        </div>
                        <div className="answer text">
                            {"3"}
                            <span class="br"></span>  
                            {"answers"}
                        </div>
                        <div className="view text">
                            {"96"}
                            <span class="br"></span>  
                            {"views"}
                        </div>
                        <div className="question">
                            {"Building a header only framework for iOS with Bazel (to be consumed by a native iOS implementation)"}
                        </div>
                    </ListItem>

                    <Divider/>
                    <ListItem className="list" button>
                        <div className="vote text">
                            {"-1"}
                            <span class="br"></span>  
                            {"votes"}
                        </div>
                        <div className="answer text">
                            {"2"}
                            <span class="br"></span>  
                            {"answers"}
                        </div>
                        <div className="view text">
                            {"150"}
                            <span class="br"></span>  
                            {"views"}
                        </div>
                        <div className="question">
                            {"How to open Minecraft character skin in Xcode?"}
                        </div>
                    </ListItem>

                    <Divider/>
                    <ListItem className="list" button>
                    <div className="vote text">
                            {"0"}
                            <span class="br"></span>  
                            {"votes"}
                        </div>
                        <div className="answer text">
                            {"0"}
                            <span class="br"></span>  
                            {"answers"}
                        </div>
                        <div className="view text">
                            {"54"}
                            <span class="br"></span>  
                            {"views"}
                        </div>
                        <div className="question">
                            {"When is CUDA/OpenGL interop thread safe?"}
                        </div>
                    </ListItem>
                </List>
                {/* <div className="forum">
                    <Divider/>
                    <div className="list">
                        <div className="vote text">
                            {"12"}
                            <span class="br"></span>  
                            {"votes"}
                        </div>
                        <div className="answer text">
                            {"3"}
                            <span class="br"></span>  
                            {"answers"}
                        </div>
                        <div className="view text">
                            {"201"}
                            <span class="br"></span>  
                            {"views"}
                        </div>
                        <div className="question">
                            {"Wordpress CRON job commands"}
                        </div>
                    </div>

                    <Divider/>
                    <div className="list">
                        <div className="vote text">
                            {"5"}
                            <span class="br"></span>  
                            {"votes"}
                        </div>
                        <div className="answer text">
                            {"3"}
                            <span class="br"></span>  
                            {"answers"}
                        </div>
                        <div className="view text">
                            {"96"}
                            <span class="br"></span>  
                            {"views"}
                        </div>
                        <div className="question">
                            {"Building a header only framework for iOS with Bazel (to be consumed by a native iOS implementation)"}
                        </div>
                    </div>

                    <Divider/>
                    <div className="list">
                        <div className="vote text">
                            {"-1"}
                            <span class="br"></span>  
                            {"votes"}
                        </div>
                        <div className="answer text">
                            {"2"}
                            <span class="br"></span>  
                            {"answers"}
                        </div>
                        <div className="view text">
                            {"150"}
                            <span class="br"></span>  
                            {"views"}
                        </div>
                        <div className="question">
                            {"How to open Minecraft character skin in Xcode?"}
                        </div>
                    </div>

                    <Divider/>
                    <div className="list">
                        <div className="vote text">
                            {"0"}
                            <span class="br"></span>  
                            {"votes"}
                        </div>
                        <div className="answer text">
                            {"0"}
                            <span class="br"></span>  
                            {"answers"}
                        </div>
                        <div className="view text">
                            {"54"}
                            <span class="br"></span>  
                            {"views"}
                        </div>
                        <div className="question">
                            {"When is CUDA/OpenGL interop thread safe?"}
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default CourseForum;