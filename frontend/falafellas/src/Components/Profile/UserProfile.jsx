import React, {useState} from 'react'
import profile from '../../assets/Module/profile.jpg'
import { Container, Row, Col, Button, Form} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './UserProfile.css'

function UserProfile() {
  const[isEditing, setIsEditing] = useState(false);
  const[bio, setBio] = useState("I'm a passionate food lover who believes the way to anyone's heart is through their stomach. I take joy in crafting subs and would make your SUB in a WAY, that would definately make your DAY. Let's make your meal a memorable one!");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setBio(event.target.value);
  };
  
  return (
    <>
      {/* <Navbar className='custom-navbar'>
          <Navbar.Brand href="#home" id="brand">Pathway To Subway</Navbar.Brand>
          <Nav className='navbar-elements'>User Profile</Nav>
      </Navbar> */}

      <Container fluid className='bg-img'>
        <Row className="align-items-center">
          <Col xs={12} md={5} lg={5} xl={3} className="profile-img">
            <img src={profile} alt="Avatar"/>
          </Col>
          <Col xs={12} md={7} lg={7} xl={9} className='bio-text'>

            <h3>Krisha Panchamia</h3>
            {isEditing ? (
              <div>
                {/* <p>{bio}</p> */}
                <Form.Control as="textarea" rows={3} value={bio} onChange={handleChange}/>
                <Button variant="secondary" className='editButton' onClick={handleSave}>Save</Button>
              </div>
            ) : (
              <div>
                <div>{bio}</div>
                <Button variant="secondary" className='editButton' onClick={handleEdit}>Edit Bio</Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserProfile;
