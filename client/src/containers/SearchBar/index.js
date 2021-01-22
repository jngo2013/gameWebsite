import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import './styles.css';

class SearchBox extends Component {
  state = {
    searchInput: "",
    searchResults: "",
  }
  
  handleInputChange = events => {
    this.setState({ searchInput: events.target.value });
  }

  handleSubmit = async events => {
    events.preventDefault();
    
    // get info from input box
    let searchInput = this.state.searchInput;
    
    // redirect to the search page with the input
    // https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
    window.location.href = `/search/${searchInput}`;
  }

  render() {
    return (
      <div className="searchbox">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={this.handleInputChange}
          />
          
          <Button variant="outline-warning" type="submit" className="search-btn">Search</Button>
          
        </form>
      </div>
    );
  } 
}

export default SearchBox;
