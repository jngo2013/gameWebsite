import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class EditModal extends Component {
  state = {
    // state for showing/hiding the modal
    show: false,
  }

  handleEdit = () => {
    this.setState({ showModal: true });
  }

  handleClose = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <>
        {/* Button to activate the Modal */}
        <Button variant="info" onClick={this.handleEdit}>
          Edit
        </Button>
  
        {/* This is the actual modal */}
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Game Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>Game Description</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default EditModal;
