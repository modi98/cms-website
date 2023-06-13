import { useState } from "preact/hooks";
import { route } from "preact-router";
import ToggleButtonMenu from "../../components/toggleButton";
import ItemButton from "../../components/button";
import SearchBar from "../../components/searchBar";

const SearchMenu = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    localStorage.setItem("search", searchInput);
    route("/inventario");
  };

  return (
    <>
      <div className="d-flex" style={{ justifyContent: "space-around" }}>
        <ToggleButtonMenu />
      </div>
      <div className="mb-5 d-flex">
        <div className="py-0 me-2 flex-grow-1">
          <SearchBar
            handleSearch={handleSearch}
            setSearchInput={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="py-0">
          <ItemButton onClick={handleSearch} title={"Buscar"} />
        </div>
      </div>
    </>
  );
};

export default SearchMenu;
