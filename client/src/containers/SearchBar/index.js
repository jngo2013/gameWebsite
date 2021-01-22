import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import axios from 'axios';
import './styles.css';

class SearchBox extends Component {
  state = {
    searchInput: "",
    searchGameData: [],
  }
  
  handleInputChange = events => {
    this.setState({ searchInput: events.target.value })
  }

  handleSubmit = async events => {
    events.preventDefault();
    
    let searchInput = this.state.searchInput;

    // send the inquiry to the backend (GET request to "/api/legacygames/search/:id")
    // search legacy games


    // search shortterm games
    
    // try{
    //   let res = await axios.get(`/api/shorttermgames/search/${searchInput}`);
    //   this.setState ({ searchGameData : res.data });
    //   console.log(res.data, "line 27 in searchbox");
    // } catch (err){
    //   console.log(err, 'line 16')
    // }
    
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
          
          <Button variant="outline-warning" type="submit" className="search-btn"><Link to ={`/search/${this.state.searchInput}`}><span>Search</span></Link></Button>
        </form>
      </div>
    );
  } 
}
export default SearchBox;
