import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import EditModal from './../../components/EditModal';
import axios from 'axios';
import './styles.css';

class LegacyDetails extends Component {
  state = {
    gameData: "",
  }

  async componentDidMount() {
    // get game id (using react router)
    let gameId = this.props.match.params.id;
    // pass the game id to axios to make the api call
    try {
      // get a response and use response data
      let response = await axios.get(`/api/legacygames/${gameId}`);
      // set gameData state to be 'response.data'
      this.setState({ gameData: response.data });
      console.log(this.state.gameData, "line 19");
    } catch (err) {
      console.log(err);
    }
  }

  // FUNCTIONS

  // handleEdit = () => {
  //   // alert("you clicked on the edit button! a modal should pop up");
  //   this.setState({showModal: true});
  //   alert(this.state.showModal);
  // }


  render() {
    // get data from the state
    const { src, name, description, players, time, realRulesLink, drunkRulesLink } = this.state.gameData;
    return (
      <div className="LegacyGames-div">
        
  
          {/* <p>{src}</p> */}
          <p>Name: {name}</p>
          <p>Description: {description}</p>
          <p>Number of Players: {players}</p>
          <p>Time: {time}</p>
          <a href={realRulesLink}><Button variant="warning">Real Rules</Button></a>
          <a href={drunkRulesLink}><Button variant="danger">Drunk Rules</Button></a>
          {/* <Button variant="info" >Edit</Button> */}
          <EditModal gameData={this.state.gameData} />
          <Button variant="dark">Delete</Button>


      
        
      </div>
    );
  }
}

export default LegacyDetails;