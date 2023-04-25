import { h } from "preact";
import { Table } from "react-bootstrap";

const Specs = ({ productDetails }) => {
  return (
    <>
      {productDetails.year ||
      productDetails.manufacturer ||
      productDetails.model ||
      productDetails.vin ||
      productDetails.condition ||
      productDetails.stockNum ? (
        <>
          <h3 className="pt-2">General</h3>
          <Table striped>
            <tbody>
              {productDetails.year ? (
                <tr>
                  <td className="w-50" colSpan={2}>
                    <strong>Año</strong>
                  </td>
                  <td>{productDetails.year}</td>
                </tr>
              ) : null}
              {productDetails.manufacturer ? (
                <tr>
                  <td className="w-50" colSpan={2}>
                    <strong>Fabricante</strong>
                  </td>
                  <td>{productDetails.manufacturer}</td>
                </tr>
              ) : null}
              {productDetails.model ? (
                <tr>
                  <td className="w-50" colSpan={2}>
                    <strong>Modelo</strong>
                  </td>
                  <td>{productDetails.model}</td>
                </tr>
              ) : null}
              {productDetails.vin ? (
                <tr>
                  <td className="w-50" colSpan={2}>
                    <strong>VIN</strong>
                  </td>
                  <td>{productDetails.vin}</td>
                </tr>
              ) : null}
              {productDetails.condition ? (
                <tr>
                  <td className="w-50" colSpan={2}>
                    <strong>Condición</strong>
                  </td>
                  <td>{productDetails.condition}</td>
                </tr>
              ) : null}
              {productDetails.stockNum ? (
                <tr>
                  <td className="w-50" colSpan={2}>
                    <strong>Número de stock</strong>
                  </td>
                  <td>{productDetails.stockNum}</td>
                </tr>
              ) : null}
            </tbody>
          </Table>
        </>
      ) : null}

      {productDetails.engineDisplacement ||
      productDetails.fuel ||
      productDetails.turbo ? (
        <>
          <h3 className="pt-2">Motor</h3>
          <Table striped>
            <tbody>
              {productDetails.engineDisplacement ? (
                <tr>
                  <td className="w-50" colSpan={2}>
                    <strong>Engine Displacement</strong>
                  </td>
                  <td>{productDetails.engineDisplacement}</td>
                </tr>
              ) : null}
              {productDetails.fuel ? (
                <tr>
                  <td className="w-50" colSpan={2}>
                    <strong>Combustible</strong>
                  </td>
                  <td>{productDetails.fuel}</td>
                </tr>
              ) : null}
              {productDetails.turbo ? (
                <tr>
                  <td className="w-50" colSpan={2}>
                    <strong>Turbo</strong>
                  </td>
                  <td>{productDetails.turbo}</td>
                </tr>
              ) : null}
            </tbody>
          </Table>
        </>
      ) : null}

      {productDetails.transmission ? (
        <>
          <h3 className="pt-2">Chasis</h3>
          <Table striped>
            <tbody>
              <tr>
                <td className="w-50" colSpan={2}>
                  <strong>Transmisión</strong>
                </td>
                <td>{productDetails.transmission}</td>
              </tr>
            </tbody>
          </Table>
        </>
      ) : null}

      {productDetails.steeringWheel ? (
        <>
          <h3 className="pt-2">Interior</h3>
          <Table striped>
            <tbody>
              <tr>
                <td className="w-50" colSpan={2}>
                  <strong>Ubicacion del Volante</strong>
                </td>
                <td>{productDetails.steeringWheel}</td>
              </tr>
            </tbody>
          </Table>
        </>
      ) : null}
    </>
  );
};

export default Specs;
