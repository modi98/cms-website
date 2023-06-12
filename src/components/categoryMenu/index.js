import ItemCategory from "../../components/itemCategory";
import Form from "react-bootstrap/Form";
import { useState } from "preact/hooks";
import SearchBar from "../../components/searchBar";
import ItemButton from "../../components/button";
import Button from "react-bootstrap/Button";
import ToggleButton from "../../components/toggleButton"
import "./style.css";

const CategoryMenu = () => {
  const items = [
    { title: "Categoría 1", image: "https://picsum.photos/2000/815" },
    { title: "Categoría 2", image: "https://picsum.photos/2000/826" },
    { title: "Categoría 3", image: "https://picsum.photos/2000/837" },
    { title: "Categoría 4", image: "https://picsum.photos/2000/816" },
    { title: "Categoría 5", image: "https://picsum.photos/2000/827" },
    { title: "Categoría 6", image: "https://picsum.photos/2000/838" },
    { title: "Categoría 7", image: "https://picsum.photos/2000/819" },
    { title: "Categoría 8", image: "https://picsum.photos/2000/820" },
    { title: "Categoría 9", image: "https://picsum.photos/2000/831" },
    { title: "Categoría 10", image: "https://picsum.photos/2000/812" },
    { title: "Categoría 11", image: "https://picsum.photos/2000/823" },
    { title: "Categoría 12", image: "https://picsum.photos/2000/834" },
  ];
  return (
    <div>
      <div className="d-flex" style={{justifyContent: "space-around"}}>
        {/* Aquí están los botones de las categorias. */}
        <ToggleButton/>
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
        <Butto variant="secondary" size="lg" active className="flex-fill" style={{ marginRight: "5px" }} >
          INVENTARIO EL PASO TEXAS
        </Butto>
        <Button variant="secondary" size="lg" active className="flex-fill" style={{ marginRight: "5px" }} >
          INVENTARIO REFACCIONES
        </Button>
      </div>
      <divn className="category-container mt-2">
        <ItemCategory categories={items} />
      </divn>
    </div>
  );
};

export default CategoryMenu;
