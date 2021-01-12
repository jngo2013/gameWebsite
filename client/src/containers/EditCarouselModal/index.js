import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

class EditCarouselModal extends Component {
  state = {
    show: false,
    carouselData: {slide1: "", slide1desc: "", slide2: "", slide2desc: "", slide3: "", slide3desc: ""},
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

  handleOnSubmit = event => {
    event.preventDefault();

    // console.log(this.state.carouselData, "line 29");
    // 1.  send the edited data to the backend and get a response (PUT REQUEST)
    // 2.  change the state to be the response after updating data
    // X 3.  send data to parent for rerendering of the carousel
    this.props.passDataToParent(this.state.carouselData);

    // X 4.  alert user they successfully edited
    alert("Edits saved!");
    
    // X 5.  close modal
    this.handleClose();
  }


  render() {
    console.log(this.props.carouselData, "THIS IS MODAL DATA")

    return (
      <>
        {/* Button to show the modal */}
        <Button variant="primary" onClick={this.handleShow}>
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
                <Form.Control type="text" name="slide1" value={this.state.carouselData.slide1} onChange={this.handleInputChange} placeholder={this.props.carouselData.slide1} />
              </Form.Group>
  
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description of the episode</Form.Label>
                <Form.Control as="textarea" name="slide1desc" value={this.state.carouselData.slide1desc} onChange={this.handleInputChange} rows={3} placeholder={this.props.carouselData.slide1desc} />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <h3>Slide 2</h3>
                <Form.Label>Episode Number</Form.Label>
                <Form.Control type="text" name="slide2" value={this.state.carouselData.slide2} onChange={this.handleInputChange} placeholder={this.props.carouselData.slide2} />
              </Form.Group>
  
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description of the episode</Form.Label>
                <Form.Control as="textarea" name="slide2desc" value={this.state.carouselData.slide2desc} onChange={this.handleInputChange} rows={3} placeholder={this.props.carouselData.slide2desc} />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <h3>Slide 3</h3>
                <Form.Label>Episode Number</Form.Label>
                <Form.Control type="text" name="slide3" value={this.state.carouselData.slide3} onChange={this.handleInputChange} placeholder={this.props.carouselData.slide3} />
              </Form.Group>
  
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description of the episode</Form.Label>
                <Form.Control as="textarea" name="slide3desc" value={this.state.carouselData.slide3desc} onChange={this.handleInputChange} rows={3} placeholder={this.props.carouselData.slide3desc} />
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