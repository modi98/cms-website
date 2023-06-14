import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ItemButton from "../../components/button";
import { route } from 'preact-router';
import SearchMenu from "../../components/searchMenu";

const contactForm = () => {
  emailjs.init("GR5drAbPCu5dZZl06");

  const sendEmail = async (e) => {
    e.preventDefault();
    const f = document.getElementById('contact-form')
    await emailjs.sendForm("service_gw3i4xk", "template_ch8wx5n", f);
    route('/contacto/success')
  };

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
          <a
            target="_blank"
            href="https://www.google.com/maps?q=La+Grande+Constructora,+Av.+Dr.+Paliza+92,+El+Centenario,+83260+Hermosillo,+Son.&ftid=0x86ce8444d80a3a8d:0x856d09ac7831086e&hl=es-MX&gl=mx&entry=gps&g_ep=CAISBjYuNjYuMxgAINeCA0ICTVg%3D&g_st=iw"
          >
            <img
              src="../assets/mapa.png"
              alt="Mapa"
              className="mapa-image mb-5"
            />
          </a>
          <p> Dirección: Av. Dr. Paliza 92, El Centenario, 83260 Hermosillo, Sonora.  <br/>Teléfonos: (662) 212 4134 / (662) 212 6787  <br/>Correo electrónico: lestrada@grupo8a.com </p>
        </Col>
        <Col md={6}>
          <p>
            Déjanos un mesaje, nosotros nos contactaremos lo más pronto posible.
          </p>
          <Form id="contact-form" onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Control
                name="nombre"
                type="text"
                placeholder="Nombre*"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                name="email"
                type="email"
                placeholder="Correo*"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="asunto">
              <Form.Control
                name="asunto"
                type="text"
                placeholder="Asunto*"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mensaje">
              <Form.Control
                name="mensaje"
                as="textarea"
                placeholder="Mensaje*"
                rows={3}
                required
              />
            </Form.Group>
            <ItemButton title={"Enviar"} />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default contactForm;
