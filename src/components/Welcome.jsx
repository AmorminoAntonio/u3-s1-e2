import { Alert, Col, Container, Row } from "react-bootstrap";

const Welcome = () => (
  <>
    <Alert variant="danger" className="d-flex justify-content-center">
      <Alert.Link href="#">link d`esempio.</Alert.Link> Give it a click if you
      like.
    </Alert>
    <Container>
      <Row>
        <Col className="d-flex flex-column align-items-center">
          <h1 className="hero display-1 text-bg-dark rounded-pill  px-5 py-3">
            WELCOME
          </h1>
          <h3 className="display-5 fs-5 text-bg-primary rounded-pill px-4 py-2">
            this is my new E-BOOKS shop online
          </h3>
        </Col>
      </Row>
    </Container>
  </>
);

export default Welcome;
