import React, { Component } from 'react';
import HomeIcon from '../components/HomeIcon';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Question.css";
import { NavLink } from 'react-router-dom';
import { ReactComponent as HomePlaceholder} from "./assets/home-placeholder.svg";
import { ReactComponent as Vote} from "./assets/rectangle.svg";
import queryString from 'query-string';

let testAns = {
    "eachAnswer": [
        {
            "content": "That image is called a \"texture\".\n"
                + "That texture is mapped onto 3d model of a lion resulting a \"lion character\""
                + "In other word, your \"lion character\" = texture + 3D model of a lion.\n"
                + "Every character skin you're using xcode to open is just the \"texture image\" as mentioned by @GeneCode\"" ,
            "vote": 5,
            "datetime": "15 hours ago",
            "owner": "Dog"
        },
        {
            "content": "Take a look at this: https://github.com/games647/Minecraft-Skin-Renderer",
            "vote": 0,
            "datetime": "2 hours ago",
            "owner": "Cat"
        }
    ]
};

var data = [
    {
        "title": "How to open Minecraft character skin in Xcode?",
        "datetime": "20 hours ago ",
        "owner": "Daniel",
        "body": "I have a Minecraft skin of a Lion and I want to edit it.\n"
                + "When I add this image in UIImageView, it display same, it is not showing the lion character.\n"
                + "It has size of 64*64.\n"
                + "So how can we display Minecraft images inside our app?",
        "vote": -1,
        "answer": 2,
        "eachAnswer": [
            {
                "content": "That image is called a \"texture\".\n"
                            + "That texture is mapped onto 3d model of a lion resulting a \"lion character\""
                            + "In other word, your \"lion character\" = texture + 3D model of a lion.\n"
                            + "Every character skin you're using xcode to open is just the \"texture image\" as mentioned by @GeneCode\"" ,
                "vote": 5,
                "datetime": "15 hours ago",
                "owner": "Dog" 
            },
            {
                "content": "Take a look at this: https://github.com/games647/Minecraft-Skin-Renderer",
                "vote": 0,
                "datetime": "2 hours ago",
                "owner": "Cat" 
            }
        ]
    },
    {
        "title": "Wordpress CRON job commands",
        "datetime": "20 hours ago ",
        "owner": "Daniel",
        "body": "I have a Minecraft skin of a Lion and I want to edit it.\n"
                + "When I add this image in UIImageView, it display same, it is not showing the lion character.\n"
                + "It has size of 64*64.\n"
                + "So how can we display Minecraft images inside our app?",
        "vote": -1,
        "answer": 2,
        "eachAnswer": [
            {
                "content": "That image is called a \"texture\".\n"
                            + "That texture is mapped onto 3d model of a lion resulting a \"lion character\""
                            + "In other word, your \"lion character\" = texture + 3D model of a lion.\n"
                            + "Every character skin you're using xcode to open is just the \"texture image\" as mentioned by @GeneCode\"" ,
                "vote": 5,
                "datetime": "15 hours ago",
                "owner": "Dog" 
            },
            {
                "content": "Take a look at this: https://github.com/games647/Minecraft-Skin-Renderer",
                "vote": 0,
                "datetime": "2 hours ago",
                "owner": "Cat" 
            }
        ]
    }
];

const styles = {
    button: {
        width: 30, height: 30,
        padding: 0,
    },
    icon: {
        width: 30, height: 30,
    },
};
class Question extends Component {
    constructor(props) {
        super(props);

        this.handleAnswer = this.handleAnswer.bind(this);
        this.postAnswer = this.postAnswer.bind(this);

        let title = queryString.parse(this.props.location.search).title;

        this.state = {answer: "", count: 0, title: title, body: '', timeStamp: '', owner: '', num_of_answer: 0};
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
                    if(json[i].title === this.state.title) {
                        let timestamp = new Date(json[i].timeStamp);

                        json[i].timeStamp = timestamp.getDate() + " " + new Intl.DateTimeFormat('en-US', {month: 'short'}).format(timestamp) + " " + timestamp.getFullYear();

                        this.setState({
                            title: json[i].title,
                            body: json[i].body,
                            timeStamp: json[i].timeStamp,
                            owner: json[i].owner

                        });
                        break;
                    }
                }

