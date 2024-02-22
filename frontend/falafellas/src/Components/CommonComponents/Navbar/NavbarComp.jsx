import { React, useState } from 'react'
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { Person } from 'react-bootstrap-icons';
import './NavbarComp.css'

function NavbarComp() {

  const [expanded, setExpanded] = useState(false);

  const handleToggleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary navbar-custom">
        <Container>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className='toggle-custom'
            onClick={handleToggleClick}
          />
          
          <Navbar.Brand href="#home">
            <div class="brand-name">
              <span class="first-part">Fala</span><span class="second-part">fellas</span>
            </div>
          </Navbar.Brand>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar-elements">
                <Nav.Link href="#home">Courses</Nav.Link>
                <Nav.Link href="#link">Rewards</Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
                <Nav.Link href="#link">FAQ</Nav.Link>    
            </Nav>
          </Navbar.Collapse>

          {!expanded && (
          <NavDropdown title={<Person size={30} color="#f36b37"/>} id="nav-dropdown" alignRight>
            <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>
          )}
        </Container>
    </Navbar>
    </>
  )
}

export default NavbarComp