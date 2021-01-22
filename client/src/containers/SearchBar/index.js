import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import './styles.css';

class SearchBox extends Component {
  state = {
    searchInput: "",
  }
  
  handleInputChange = events => {
    this.setState({ searchInput: events.target.value })
  }

  handleSubmit = async events => {
    events.preventDefault();
    
    let searchInput = this.state.searchInput;

    // send the inquiry to the backend (GET request to "/api/legacygames/search/:id")
    // search legacy games
    let response = await axios.get(`/api/legacygames/search/${searchInput}`);
    console.log(response.data);

    // search shortterm games
    let res = await axios.get(`/api/shorttermgames/search/${searchInput}`);
    console.log(res.data, "line 27 in searchbox");
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
