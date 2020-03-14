import React, { Component } from 'react';
import HomeIcon from '../components/HomeIcon';
import SearchBar from '../components/SearchBar';
import "./AskQuestion.css";
import { ReactComponent as HomePlaceholder} from "./assets/home-placeholder.svg";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Popup from "reactjs-popup";

class AskQuestion extends Component {
    constructor(props) {
        super(props);

        this.handleTitle = this.handleTitle.bind(this);
        this.handleBody = this.handleBody.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.discardForm = this.discardForm.bind(this);
        this.openDiscardModal = this.openDiscardModal.bind(this);
        this.closeDiscardModal = this.closeDiscardModal.bind(this);

        this.state = {title: "", body: "", open: false};
    }

    handleTitle(event) {
        this.setState({title: event.target.value});
    }

    handleBody(event) {
        this.setState({body: event.target.value});
    }

    submitForm(event) {
        console.log(this.state.title);
        console.log(this.state.body);
        // fetch('https://mywebsite.com/endpoint/', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         title: this.state.title,
        //         body: this.state.body
        //     })
        // }).then(r => console.log(r))
    }

    openDiscardModal() {
        this.setState({ open: true });
    }

    closeDiscardModal() {
        this.setState({ open: false });
    }

    discardForm(event) {
        this.props.history.push('/courseForum')
    }

    render() {
        return (
            <div className={"home-div course-forum"}>
                <HomeIcon />
                <SearchBar className="search" />
                <HomePlaceholder className="avatar"  />
                <div className="form">  
                    <div className="question-title-body">Title</div>
                    <div>Be specific and imagine you’re posing a question to another person</div>
                    <input placeholder="e.g. Is there an R function for finding the index of an element in a vector " onChange={this.handleTitle}/>
                    <span class="br" />
                    <div className="question-title-body">Body</div>
                    <div>Include all the information someone would need to answer your question</div>
                    <textarea rows={15} onChange={this.handleBody} />
                    <div className="submit-bar">
                        <Button variant="contained" color="primary" onClick={this.submitForm}>
                            Submit
                        </Button>
                        <Button variant="contained" className="discard" onClick={this.openDiscardModal}>
                            Discard
                        </Button>
                        <label htmlFor="icon-button-file" className="camera">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                            </IconButton>
                        </label>
                    </div>
                </div>

                <Popup open={this.state.open}
                       closeOnDocumentClick
                       onClose={this.closeDiscardModal} modal>
                    {close => (
                        <div className="discard-modal">
                            <a className="close-modal" onClick={close}>
                                &times;
                            </a>
                            <div className="discard-modal-header center">Discard Changes</div>
                            <div className="discard-modal-content">
                                {" "}
                                <p style={{color: "black"}} className={"center"}>Are you sure you want to discard your changes and return to the previous page?</p>
                                <div className={"submit-bar"}>
                                    <Button variant="contained" color="primary" className={"discard-modal-button"} onClick={this.discardForm}>
                                        Yes
                                    </Button>
                                    <Button variant="contained" className={"discard-modal-button"} onClick={() => { close(); }}>
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>
        );
    }
}

export default AskQuestion;