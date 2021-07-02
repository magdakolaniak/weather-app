import { Container, Row, Col } from 'react-bootstrap';

const Trail = () => {
  return (
    <>
      <Container>
        <Col md={1}>
          <Row>
            <Col md={6}>
              <span>image</span>
            </Col>
            <Col md={6}>
              <span>degrees</span>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <span>image</span>
            </Col>
            <Col md={6}>
              <span>degrees</span>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};
export default Trail;
