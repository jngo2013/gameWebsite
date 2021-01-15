import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import './styles.css';

class SearchBox extends Component {
  state = {
    searchInput: "",
  }
  
  handleInputChange = events => {
    this.setState({searchInput:events.target.value})
  }

  handleSubmit = events => {
    events.preventDefault();
    alert(this.state.searchInput)
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
          
          <Button variant="outline-warning" type="submit" className="search-btn"><span>Search</span></Button>
        </form>
      </div>
    );
  } 
}
export default SearchBox;
