import ToggleButtonMenu from "../../components/toggleButton";
import ItemButton from "../../components/button";
import SearchBar from "../../components/searchBar";

const SearchMenu = () => {
  return (
    <>
      <div className="d-flex" style={{ justifyContent: "space-around" }}>
        <ToggleButtonMenu />
      </div>
      <div className="mb-5 d-flex">
        <div className="py-0 me-2 flex-grow-1">
          <SearchBar />
        </div>
        <div className="py-0">
          <ItemButton title={"Buscar"} />
        </div>
      </div>
    </>
  );
};

export default SearchMenu;
