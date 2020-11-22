import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import EditModal from './../EditModal/';
import axios from 'axios';
import './styles.css';

class ShortTermDetails extends Component {
  state = {
    gameData: ""
  }

  // for componentDidMount():
  // when the page loads perform an API call to the backend (shortTermGames)
  // the route we would like to hit is "/api/shorttermgames/:id/"
  async componentDidMount() {
    // get the id from the url (using react router)
    let gameId = this.props.match.params.id;
    // pass the game id to axios to make the api all
    try {
      // get a response and use the response data
      let response = await axios.get(`/api/shorttermgames/${gameId}`);
      // set gameData state to be 'response.data'
      this.setState({ gameData: response.data });
      console.log(this.state.gameData, "in the shortterm details");
    } catch(err) {
      console.log(err);
    } 
  }

  render() {
    // get info from gameData state
    const { _id, description, drunkRulesLink, name, players, realRulesLink, src, time } = this.state.gameData;

    return (
      <div className="ShortTermDetails-div">
        {/* <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1314&q=80" /> */}
        <p>{description}</p>
        <p>{drunkRulesLink}</p>
        <p>{name}</p>
        <p>{players}</p>
        <p>{realRulesLink}</p>
        <p>{src}</p>
        <p>{time}</p>

        <Button variant="warning">Real Rules</Button>
        <Button variant="danger">Drunk Rules</Button>
        <EditModal 
          id={_id}
          apiRoute="/api/shorttermgames/"
        />
      </div>
    );
  }
}

export default ShortTermDetails;
