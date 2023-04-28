import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logg from '../images/logg.png';
import { Link} from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logg} alt="" style={{width:"110px"}} />
        </Navbar.Brand>
        
              <Link
                    className="btn btn-danger mt-2"
                    to={`/tech/notif`}
                  >
                    Tickets reçues
                  </Link>
      </Container>
    </Navbar>
  );
};

export default Menu;
