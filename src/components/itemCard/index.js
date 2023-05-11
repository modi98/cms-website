import { Link } from "preact-router/match";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import ItemModal from "../../components/itemModal";
import ReactMarkdown from "react-markdown";

const ItemCard = ({ title, description, image, itemLink, location, phone, email }) => {
  return (
    <Card className="mt-4 w-100">
      <Row>
        <Col md={4}>
          <Image className="card-image-container" src={image} fluid />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <ReactMarkdown children={description}></ReactMarkdown>
            </Card.Text>
            <div className="my-3">
              <Card.Title>Información de contacto</Card.Title>
              <div><strong>Ubicación:</strong>{location}</div>
              <div><strong>Teléfono:</strong>{phone}</div>
              <div><strong>Correo:</strong><a href={`mailto:${email}`}>{email}</a></div>
            </div>
            <Button variant="primary">
              <Link href={itemLink} style={{ color: "white" }}>
                Ver Detalles
              </Link>
            </Button>
            <span className="mx-2">
              <ItemModal title={"Hacer una oferta"} productName={title} variant="secondary" />
            </span>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};
export default ItemCard;
