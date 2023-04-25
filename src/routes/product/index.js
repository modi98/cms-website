import { h } from "preact";
import { usePrerenderData } from "@preact/prerender-data-provider";
import { Container, Row, Col, Image, Table } from "react-bootstrap";
import ItemButton from "../../components/button";

const Product = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  return (
    <Container className="mt-5">
      {!isLoading && data ? (
        <div>
          <Row>
            <Col md={6}>
              <Image
                src={data.data.details.image}
                alt={data.data.details.title}
                fluid
              />
            </Col>
            <Col md={6}>
              <h1>{data.data.details.title}</h1>
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
              <h3>Descripción</h3>
              <p>{data.data.details.description}</p>
            </div>
            <div>
            <h3>Especificaciones</h3>
            <Table striped>
              <tbody>
                <tr>
                  <td colSpan={2}><strong>Cantidad</strong></td>
                  <td>1</td>
                </tr>
                <tr>
                  <td colSpan={2}><strong>Número de stock</strong></td>
                  <td>9991</td>
                </tr>
                <tr>
                  <td colSpan={2}><strong>Año</strong></td>
                  <td>2023</td>
                </tr>
                <tr>
                  <td colSpan={2}><strong>Fabricante</strong></td>
                  <td>m&a</td>
                </tr>
                <tr>
                  <td colSpan={2}><strong>Modelo</strong></td>
                  <td>DDFT-2808</td>
                </tr>
                <tr>
                  <td colSpan={2}><strong>Condición</strong></td>
                  <td>Nuevo</td>
                </tr>
                <tr>
                  <td colSpan={2}><strong>VIN</strong></td>
                  <td>123-234-234</td>
                </tr>
              </tbody>
            </Table>
            </div>
          </Row>
        </div>
      ) : null}
    </Container>
  );
};

export default Product;
