import axios from 'axios';
import React, { Component } from 'react';
import { Button, Modal, Form, Container } from 'react-bootstrap';
// import './styles.css';

class EditCarouselModal extends Component {
  state = {
    show: false,
    carouselData: "",
  }

  // handleEdit
  handleEdit = async () => {
    let carouselId = this.props._id;
    
    try {
      // make an api call to get the data from the database
      let { data } = await axios.get(`/api/eventcarousel/${carouselId}`);

      // set the carouselData state to be 'response.data'
      this.setState({ carouselData: data });
    } catch (err) {
      console.log(err);
    }
    this.handleShow();
  }

  // function to show modal
  handleShow = () => {
    this.setState({ show: true });
  }

  // function to close modal
  handleClose = () => {
    this.setState({ show: false });
  }

  handleInputChange = event => {
    this.setState({ carouselData: {...this.state.carouselData, [event.target.name]: event.target.value }});
  }

  // function for uploading an image
  handleFileInputChange = event => {
    this.setState({ carouselData: {...this.state.carouselData, [event.target.name]: event.target.files[0] }});
    console.log("filename:", this.state.carouselData.slide1src);
  }

  handleOnSubmit = async event => {
    event.preventDefault();

    // console.log("asdfdsf", this.state.carouselData.slide1);
    // "FormData" is creating a new empty object that all of the form data will go into
    let formData = new FormData();

    // then append the data from the state to formData
    let { slide1, slide2, slide3, slide1desc, slide2desc, slide3desc, slide1src, slide2src, slide3src, slide1link, slide2link, slide3link } = this.state.carouselData;
    formData.append("slide1", slide1);
    formData.append("slide2", slide2);
    formData.append("slide3", slide3);
    formData.append("slide1desc", slide1desc);
    formData.append("slide2desc", slide2desc);
    formData.append("slide3desc", slide3desc);
    formData.append("slide1src", slide1src);
    formData.append("slide2src", slide2src);
    formData.append("slide3src", slide3src);
    formData.append("slide1link", slide1link);
    formData.append("slide2link", slide2link);
    formData.append("slide3link", slide3link);

    console.log("this is formData in eventCarousel", formData)
    // send the edited data to the backend and get a response (PUT REQUEST)
    // let { data } = await axios.put("/api/eventcarousel", { carouselData: this.state.carouselData });
    let { data } = await axios.put("/api/eventcarousel", formData);


    // send updated data to parent for rerendering of the carousel

    // if you're on the 'secret page' don't run this function; otherwise run it
    if(!this.props.onSecret) {
      this.props.passDataToParent(data);
    }
    
    // alert user they successfully edited
    alert("Edits saved!");

    // close modal
    this.handleClose();

    window.location.reload();
  }

  render() {
    // destructure data from this.state.carouselData
    const { slide1, slide2, slide3, slide1desc, slide2desc, slide3desc, slide1src, slide2src, slide3src, slide1link, slide2link, slide3link } = this.state.carouselData;

    return (
      <>
        {/* Button to show the modal */}
        {/* <Container className="EditCarouselModal-container"> */}
          <Button variant="info" className="EditCarouselModal-button" onClick={this.handleEdit}>
            Edit Slides
          </Button>
        {/* </Container> */}
        
        {/* The actual modal */}
        <Modal show={this.state.show} onHide={this.handleClose}>
        <Form onSubmit={this.handleOnSubmit} enctype="multipart/form-data">
          <Modal.Header closeButton>
            <Modal.Title>Edit the Carousel</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            {/* Form inside modal */}
            
              {/* Slide 1 Info */}
              <Form.Group controlId="slide1epi">
                <h3>Slide 1</h3>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="slide1" value={slide1} onChange={this.handleInputChange}  />
              </Form.Group>

              <Form.Group controlId="slide1desc">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" name="slide1desc" value={slide1desc} onChange={this.handleInputChange} rows={3}  />
              </Form.Group>

              <Form.Group controlId="slide1img">
                <Form.Label>Image URL</Form.Label>
                {/* <Form.Control type="text" name="slide1src" value={slide1src} onChange={this.handleInputChange}  /> */}
                <Form.Control required type="file" placeholder="Put image URL here." name="slide1src" onChange={this.handleFileInputChange} />
              </Form.Group>

              <Form.Group controlId="slide1link">
                <Form.Label>News Link</Form.Label>
                <Form.Control type="text" name="slide1link" value={slide1link} onChange={this.handleInputChange}  />
              </Form.Group>

              {/* Slide 2 Info */}
              <Form.Group controlId="slide2epi">
                <h3>Slide 2</h3>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="slide2" value={slide2} onChange={this.handleInputChange}  />
              </Form.Group>
  
              <Form.Group controlId="slide2desc">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" name="slide2desc" value={slide2desc} onChange={this.handleInputChange} rows={3}  />
              </Form.Group>

              <Form.Group controlId="slide2img">
                <Form.Label>Image URL</Form.Label>
                {/* <Form.Control type="text" name="slide2src" value={slide2src} onChange={this.handleInputChange}  /> */}
                <Form.Control required type="file" placeholder="Put image URL here." name="slide2src" onChange={this.handleFileInputChange} />
              </Form.Group>

              <Form.Group controlId="slide2link">
                <Form.Label>News Link</Form.Label>
                <Form.Control type="text" name="slide2link" value={slide2link} onChange={this.handleInputChange}  />
              </Form.Group>

              {/* Slide 3 Info */}
              <Form.Group controlId="slide3epi">
                <h3>Slide 3</h3>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="slide3" value={slide3} onChange={this.handleInputChange}  />
              </Form.Group>
  
              <Form.Group controlId="slide3desc">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" name="slide3desc" value={slide3desc} onChange={this.handleInputChange} rows={3} />
              </Form.Group>

              <Form.Group controlId="slide3img">
                <Form.Label>Image URL</Form.Label>
                {/* <Form.Control type="text" name="slide3src" value={slide3src} onChange={this.handleInputChange}  /> */}
                <Form.Control required type="file" placeholder="Put image URL here." name="slide3src" onChange={this.handleFileInputChange} />
              </Form.Group>

              <Form.Group controlId="slide3link">
                <Form.Label>News Link</Form.Label>
                <Form.Control type="text" name="slide3link" value={slide3link} onChange={this.handleInputChange}  />
              </Form.Group>
            
          </Modal.Body>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}

export default EditCarouselModal;
