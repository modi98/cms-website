import { h } from "preact";
import { usePrerenderData } from "@preact/prerender-data-provider";
import ItemCard from "../../components/itemCard";
import Form from "react-bootstrap/Form";
import { useState } from "preact/hooks";

const Products = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  const [products, setProducts] = useState(data.products.edges);

  const filterProducts = (category) => {
    if (category === '') {
      setProducts(data.products.edges);
      return;
    }
    const filteredProducts = data.products.edges.filter((product) => product.details.category === category);
    setProducts(filteredProducts);
  }

  return (
    <div>
      {!isLoading && data ? (
        <>
          <Form.Select onChange={(e) => {
            filterProducts(e.currentTarget.value)
          }}>
            <option value=""></option>
            {data.categories.edges.map((category) => (
              <option value={category.details.title}>{category.details.title}</option>
            ))}
          </Form.Select>
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
