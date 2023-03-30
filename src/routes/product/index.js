import { h } from "preact";
import { usePrerenderData } from "@preact/prerender-data-provider";
import { Container, Row, Col, Image } from "react-bootstrap";

const Product = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  return (
    <Container className="mt-5">
      {!isLoading && data ? (
        <Row>
          <Col md={6}>
            <Image src={data.data.details.image} alt={data.data.details.title} fluid />
          </Col>
          <Col md={6}>
            <h1>{data.data.details.title}</h1>
            <p>{data.data.details.description}</p>
          </Col>
        </Row>
      ) : null}
    </Container>
  );
};

export default Product;
