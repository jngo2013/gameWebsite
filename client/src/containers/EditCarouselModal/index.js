import axios from 'axios';
import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

class EditCarouselModal extends Component {
  state = {
    show: false,
    carouselData: "",
  }

  // handleEdit
  handleEdit = async () => {
    // 1.  makes an api call to get the data from the database
    let carouselId = this.props._id;
    
    try {
      let response = await axios.get(`/api/eventcarousel/${carouselId}`);
      // 2.  set the carouselData state to be 'response.data'
      this.setState({ carouselData: response.data });
      // console.log(response.data, "line 20 in event carousel");
    } catch (err) {
      console.log(err);
    }
    this.handleShow();
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleInputChange = event => {
    this.setState({ carouselData: {...this.state.carouselData, [event.target.name]: event.target.value }});
  }

  handleOnSubmit = async event => {
    event.preventDefault();

    // send the edited data to the backend and get a response (PUT REQUEST)
    let { data } = await axios.put("/api/eventcarousel", { carouselData: this.state.carouselData });
    // console.log(data, "updated data");

    // send data to parent for rerendering of the carousel
    this.props.passDataToParent(data);

    // alert user they successfully edited
    alert("Edits saved!");

    // close modal
    this.handleClose();
  }

  render() {
    return (
      <>
        {/* Button to show the modal */}
        <Button variant="primary" onClick={this.handleEdit}>
          Edit Slides
        </Button>

        {/* The actual modal */}
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit the Carousel</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <h3>Slide 1</h3>
                <Form.Label>Episode Number</Form.Label>
                {/* <p>{this.state.carouselData.slide1}</p> */}
                <Form.Control type="text" name="slide1" value={this.state.carouselData.slide1} onChange={this.handleInputChange}  />
              </Form.Group>
  
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description of the episode</Form.Label>
                <Form.Control as="textarea" name="slide1desc" value={this.state.carouselData.slide1desc} onChange={this.handleInputChange} rows={3}  />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <h3>Slide 2</h3>
                <Form.Label>Episode Number</Form.Label>
                <Form.Control type="text" name="slide2" value={this.state.carouselData.slide2} onChange={this.handleInputChange}  />
              </Form.Group>
  
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description of the episode</Form.Label>
                <Form.Control as="textarea" name="slide2desc" value={this.state.carouselData.slide2desc} onChange={this.handleInputChange} rows={3}  />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <h3>Slide 3</h3>
                <Form.Label>Episode Number</Form.Label>
                <Form.Control type="text" name="slide3" value={this.state.carouselData.slide3} onChange={this.handleInputChange}  />
              </Form.Group>
  
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description of the episode</Form.Label>
                <Form.Control as="textarea" name="slide3desc" value={this.state.carouselData.slide3desc} onChange={this.handleInputChange} rows={3} />
              </Form.Group>
            </Form>

        

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleOnSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default EditCarouselModal;