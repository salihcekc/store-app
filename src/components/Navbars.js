import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Navbars() {
  const navigate = useNavigate();
  const username = useSelector(state => state.getUserNameReducer.username);

  console.log(username, 'username');

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => navigate('/home')}>Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/home')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('add-card')}>Added Card</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate('mens-clothing')}>Men's Clothing</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('jewelery')}>Jewelery</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('electronics')}>Electronics</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item onClick={() => navigate('womens-clothing')}>Women's Clothing</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div>
            <Navbar.Text> {username && username !== null ? `Welcome ${username}` : <a onClick={() => navigate('/')}> Please Login </a>} </Navbar.Text>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
