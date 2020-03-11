import React, { Component } from 'react';
import HomeIcon from '../components/HomeIcon';
import SearchBar from '../components/SearchBar';
import "./AskQuestion.css";
import { ReactComponent as HomePlaceholder} from "./assets/home-placeholder.svg";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


class AskQuestion extends Component {
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
                <HomePlaceholder className="avatar"  />
                <div className="form">  
                    <div className="question-title-body">Title</div>
                    <div>Be specific and imagine you’re asking a question to another person</div>
                    <input size="175" placeholder="e.g. Is there an R function for finding the index of an element in a vector "></input>
                    <span class="br"></span>
                    <div className="question-title-body">Body</div>
                    <div>Include all the information someone would need to answer your question</div>
                    <textarea cols={175} rows={15}></textarea>
                    <div className="submit-bar">
                        <Button variant="contained" color="primary">
                            Submit
                        </Button>
                        <Button variant="contained" className="discard">
                            Discard
                        </Button>
                        <label htmlFor="icon-button-file" className="camera">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                            </IconButton>
                        </label>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default AskQuestion;