import React, { Component } from 'react';
import axios from 'axios';

class ShortTermDetails extends Component {
  state = {
    gameData: ""
  }

  // for componentDidMount():
  // when the page loads perform an API call to the backend (shortTermGames)
  // the route we would like to hit is "/api/shorttermgames/:id/"
  async componentDidMount() {
    // get the id from the url (using react router)
    let gameId = this.props.match.params.id
    // add the id to the route to hit
    let databaseUrl = `/api/shorttermgames/${gameId}/`
    // create a function that will filter the database for that game with that particular id (on the backend)
    // get data (response) from the API call to the backend
    let response = await axios.get(databaseUrl);
    // change state to be the data
    this.setState({ gameData:response.data });
  }

  render() {
    // get info from gameData state
    const { description, drunkRulesLink, name, players, realRulesLink, src, time } = this.state.gameData;

    return (
      <div>
        {/* <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1314&q=80" /> */}
        <p>{description}</p>
        <p>{drunkRulesLink}</p>
        <p>{name}</p>
        <p>{players}</p>
        <p>{realRulesLink}</p>
        <p>{src}</p>
        <p>{time}</p>
        
      </div>
    );
  }
}

export default ShortTermDetails;
