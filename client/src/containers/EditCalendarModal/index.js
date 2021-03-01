import React, { Component } from 'react';
import { Button, Modal, Form, Container } from 'react-bootstrap';


class CalendarModal extends Component {
  state = {
    show: false,
    calendarData: ""
  }

  render(){
    return(
      <>
      <Button variant="info" >Edit</Button>
      <Modal>

      </Modal>
      </>
    )
  }
}