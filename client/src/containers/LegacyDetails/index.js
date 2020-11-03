import React, { Component } from 'react';
import axios from 'axios';

class LegacyDetails extends Component {
  state = {
    gameData: ""
  }

  async componentDidMount() {
    // get game id (using react router)
    let gameId = this.props.match.params.id;
    // pass the game id to axios to make the api call
    try {
      // get a response and use response data
      let response = await axios.get(`/api/legacygames/${gameId}`);
      // set gameData state to be 'response.data'
      this.setState({ gameData:response.data });
      console.log(this.state.gameData, "line 19");
    } catch (err) {
      console.log(err);
    }
  }


  render() {
    // get data from the state
    const { src, name, description, players, time, realRulesLink, drunkRulesLink } = this.state.gameData;
    return (
      <div>
        <p>{src}</p>
        <p>{name}</p>
        <p>{description}</p>
        <p>{players}</p>
        <p>{time}</p>
        <p>{realRulesLink}</p>
        <p>{drunkRulesLink}</p>
      </div>
    );
  }
}

export default LegacyDetails;