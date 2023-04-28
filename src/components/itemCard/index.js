import { Link } from "preact-router/match";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import ItemModal from "../../components/itemModal";
import ReactMarkdown from "react-markdown";

const ItemCard = ({ title, description, image, itemLink, contact }) => {
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
              <div><strong>Locación:</strong> Monterrey, NL</div>
              <div><strong>Teléfono:</strong><a href="#">81 4038 2839</a></div>
              <div><strong>Correo:</strong><a href="mailto:someone@example.com"> someone@example.com</a></div>
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
