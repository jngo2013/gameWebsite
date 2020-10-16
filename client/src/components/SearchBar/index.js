import React, { Component } from "react";



class SearchBox extends Component {
  state = {
    searchInput: "",
  }
  
  handleInputChange = events => {
    this.setState({searchInput:events.target.value})
  }
  render()
  {
    return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={this.handleInputChange}
        />
      </form>
    </div>
  );
}
  
}
export default SearchBox;
