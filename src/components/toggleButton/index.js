import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { Link } from "preact-router/match";

const ToggleButtonMenu = () => {
  return (
    <ToggleButtonGroup type="checkbox" className="flex-wrap">
      <Link href="/inventario/inventario-completo-construcción">
        <ToggleButton id="tbg-check-1" value={1} variant="secondary">
          Construcción
        </ToggleButton>
      </Link>
      <Link href="/inventario/agrícola">
        <ToggleButton id="tbg-check-2" value={2} variant="secondary">
          Agricola
        </ToggleButton>
      </Link>
      <Link href="/inventario/inventario-completo-camiones">
        <ToggleButton id="tbg-check-3" value={3} variant="secondary">
          Camiones
        </ToggleButton>
      </Link>
      <Link href="/inventario/inventario-completo-remolques">
        <ToggleButton id="tbg-check-4" value={4} variant="secondary">
          Remolques
        </ToggleButton>
      </Link>
      <Link href="/inventario/aditamentos-construcción">
        <ToggleButton id="tbg-check-5" value={5} variant="secondary">
          Construcción Aditamentos
        </ToggleButton>
      </Link>
      <Link href="/inventario/aditamentos-agrícolas">
        <ToggleButton id="tbg-check-6" value={6} variant="secondary">
          Aditamentos Agricolas
        </ToggleButton>
      </Link>
      <Link href="/inventario/máquinas-para-partes">
        <ToggleButton id="tbg-check-7" value={7} variant="secondary">
          Maquinaria para Partes
        </ToggleButton>
      </Link>
      <Link href="/inventario/otros-artículos">
        <ToggleButton id="tbg-check-8" value={8} variant="secondary">
          Otros
        </ToggleButton>
      </Link>
    </ToggleButtonGroup>
  );
};

export default ToggleButtonMenu;
