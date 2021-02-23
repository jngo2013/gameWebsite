import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './styles.css';

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
      console.log("this is the data to edit", this.state.gameData);
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

  // function for uploading an image
  handleFileInputChange = event => {
    this.setState({ gameData: {...this.state.gameData, [event.target.name]: event.target.files[0] }});
  }

  handleOnSubmit = async event => {
    event.preventDefault();

    let apiRoute = this.props.apiRoute;

    // "FormData" is creating a new empty object that all of the form data will go into
    let formData = new FormData();

    // then append the data from the state to formData
    let { title, description, players, time, realRules, drunkRules, src, drunkRating } = this.state.gameData;
    formData.append("title", title);
    formData.append("description", description);
    formData.append("players", players);
    formData.append("time", time);
    formData.append("realRules", realRules);
    formData.append("drunkRules", drunkRules);
    formData.append("src", src);
    formData.append("drunkRating", drunkRating);

    console.log("this is formData in editModal", formData);
    // send the data to the backend and get a response
    // console.log("data sent", this.state.gameData);
    // let { data } = await axios.put(`${apiRoute}${this.state.gameData._id}`, { gameData: this.state.gameData });
    let { data } = await axios.put(`${apiRoute}${this.state.gameData._id}`, formData);

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
      let response = axios.delete(`${apiRoute}${gameId}`);

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

  handleConfirmation = () => {
    let confirmation = window.confirm("Are you sure you want to delete this game?");
    // if user clicks "ok", run the "handleDelete" function
    if(confirmation){
      this.handleDelete();
    }
  }

  render() {

    // get game data from the state
    const { src, title, description, players, time, realRules, drunkRules, drunkRating } = this.state.gameData;

    return (
      <>
        {/* Button to activate the Modal */}
        <Button variant="info" onClick={this.handleEdit} className="EditModal-button">
          Edit
        </Button>

        {/* This is the actual modal */}
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Form onSubmit={this.handleOnSubmit} enctype="multipart/form-data">

            {/* This is the game name */}
            <Modal.Header>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="title" value={title} onChange={this.handleInputChange} style={{width: "467px"}}/>
              </Form.Group>
            </Modal.Header>

            <Modal.Body>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} type="text" name="description" value={description} onChange={this.handleInputChange}/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Image URL</Form.Label>
                {/* <Form.Control type="text" name="src" value={src} onChange={this.handleInputChange}/> */}
                <Form.Control required type="file" placeholder="Put image URL here." name="src" onChange={this.handleFileInputChange} />
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
                <Form.Label>Drunk Rating</Form.Label>
                <Form.Control type="text" name="drunkRating" value={drunkRating} onChange={this.handleInputChange}/>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Real Rules</Form.Label>
                <Form.Control type="text" name="realRules" value={realRules} onChange={this.handleInputChange}/>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Drunk Rules</Form.Label>
                <Form.Control as="textarea" rows={3} name="drunkRules" value={drunkRules} onChange={this.handleInputChange}/>
              </Form.Group>

            </Modal.Body>

            <Modal.Footer>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>

              <Button variant="secondary" onClick={this.handleClose}>
                Cancel Changes
              </Button>
        
              <Button variant="danger" onClick={this.handleConfirmation}>
                Delete
              </Button>

            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}

export default EditModal;
