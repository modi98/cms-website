import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ItemButton from "../../components/button";
import SearchMenu from "../../components/searchMenu";

const contactForm = () => {
  return (
    <Container>
      <SearchMenu />
      <h2 className="mb-4">Sucursal y contacto</h2>
      <Row>
        <Col md={6}>
          <p>
            Si tienes alguna pregunta, inquietud o simplemente quieres obtener
            más información sobre nuestros productos, no dudes en ponerte en
            contacto con nosotros. Estamos aquí para ayudarte y responder a
            todas tus consultas.
          </p>
          <p> Dirección: Av. Dr. Paliza 92, El Centenario, 83260 Hermosillo, Sonora.  <br/>Teléfonos: (662) 212 4134 / (662) 212 6787  <br/>Correo electrónico: lestrada@grupo8a.com </p>
          <a target="_blank" href="https://www.google.com/maps?q=La+Grande+Constructora,+Av.+Dr.+Paliza+92,+El+Centenario,+83260+Hermosillo,+Son.&ftid=0x86ce8444d80a3a8d:0x856d09ac7831086e&hl=es-MX&gl=mx&entry=gps&g_ep=CAISBjYuNjYuMxgAINeCA0ICTVg%3D&g_st=iw">
            <img src="../assets/mapa.png" alt="Mapa" className="mapa-image mb-5"/>
          </a>
        </Col>
        <Col md={6}>
          <p>
            Déjanos un mesaje, nosotros nos contactaremos lo más pronto posible.
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="nameForm">
              <Form.Control type="text" placeholder="Nombre*"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="emailForm">
              <Form.Control type="email" placeholder="Correo*" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="emailForm">
              <Form.Control type="text" placeholder="Asunto*" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="messageForm">
              <Form.Control as="textarea" placeholder="Mensaje*" rows={3} required/>
            </Form.Group>
            <ItemButton title={"Enviar"} />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default contactForm;
