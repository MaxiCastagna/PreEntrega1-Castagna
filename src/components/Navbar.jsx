import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import imgLogo from "../assets/icons/LOGO-nani.png"

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-info py-3">
      <Container>
        <Navbar.Brand href="#home">
            <img
              src= {imgLogo}
              width="auto"
              height="32"
              className="d-inline-block align-top"
              alt="Logo-nani"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#products">Productos</Nav.Link>
            <Nav.Link href="#about-us">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;