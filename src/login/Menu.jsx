import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logg from '../images/logg.png';

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logg} alt="" style={{width:"110px"}} />
        </Navbar.Brand>
       
      </Container>
    </Navbar>
  );
};

export default Menu;
