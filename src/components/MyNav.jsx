import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => (
  <Navbar bg="dark" data-bs-theme="dark">
    <Container fluid className="ms-5 me-5">
      <Navbar.Brand href="#home" className="d-flex flex-column align-items-center">
        <span>THUNDER</span>
        <img
          src="/public/vite.svg"
          height="80"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <span>SHOP</span>
      </Navbar.Brand>
      <Nav className="justify-content-between ms-auto">
        <Nav.Link href="#home" className="text-light mx-2 my-2 rounded-pill fw-lighter">
          Home
        </Nav.Link>
        <Nav.Link href="#About" className="text-light mx-2 my-2 rounded-pill fw-lighter">
          About
        </Nav.Link>
        <Nav.Link href="#Browse" className="text-light mx-2 my-2 rounded-pill fw-lighter">
          Browse
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MyNav;
