import Button from "react-bootstrap/Button";
import { Link } from "preact-router/match";

const InventoryMeny = () => {
  return (
    <div className="buttons-container mb-5 d-flex">
      <Link href="/mexico">
        <Button
          variant="primary"
          size="lg"
          active
          className="flex-fill"
          style={{ marginRight: "5px" }}
        >
          INVENTARIO MEXICO
        </Button>
      </Link>
      <Link href="/usa">
        <Button
          variant="primary"
          size="lg"
          active
          className="flex-fill"
          style={{ marginRight: "5px" }}
        >
          INVENTARIO EL PASO TEXAS
        </Button>
      </Link>
      <Link href="/inventario">
        <Button
          variant="primary"
          size="lg"
          active
          className="flex-fill"
          style={{ marginRight: "5px" }}
        >
          INVENTARIO REFACCIONES
        </Button>
      </Link>
    </div>
  );
};

export default InventoryMeny;
