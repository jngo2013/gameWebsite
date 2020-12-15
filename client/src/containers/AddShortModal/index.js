import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

class AddShortModal extends Component {
  state = {
    // state for showing/hiding the modal
    show: false,
    gameData: {
      title: "",
      description: "",
      players: "",
      time: "",
      // realRules: "",
      // drunkRules: ""
    },
  }

  // function to hide modal
  handleClose = () => {
    this.setState({ show: false });
  }

  // function to show modal
  handleShow = () => {
    this.setState({ show: true });
  }

  // function for form inputs
  handleInputChange = event => {
    this.setState({ gameData: {...this.state.gameData, [event.target.name]: event.target.value }});
  }

  // function to refresh page (to get new data)
  refreshPage = () => {
    window.location.reload(true);
  }

  // function to submit data to the database
  handleOnSubmit = async event => {
    event.preventDefault();

    
    // send the data (from 'this.state.gameData') to the backend and get a response
    try {
      const { data } = await axios.post("/api/shorttermgames/", this.state.gameData);
      console.log(data);
      this.setState({gameData: data});
    } catch (err) {
      console.log(err);
    }

    // alert the user the game was saved
    alert("Game saved!");
    
    // close modal
    this.handleClose();

    // refresh the page to get new data
    this.refreshPage();
  }

  
  render() {
    return (
      <>
        {/* Button to activate the modal */}
        <Button variant="primary" onClick={this.handleShow}>
          Add a Short Term Game
        </Button>

        {/* This is the actual modal */}
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Form>
            <Modal.Header closeButton>
              <Modal.Title>Add a Short Term Game!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name of Game</Form.Label>
                <Form.Control type="text" placeholder="Pandemic Legacy" name="title" onChange={this.handleInputChange} />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" name="description" onChange={this.handleInputChange}/>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Number of Players</Form.Label>
                <Form.Control type="text" placeholder="2-4" name="players" onChange={this.handleInputChange}/>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Time (min.)</Form.Label>
                <Form.Control type="text" placeholder="90" name="time" onChange={this.handleInputChange}/>
              </Form.Group>

              {/* <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Real Rules</Form.Label>
                <Form.Control type="text" placeholder="name@example.com" name="realRules" onChange={this.handleInputChange}/>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Drunk Rules</Form.Label>
                <Form.Control type="text" placeholder="name@example.com" name="drunkRules" onChange={this.handleInputChange}/>
              </Form.Group> */}
            </Modal.Body>

            <Modal.Footer>
              <Button variant="primary" onClick={this.handleOnSubmit}>
                Submit
              </Button>

              <Button variant="secondary" onClick={this.handleClose}>
                Cancel
              </Button>
            </Modal.Footer>

          </Form>
        </Modal>
      </>
    );
  }
}

export default AddShortModal;
