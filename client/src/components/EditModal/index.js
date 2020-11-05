import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function EditModal(props) {
  // initialize the modal state which is called "show"; "setShow" is the function to change the state;
  // current state of modal is "false" (becuase it's not showing)
  const [show, setShow] = useState(false);

  // change "show" state when the buttons are clicked
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // retrieve data pass down from props
  const { description, drunkRulesLink, name, players, realRulesLink, src, time } = props.gameData;

  return (
    <>
      {/* Button to activate the Modal */}
      <Button variant="info" onClick={handleShow}>
        Edit
      </Button>

      {/* This is the actual modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
