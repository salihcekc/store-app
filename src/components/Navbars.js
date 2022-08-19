import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbars() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/home">Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href='/login' >Home</Nav.Link>
          <Nav.Link href="/add-cart">Added Cart</Nav.Link>
          <NavDropdown title="Category" id="basic-nav-dropdown">
            <NavDropdown.Item href="#mens-clothing">Men's Clothing</NavDropdown.Item>
            <NavDropdown.Item href="#jewelery">
              Jewelery
            </NavDropdown.Item>
            <NavDropdown.Item href="#electronics">Electronics</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item href="#womens-clothing">
              Women's Clothing
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbars