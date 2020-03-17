import React, { Component } from 'react';
import { ReactComponent as SearchIcon} from "../pages/assets/search.svg";
import "./SearchBar.css";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.toggleSearch = this.toggleSearch.bind(this);
        this.updateQuery = this.updateQuery.bind(this);
        this.checkEnter = this.checkEnter.bind(this);

        this.state = {searchClass: "", query: this.props.query};
    }

    updateQuery(event) {
        this.setState({query: event.target.value});
    }

    toggleSearch(event) {
        this.setState( { searchClass : " search", query: event.target.value } );

        if(this.props.toggleSearch !== undefined)
            this.props.toggleSearch(event.target.value);
    }

    checkEnter(event) {
        if(event.key === 'Enter') {
            console.log("enter");
            this.props.history.push('/home?query=' +  this.state.query);
        }
    }

    render() {
        return (
            <div className={ "input-holder " + this.props.className + " " + this.state.searchClass}>
                    <SearchIcon className={"search-icon"}/>
                    <input id="course-search" className={"center"} placeholder="Type the code or title of a course"
                           onChange={this.toggleSearch} onKeyPress={this.checkEnter} value={this.state.query}/>
            </div>
        );
    }
}

export default SearchBar;