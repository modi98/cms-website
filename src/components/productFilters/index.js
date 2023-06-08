import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Form, FormControl } from "react-bootstrap";

const ProductFilters = ({ manufacturers, condition, handleUsFilter, handleMxFilter, handleManufacturerFilter, handleConditionFilter, handleSearchFilter }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>Búsqueda rápida</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <FormControl
            type="text"
            placeholder="Ingresa palabras clave"
            className="mr-sm-2"
            onChange={handleSearchFilter}
          />
        </ListGroup.Item>
      </ListGroup>

      {manufacturers ? (
        <>
          <Card.Header>Fabricante</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {Object.keys(manufacturers).map((key) => (
                <Form.Check
                  type="checkbox"
                  id={key}
                  label={`${key} \(${manufacturers[key]}\)`}
                  onChange={() => handleManufacturerFilter(key)}
                />
              ))}
            </ListGroup.Item>
          </ListGroup>
        </>
      ) : null}

      {condition ? (
        <>
          <Card.Header>Condición</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {Object.keys(condition).map((key) => (
                <Form.Check
                  type="checkbox"
                  id={key}
                  label={`${key} \(${condition[key]}\)`}
                  onChange={() => handleConditionFilter(key)}
                />
              ))}
            </ListGroup.Item>
          </ListGroup>
        </>
      ) : null}

      <Card.Header>País</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Form.Check
            type="switch"
            id="switch-mx"
            label="México"
            onChange={handleMxFilter}
          />
          <Form.Check
            type="switch"
            id="switch-us"
            label="Estados Unidos"
            onChange={handleUsFilter}
          />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default ProductFilters;
