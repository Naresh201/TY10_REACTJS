import React, { Component } from "react";
import { Modal,Button,Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class LoginAndRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      shows:false
    };
  }
  handleModal() {
    this.setState({
      show: !this.state.show
    });
  }
  handleModals() {
    this.setState({
      shows: !this.state.shows
    });
  }
  render() {
    return (
      <div className="mt-5">
        <Button variant="success" className="btn btn-custom col-md-5 ml-5" onClick ={()=>{this.handleModal()}}>Login</Button>{" "}
        <Button variant="warning" className="btn btn-custom col-md-5 ml-5" onClick ={()=>{this.handleModals()}}>Register</Button>{" "}
        <Modal show={this.state.show}>
          <Modal.Header>Login</Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="success" type="submit">
    Submit
  </Button>{' '}
  
</Form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="danger" type="submit" onClick ={()=>{this.handleModal()}}>
    Close
  </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.shows}>
          <Modal.Header>Registration Form</Modal.Header>
          <Modal.Body>
          
          <Form>
          <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
    <Form.Text className="text-muted">
      please enter your name.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="success" type="submit">
    Submit
  </Button>{' '}
  
</Form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="danger" type="submit" onClick ={()=>{this.handleModals()}}>
    Close
  </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
