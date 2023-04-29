import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logg from '../images/logg.png';
import { Link} from "react-router-dom";
import  { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Menu = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logg} alt="" style={{width:"110px"}} />
        </Navbar.Brand>
        
        <Button variant="danger" onClick={handleShow}>
        Réclamation reçues !
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Réclamation reçue !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
          <table className="table border shadow small mt-5" style={{ backgroundColor: "white" }}>
  <thead>
    <tr>
      <th scope="col">Num Ticket</th>
      <th scope="col">téléphonne</th>
      <th scope="col">Adresse panne </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>24</td>
      <td>24168598</td>
      <td>Lafayette</td>
    </tr>
  </tbody>
</table>


            <Button variant="success" type="submit">
              accepter
            </Button>
          </Form>
        </Modal.Body>
      </Modal>


                  
      </Container>
    </Navbar>
  );
};



export default Menu;