                this.setState({"threads": json});
            });
    }

    handleAnswer(event) {
        this.setState({answer: event.target.value});
    }

    renderAnswer(answers){
        const items = answers.map((ans)=>{
            return (
            <div>
                <div className="vote-up-down">
                <IconButton
                    style={styles.button} 
                    iconStyle={styles.icon}
                    className="vote-up"
                    onClick={() => {
                        // this.setState({ count: this.state.count+1});
                    }}
                >   
                    <ExpandLessIcon fontSize="large" color="primary" />
                </IconButton>
                            <div className="each-question-rating">{ans.vote}</div>
                <IconButton
                    style={styles.button} 
                    iconStyle={styles.icon}
                    className="vote-down"
                    aria-label="increase"
                    onClick={() => {
                        // this.setState({ count: this.state.count-1});
                    }}
                >   
                    <ExpandMoreIcon fontSize="large" color="primary"/>
                </IconButton>
                </div>
                <div className="each-question-body">{ans.content}</div>
                <div className="each-question-info">
                        {"posted "+ans.datetime+" "}
                        <span className="owner">{ans.owner}</span>
                </div>
                <Divider/>
            </div>
            );
            
        });
        return <div>{items}</div>;
    }

    renderQuestion(){
        const question = data.filter((el)=>{
            return !(el.title.replace(/\s+/g, '-').localeCompare(this.state.title));
        }) 
        //const items = question.map((item)=>{
            return (
                <div className="each-question-frame">   
                    <div className="each-question-title">{this.state.title}</div>
                    <div className="each-question-info-owner">
                        {"posted "+this.state.timeStamp}
                        <span className="owner">{this.state.owner}</span>
                    </div>
                    <Divider/>
                    <div className="vote-up-down">
                        <IconButton
                            style={styles.button} 
                            iconStyle={styles.icon}
                            className="vote-up"
                            aria-label="increase"
                            onClick={() => {
                                this.setState({ count: this.state.count+1});
                            }}
                        >   
                            <ExpandLessIcon fontSize="large" color="primary" />
                        </IconButton>

                        <div className="each-question-rating">{this.state.count}</div>

                        <IconButton
                            style={styles.button} 
                            iconStyle={styles.icon}
                            className="vote-down"
                            aria-label="increase"
                            onClick={() => {
                                this.setState({ count: this.state.count-1});
                            }}
                        >   
                            <ExpandMoreIcon fontSize="large" color="primary"/>
                        </IconButton>
                    </div>
                    <div className="each-question-body">{this.state.body}</div>
                    <span className="br"></span>
                    <div className="no-of-answer">{this.state.num_of_answer+" Answer(s)"}</div>
                    <Divider/>
                    {this.renderAnswer(testAns.eachAnswer)}
                    <Divider/>
                    <div>
                        <div className="your-answer">Your Answer</div>
                        <textarea rows={15} className = "type-answer" onChange={this.handleAnswer}/>
                    </div>
                    <Button onClick={this.postAnswer} variant="contained" color="primary">
                        Post Your Answer
                    </Button>
                </div>
                
            );
        //});
        //return <div>{items}</div>;
    }

    getNewID() {
        //This should return the new index for the new reply
        //E.g. First reply to a thread is documentName 1, second reply will be 2 etc
    }

    postAnswer() {
        console.log(this.state.answer);
        console.log(localStorage.getItem('username'));

        // fetch('https://sunny-inn-269207.appspot.com/create?collectionName=courses/'+localStorage.getItem("course")+'/threads/'+localStorage.getItem("thread")+'/reply&documentName=' + this.getNewID(), {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         content: this.state.answer,
        //         username: localStorage.getItem('username'),
        //         votes: 0
        //     })
        // }).then(r => console.log(r))
    }

    createUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    render(){
        return (
            <div className="home-div each-question">
                <HomeIcon />
                <SearchBar className="search" history={this.props.history} />
                <NavLink to="/askQuestion">
                    <div className="ask-question">Ask Question</div>
                </NavLink>
                {this.renderQuestion()}
            </div>
        );
    }
}

export default Question;

