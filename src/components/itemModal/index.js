import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { route } from 'preact-router';

const ItemModal = ({ title, productName, variant }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  if (typeof window !== 'undefined') window?.emailjs?.init("GR5drAbPCu5dZZl06");

  const sendEmail = async (e) => {
    e.preventDefault();
    const f = document.getElementById("product-form");
    await emailjs.sendForm("service_gw3i4xk", "template_ukjpudp", f);
    route("/contacto/success");
  };

  return (
    <span>
      <Button variant={variant ? variant : "primary"} onClick={handleShow}>
        {title}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form id="product-form" onSubmit={sendEmail}>
          <Modal.Header closeButton>
            <Modal.Title>{productName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control required autoFocus name="nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="telefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control required type="tel" autoFocus name="telefono" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mensaje">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control required as="textarea" rows={3} name="mensaje" />
              <Form.Control hidden value={productName} name="producto" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Cerrar</Button>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </span>
  );
};

export default ItemModal;
