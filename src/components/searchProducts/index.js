import { useState } from "preact/hooks";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import ItemCard from "../../components/itemCard";
import SearchBar from "../../components/searchBar";

const ProductsComponent = ({ data }) => {
  const [products, setProducts] = useState(data?.products?.edges);
  const [searchInput, setSearchInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");

  const filterBySearch = (search, data) => {
    const regex = /[*#_\n]/g;
    return data.filter(
      (product) =>
        product.details.title.toLowerCase().includes(search.toLowerCase()) ||
        product.details.description
          .toLowerCase()
          .replace(regex, "")
          .replace(/\s/g, "")
          .indexOf(
            search.toLowerCase().replace(regex, "").replace(/\s/g, "")
          ) >= 0
    );
  };

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

  return data && data.categories && data.products ? (
    <div>
      <div className="mt-4">
        <Row>
          <Col className="mt-auto d-flex">
            <div className="me-2 flex-grow-1">
              <SearchBar
                searchInput={searchInput}
                setSearchInput={searchProducts}
              />
            </div>
          </Col>
          <Col>
            <Form.Select
              className="filter-box"
              onChange={(e) => {
                setCategoryInput(e.currentTarget.value);
                filterProducts(searchInput, e.currentTarget.value);
              }}
            >
              <option value="">Categorías</option>
              {data.categories.edges.map((category) => (
                <option value={category.details.title}>
                  {category.details.title}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </div>
      <div className="products-container mt-2">
        {products.length ? (
          products.map((product) => (
            <ItemCard
              title={product.details.title}
              description={product.details.description}
              image={product.details.image}
              itemLink={`/product/${product.id}`}
              location={product.details.location}
              phone={product.details.phone}
              email={product.details.email}
            />
          ))
        ) : (
          <div>No hay productos</div>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ProductsComponent;
