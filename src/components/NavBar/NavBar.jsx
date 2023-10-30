import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../Cartwidget/CartWidget";
import { NavLink } from "react-router-dom";
import './NavBar.css'


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={{fontSize:"30px", fontWeight:"500"}} as={NavLink} to="/">
          Todo Sports
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>

            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/calzados">
                calzados
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/camisetas">
                camisetas
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/shorts">
                shorts
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/'>Todos los productos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
