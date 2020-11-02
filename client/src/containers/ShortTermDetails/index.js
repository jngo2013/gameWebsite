import axios from 'axios';
import React, { Component } from 'react';

class ShortTermDetails extends Component {

  // for componentDidMount():
  // when the page loads perform an API call to the backend (shortTermGames)
  // the route we would like to hit is "/api/shorttermgames/:id/"
  async componentDidMount() {
    // get the id from the url (using react router)
    let gameId = this.props.match.params.id
    // add the id to the route to hit
    let databaseUrl = `/api/shorttermgames/${gameId}/`
    // create a function that will filter the database for that game with that particular id
    let response = await axios.get(databaseUrl);
    console.log(response.data);
    // 
  }

  render() {
    // let gameId = this.props.match.params.id;
    // console.log(gameId);
    return (
      <div>
        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1314&q=80" />
      </div>
    );
  }
}

export default ShortTermDetails;
