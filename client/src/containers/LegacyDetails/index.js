import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import EditModal from '../EditModal';
import axios from 'axios';
import './styles.css';

class LegacyDetails extends Component {
  state = {
    gameData: "",
    redirect: false
  }

  async componentDidMount() {
    // get game id from url (using react router)
    let gameId = this.props.match.params.id;
    // pass the game id to axios to make the api call
    try {
      // get a response and use response data
      let response = await axios.get(`/api/legacygames/${gameId}`);
      // set gameData state to be 'response.data'
      this.setState({ gameData: response.data });
      console.log(this.state.gameData, "response data line 21!!");
    } catch (err) {
      console.log(err);
    }
  }

  // function for the child component to pass data to this component so it can rerender
  passDataToParent = (childData) => {
    this.setState({ gameData: childData });
  }

  // function for the child component to get the new route so the parent can redirect
  redirect = (childData) => {
    this.setState({ redirect: childData });
  }

  render() {
    // get data from the state
    const { _id, src, title, description, players, time, realRules, drunkRules } = this.state.gameData;
    
    return (

      <div>
        {
          // if this.state.redirect is "true"...
          this.state.redirect
          ? 
          // ...then go to "/LegacyGames/" route...
          this.props.history.push("/LegacyGames/")
          :
          // otherwise, display the game info
          <div className="LegacyGames-div">

            <p>Name: {title}</p>
            <p>Description: {description}</p>
            <p>Number of Players: {players}</p>
            <p>Time: {time}</p>
            <p>Drunk Rules: {drunkRules}</p>
            <a href={realRules} target="_blank" rel="noopener noreferrer"><Button variant="warning">Real Rules</Button></a>
            <EditModal
              id={_id}
              passDataToParent={this.passDataToParent}
              redirect={this.redirect}
              apiRoute="/api/legacygames/"
            />

          </div>

        }
        
      </div>

    );
  }
}

export default LegacyDetails;