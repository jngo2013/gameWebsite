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
      realRules: "",
      drunkRules: "",
      src: "",
      drunkRating: "",
    },
    validated: false,
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

  // function for uploading an image
  handleFileInputChange = event => {
    console.log("line 41", event.target.value);
    console.log("line 41", event.target.files);
    this.setState({ gameData: {...this.state.gameData, [event.target.name]: event.target.files[0] }});
  }

  // function to refresh page (to get new data)
  refreshPage = () => {
    window.location.reload(true);
  }

  // function to submit data to the database
  handleOnSubmit = async event => {
    // get the form
    const form = event.currentTarget;

    // check to see if the form is completely filled out every time the user tries to submit
    if(form.checkValidity() === false){
      event.preventDefault();
      event.stopPropagation();
    } else {
      // then run the below code when it is
      event.preventDefault();

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

      // send the data (from 'this.state.gameData') to the backend and get a response
      try {
        // const { data } = await axios.post("/api/shorttermgames/", this.state.gameData);
        const { data } = await axios.post("/api/shorttermgames/", formData);
        this.setState({ gameData: data });
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
    // change validated to "true" after checking the form
    this.setState({ validated: true });
  
  }

  
  render() {
    return (
      <>
        {/* Button to activate the modal */}
        <Button variant="dark" size="sm" onClick={this.handleShow} style={{"box-shadow": "0.2rem 0.2rem 0.3rem grey"}}>
          Add a Board Game
        </Button>

        {/* This is the actual modal */}
        <Modal show={this.state.show} onHide={this.handleClose}>

          <Form noValidate validated={this.state.validated} onSubmit={this.handleOnSubmit} enctype="multipart/form-data">
            <Modal.Header closeButton>
              <Modal.Title>Add a Board Game!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name of Game</Form.Label>
                <Form.Control required type="text" placeholder="Pandemic Legacy" name="title" onChange={this.handleInputChange} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Fill out the name of the game.</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control required as="textarea" rows={3} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" name="description" onChange={this.handleInputChange}/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Fill out the description of the game.</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Image URL</Form.Label>
                {/* https://stackoverflow.com/questions/4328947/limit-file-format-when-using-input-type-file */}
                <Form.Control required type="file" accept="image/*" placeholder="Put image URL here." name="src" onChange={this.handleFileInputChange} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                {/* <Form.Control.Feedback type="invalid">Please provide an image URL.</Form.Control.Feedback> */}

              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Number of Players</Form.Label>
                <Form.Control required type="text" placeholder="2-4" name="players" onChange={this.handleInputChange}/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Add the number of players.</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Time (min.)</Form.Label>
                <Form.Control required type="text" placeholder="90" name="time" onChange={this.handleInputChange}/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Fill out the time.</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Drunk Rating (%)</Form.Label>
                <Form.Control required type="text" placeholder="90" name="drunkRating" onChange={this.handleInputChange}/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Fill out the drunk rating.</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Real Rules</Form.Label>
                <Form.Control required type="text" placeholder="https://www.google.com/" name="realRules" onChange={this.handleInputChange}/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Please provide a link to the real rules.</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Drunk Rules</Form.Label>
                <Form.Control required as="textarea" rows={3} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" name="drunkRules" onChange={this.handleInputChange}/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Please provide your drunk rules.</Form.Control.Feedback>
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="primary" type="submit">
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
