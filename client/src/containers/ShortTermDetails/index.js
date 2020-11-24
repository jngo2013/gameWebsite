import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import EditModal from './../EditModal/';
import axios from 'axios';
import './styles.css';

class ShortTermDetails extends Component {
  state = {
    gameData: "",
    redirect: false,
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

  // function for the child component to pass data to this component so it can rerender
  passDataToParent = (childData) => {
    this.setState({ gameData: childData });
    console.log(this.state.gameData, "line 33");
  }

  // function for the child component to get the new route so the parent can redirect
  redirect = (childData) => {
    this.setState({ redirect: childData });
  }

  render() {
    // get info from gameData state
    const { _id, description, drunkRulesLink, title, players, realRulesLink, src, time } = this.state.gameData;

    return (

      <div>
        {
          // if this.state.redirect is "true"...
          this.state.redirect
          ?
          // ...then go to "/ShortTermGames/" route...
          this.props.history.push("/ShortTermGames")
          :
          // otherwise, display the game info
          <div className="ShortTermDetails-div">
            
            <p>Name: {title}</p>
            <p>Description: {description}</p>
            <p>Players: {players}</p>
            <p>Time: {time}</p>
            {/* <p>{drunkRulesLink}</p> */}
            {/* <p>{realRulesLink}</p> */}
            {/* <p>{src}</p> */}

            <Button variant="warning">Real Rules</Button>
            <Button variant="danger">Drunk Rules</Button>
            <EditModal 
              id={_id}
              passDataToParent={this.passDataToParent}
              redirect={this.redirect}
              apiRoute="/api/shorttermgames/"
            />
          </div>
        }
      </div>




      
    );
  }
}

export default ShortTermDetails;
