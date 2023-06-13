import { h } from "preact";
import { usePrerenderData } from "@preact/prerender-data-provider";
import { Container, Row, Col, Image } from "react-bootstrap";
import ItemModal from "../../components/itemModal";
import Specs from "./specs";

const Product = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  console.log(data)
  return (
    <Container className="mt-5">
      {!isLoading && data ? (
        <div>
          <Row>
            <Col md={6}>
              <Image
                src={data.product.details.image}
                alt={data.product.details.title}
                fluid
              />
            </Col>
            <Col md={6}>
              <h1>{data.product.details.title}</h1>
              <p><strong>Precio:</strong> $16,700.00</p>
              <ItemModal title={"Hacer una oferta"} productName={data.product.details.title} />
              <h3>Información de contacto</h3>
              <div><strong>Ubicación: </strong>{data.product.details.location}</div>
              <div><strong>Teléfono: </strong>{data.product.details.phone}</div>
              <div><strong>Correo: </strong><a href={`mailto:${data.product.details.email}`}>{data.product.details.email}</a></div>
            </Col>
          </Row>
          <Row>
            <div>
              <h3 className="pt-4">Descripción</h3>
              <p>{data.product.details.description}</p>
              <Specs productDetails={data.product.details} />
            </div>
          </Row>
        </div>
      ) : null}
    </Container>
  );
};

export default Product;
