import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Person } from 'react-bootstrap-icons';
import './NavbarComp.css';
import { LinkContainer } from 'react-router-bootstrap';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../../FirebaseService";

function NavbarComp() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const handleToggleClick = () => {
    setExpanded(!expanded);
  };

  const logOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/login');
    }).catch((error) => {
      // An error happened.
    });
  }
  

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbar-custom">
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className='toggle-custom'
            onClick={handleToggleClick}
          />
          
          <LinkContainer to="/">
            <Navbar.Brand>
              <div className="brand-name">
                <span className="first-part">Fala</span><span className="second-part">fellas</span>
              </div>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar-elements">
              <Nav.Link href="#home">Courses</Nav.Link>
              <LinkContainer to="/profile">
                <Nav.Link>Rewards</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/faq">
                <Nav.Link>FAQ</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>

          {!expanded && (

            <NavDropdown title={<Person size={30} color="#f36b37" />} id="nav-dropdown" alignRight>
              <NavDropdown.Item>
                <LinkContainer to="/profile">
                  <Nav.Link>Profile</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={logOut}>Logout</NavDropdown.Item>
            </NavDropdown>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
