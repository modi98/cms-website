import { h } from "preact";
import { usePrerenderData } from "@preact/prerender-data-provider";
import { Container, Row, Col, Image } from "react-bootstrap";
import ItemButton from "../../components/button";
import Specs from "./specs";

const Product = (props) => {
  const [data, isLoading] = usePrerenderData(props);
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
              <ItemButton title={"Hacer una oferta"} />
              <h3>Información de contacto</h3>
              <p><strong>Locación:</strong> Monterrey, NL</p>
              <p><strong>Teléfono:</strong> 81 4038 2839</p>
              <p><strong>WhatsApp:</strong><a href="#"> Mensaje</a></p>
              <p><strong>Correo:</strong><a href="mailto:someone@example.com"> someone@example.com</a></p>
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
