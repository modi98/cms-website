import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ItemButton from "../../components/button";

const contactForm = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>Información de contacto</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non ipsum est.
            Nulla ac massa a erat rutrum tincidunt. Nam ultrices eleifend suscipit.
            Etiam consequat, dui eu bibendum hendrerit, mi purus lobortis diam, sit amet
            congue arcu turpis ac ipsum. Suspendisse non commodo leo, vel congue turpis.</p>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="nameForm">
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="emailForm">
              <Form.Control type="email" placeholder="Correo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="messageForm">
              <Form.Control as="textarea" placeholder="Mensaje" rows={3} />
            </Form.Group>
            <ItemButton title={"Enviar"} />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default contactForm;