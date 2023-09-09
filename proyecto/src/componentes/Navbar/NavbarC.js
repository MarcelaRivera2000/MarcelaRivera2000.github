import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../img/logo.jpg"
import "./NavbarC.css"

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="" className='logo'/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Página Principal</Nav.Link>
            <Nav.Link href="#features">Catálogo</Nav.Link>
            <Nav.Link href="#pricing">Contáctanos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;