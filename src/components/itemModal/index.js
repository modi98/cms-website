import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ItemModal = ({ title, productName, variant }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <span>
      <Button variant={variant ? variant : "primary"} onClick={handleShow}>
        {title}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{productName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="modalForm.Name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="modalForm.Tel">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="modalForm.Email">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="modalForm.Textarea"
            >
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} />
              <Form.Control hidden value={productName} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </span>
  );
}

export default ItemModal;