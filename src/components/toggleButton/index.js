import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

const ToggleButton = () => {
  return (
    <ToggleButtonGroup type="checkbox" className="flex-wrap">
      <ToggleButton id="tbg-check-1" value={1} variant="secondary">
        Construcción
      </ToggleButton>
      <ToggleButton id="tbg-check-2" value={2} variant="secondary">
        Agricola
      </ToggleButton>
      <ToggleButton id="tbg-check-3" value={3} variant="secondary">
        Camiones
      </ToggleButton>
      <ToggleButton id="tbg-check-4" value={4} variant="secondary">
        Remolques
      </ToggleButton>
      <ToggleButton id="tbg-check-5" value={5} variant="secondary">
        Construcción Aditamentos
      </ToggleButton>
      <ToggleButton id="tbg-check-6" value={6} variant="secondary">
        Aditamentos Agricolas
      </ToggleButton>
      <ToggleButton id="tbg-check-7" value={7} variant="secondary">
        Maquinaria para Partes
      </ToggleButton>
      <ToggleButton id="tbg-check-8" value={8} variant="secondary">
        Otros
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleButton;
