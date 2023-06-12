import ItemCategory from "../../components/itemCategory";
import SearchBar from "../../components/searchBar";
import ItemButton from "../../components/button";
import Button from "react-bootstrap/Button";
import ToggleButtonMenu from "../../components/toggleButton"
import "./style.css";

const CategoryMenu = ({ categories }) => {
  return (
    <div>
      <div className="d-flex" style={{justifyContent: "space-around"}}>
        <ToggleButtonMenu/>
      </div>
      <div className="mb-5 d-flex">
        <div className="py-0 me-2 flex-grow-1">
          <SearchBar />
        </div>
        <div className="py-0">
          <ItemButton title={"Buscar"} />
        </div>
      </div>

      <div className="buttons-container mb-5 d-flex">
        <Button variant="secondary" size="lg" active className="flex-fill" style={{ marginRight: "5px" }} >
          INVENTARIO MEXICO
        </Button>
        <Button variant="secondary" size="lg" active className="flex-fill" style={{ marginRight: "5px" }} >
          INVENTARIO EL PASO TEXAS
        </Button>
        <Button variant="secondary" size="lg" active className="flex-fill" style={{ marginRight: "5px" }} >
          INVENTARIO REFACCIONES
        </Button>
      </div>
      <divn className="category-container mt-2">
        <ItemCategory categories={categories} />
      </divn>
    </div>
  );
};

export default CategoryMenu;
