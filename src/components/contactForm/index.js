import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ItemButton from "../../components/button";

const contactForm = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>Información de contacto</h2>
          <p>
            ¡Nos encantaría escuchar de ti!<br/><br/>Si tienes alguna pregunta, inquietud
            o simplemente quieres obtener más información sobre nuestros
            productos, no dudes en ponerte en contacto con nosotros. Estamos
            aquí para ayudarte y responder a todas tus consultas.
          </p>
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
};

export default contactForm;
