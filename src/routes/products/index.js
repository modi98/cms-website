import { h } from "preact";
import { usePrerenderData } from "@preact/prerender-data-provider";
import ItemCard from "../../components/itemCard";
import Form from "react-bootstrap/Form";
import { useState } from "preact/hooks";
import SearchBar from "../../components/searchBar";
import ItemButton from "../../components/button";

const filterBySearch = (search, data) => {
  const regex = /[*#_\n]/g;
  return data.filter(
    (product) =>
      product.details.title.toLowerCase().includes(search.toLowerCase()) ||
      product.details.description
        .toLowerCase()
        .replace(regex, "")
        .replace(/\s/g, "")
        .indexOf(search.toLowerCase().replace(regex, "").replace(/\s/g, "")) >=
        0
  );
};

const Products = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  const [products, setProducts] = useState(data.products.edges);
  const [searchInput, setSearchInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");

  const searchProducts = (e) => {
    setSearchInput(e.target.value);
    filterProducts(e.target.value, categoryInput);
  };

  const filterProducts = (search, category) => {
    let newProducts = [];
    if (category === "") {
      newProducts = data.products.edges;
    } else {
      newProducts = data.products.edges.filter(
        (product) => product.details.category === category
      );
    }
    const result = filterBySearch(search, newProducts);
    setProducts(result);
  };

  return (
    <div>
      {!isLoading && data ? (
        <>
          <div className="mb-2 d-flex">
            <div className="py-2 me-2 flex-grow-1">
              <SearchBar
                searchInput={searchInput}
                setSearchInput={searchProducts}
              />
            </div>
            <div className="py-2">
              <ItemButton title={"Buscar"} />
            </div>
          </div>
          Filtro:{" "}
          <Form.Select
            className="filter-box"
            onChange={(e) => {
              setCategoryInput(e.currentTarget.value);
              filterProducts(searchInput, e.currentTarget.value);
            }}
          >
            <option value=""></option>
            {data.categories.edges.map((category) => (
              <option value={category.details.title}>
                {category.details.title}
              </option>
            ))}
          </Form.Select>
          {searchInput}
          <div className="products-container mt-2">
            {products.map((product) => (
              <ItemCard
                title={product.details.title}
                description={product.details.description}
                image={product.details.image}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Products;
