import React, { Component } from 'react';
import { ReactComponent as SearchIcon} from "../pages/assets/search.svg";
import "./SearchBar.css";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.toggleSearch = this.toggleSearch.bind(this);

        this.state = {searchClass: ""};
    }
    toggleSearch() {
        this.setState( { searchClass : " search" } );

        if(this.props.toggleSearch !== undefined)
            this.props.toggleSearch();
    }
    render() {
        return (
            <div className={ "input-holder " + this.props.className + " " + this.state.searchClass}>
                    <SearchIcon className={"search-icon"}/>
                    <input id="course-search" className={"center"} placeholder="Type the code or title of a course"
                           onChange={this.toggleSearch}/>
            </div>
        );
    }
}

export default SearchBar;