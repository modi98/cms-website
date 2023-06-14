import { useEffect, useState } from "preact/hooks";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ItemCard from "../itemCard";
import ProductFilters from "../productFilters";
import InventoryMeny from "../inventoryMenu";

const ProductsComponent = ({ data }) => {
  const [products, setProducts] = useState(data.products);
  const [searchInput, setSearchInput] = useState("");
  const [inMexico, setInMexico] = useState(false);
  const [inUs, setInUs] = useState(false);
  const [manufacturerFilter, setManufacturerFilter] = useState([]);
  const [conditionFilter, setConditionFilter] = useState([]);

  if (typeof window !== "undefined" && localStorage.getItem("search")) {
    setSearchInput(localStorage.getItem("search"));
    localStorage.removeItem("search");
  }

  const handleSearchFilter = (e) => {
    setSearchInput(e.target.value);
  };

  const handleMxFilter = () => {
    setInMexico(!inMexico);
  };

  const handleUsFilter = () => {
    setInUs(!inUs);
  };

  const handleManufacturerFilter = (m) => {
    const index = manufacturerFilter.indexOf(m);
    if (index >= 0) {
      setManufacturerFilter(manufacturerFilter.filter((val) => val !== m));
      return;
    }
    setManufacturerFilter([...manufacturerFilter, m]);
  };

  const handleConditionFilter = (c) => {
    const index = conditionFilter.indexOf(c);
    if (index >= 0) {
      setConditionFilter(conditionFilter.filter((val) => val !== c));
      return;
    }
    setConditionFilter([...conditionFilter, c]);
  };

  const filterByCondition = (products) => {
    if (!conditionFilter.length) return products;
    return products.filter((product) =>
      conditionFilter.includes(product.details.condition)
    );
  };

  const filterByManufacturer = (products) => {
    if (!manufacturerFilter.length) return products;
    return products.filter((product) =>
      manufacturerFilter.includes(product.details.manufacturer)
    );
  };

  const filterByCountry = (products) => {
    if ((!inMexico && !inUs) || (inMexico && inUs)) {
      return products;
    }
    if (inMexico) return products.filter((product) => product.details.inMx);
    return products.filter((product) => product.details.inUs);
  };

  const filterBySearch = (products) => {
    const regex = /[*#_\n]/g;
    return products.filter(
      (product) =>
        product.details.title
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        product.details.description
          .toLowerCase()
          .replace(regex, "")
          .replace(/\s/g, "")
          .indexOf(
            searchInput.toLowerCase().replace(regex, "").replace(/\s/g, "")
          ) >= 0
    );
  };

  const runAllFilters = () => {
    setProducts(
      filterBySearch(
        filterByCountry(
          filterByManufacturer(filterByCondition([...data?.products]))
        )
      )
    );
  };

  useEffect(() => {
    runAllFilters();
  }, [inMexico, inUs, conditionFilter, manufacturerFilter, searchInput]);

  return (
    <div>
      {!data?.filters?.country ? (
        <Row>
          <InventoryMeny />
        </Row>
      ) : null}
      <Row>
        <Col className="mt-4" xs={3}>
          <ProductFilters
            searchInputValue={searchInput}
            country={data?.filters?.country}
            condition={data?.filters?.condition}
            manufacturers={data?.filters?.manufacturers}
            handleUsFilter={handleUsFilter}
            handleMxFilter={handleMxFilter}
            handleManufacturerFilter={handleManufacturerFilter}
            handleConditionFilter={handleConditionFilter}
            handleSearchFilter={handleSearchFilter}
          />
        </Col>
        <Col>
          <div className="products-container">
            {products?.length ? (
              products.map((product) => (
                <ItemCard
                  title={product.details.title}
                  description={product.details.description}
                  image={product.details.image}
                  itemLink={`/producto/${product.id}`}
                  location={product.details.location}
                  phone={product.details.phone}
                  email={product.details.email}
                />
              ))
            ) : (
              <div>No hay productos</div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductsComponent;
