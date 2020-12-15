import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

class EditModal extends Component {
  state = {
    // state for showing/hiding the modal
    show: false,
    gameData: "",
  }

  handleEdit = async () => {
    // get the api route from props ("/api/legacygames/")
    let apiRoute = this.props.apiRoute;
    // get the game id from props
    let gameId = this.props.id;

    // make an API call to get the data from the database
    try {
      // let response = await axios.get(`/api/legacygames/${gameId}`);
      let response = await axios.get(`${apiRoute}${gameId}`);
      // set the gameData to be 'response.data'
      this.setState({ gameData: response.data });
    } catch (err) {
      console.log(err);
    }

    // change modal state to true
    this.setState({ show: true });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleInputChange = event => {
    // setting state in the gameData object
    // change the state of gameData, make a copy of the gameData (using "...this.state.gameData"),
    // then choose what you want to update in the object (using "[event.target.name]" from the form input),
    // then add what you want to change that value to (using "event.target.value" from the form input)
    this.setState({ gameData: {...this.state.gameData, [event.target.name]: event.target.value} });
  }

  handleOnSubmit = async event => {
    event.preventDefault();

    let apiRoute = this.props.apiRoute;

    // send the data to the backend and get a response
    // let { data } = await axios.put(`/api/legacygames/${this.state.gameData._id}`, { gameData: this.state.gameData });
    let { data } = await axios.put(`${apiRoute}${this.state.gameData._id}`, { gameData: this.state.gameData });

    // change the state of the gameData to be the response after updating the database
    this.setState({ gameData: data });

    // send data to parent for rerendering of details page
    this.props.passDataToParent(data);
    
    // alert user they successfully edited 
    alert("Edits saved!");

    // close modal
    this.handleClose();
  }

  handleDelete = async () => {
    // get the api route from props
    let apiRoute = this.props.apiRoute;

    // get the gameId from props
    let gameId = this.props.id;
    
    try {
      // send the request to the backend
      // let response = axios.delete(`/api/legacygames/${gameId}`);
      let response = axios.delete(`${apiRoute}${gameId}`);
      console.log("Game that got deleted: " + response.data);

      // Alert user they deleted a game
      alert("You successfully deleted the game!");

      // close modal
      this.handleClose();

      // send back "true" to the parent so it can redirect back to the "/LegacyGames/" or "/ShortTermGames/" page
      this.props.redirect(true);

    } catch (err) {
      console.log(err);
    }
  }


  render() {

    // get game data from the state
    const { _id, src, title, description, players, time, realRulesLink, drunkRulesLink } = this.state.gameData;

    return (
      <>
        {/* Button to activate the Modal */}
        <Button variant="info" onClick={this.handleEdit}>
          Edit
        </Button>

        {/* This is the actual modal */}
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Form>

            {/* This is the game name */}
            <Modal.Header closeButton>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="title" value={title} onChange={this.handleInputChange}/>
              </Form.Group>
            </Modal.Header>

            <Modal.Body>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} type="text" name="description" value={description} onChange={this.handleInputChange}/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Number of Players</Form.Label>
                <Form.Control type="text" name="players" value={players} onChange={this.handleInputChange}/>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Time</Form.Label>
                <Form.Control type="text" name="time" value={time} onChange={this.handleInputChange}/>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Real Rules</Form.Label>
                <Form.Control type="text" name="realRulesLink" value={realRulesLink} onChange={this.handleInputChange}/>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Drunk Rules</Form.Label>
                <Form.Control type="text" name="drunkRulesLink" value={drunkRulesLink} onChange={this.handleInputChange}/>
              </Form.Group>

            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleOnSubmit}>
                Save Changes
              </Button>
              <Button variant="danger" onClick={this.handleDelete}>Delete</Button>

            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}

export default EditModal;