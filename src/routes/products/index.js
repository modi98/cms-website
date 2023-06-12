import { usePrerenderData } from "@preact/prerender-data-provider";
import { h } from "preact";
import Spinner from "react-bootstrap/Spinner";
import SearchProducts from "../../components/searchProducts";

const Products = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  console.log(data, isLoading)
  if (!isLoading && data) {
    return <SearchProducts data={data} />;
  }
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Products;
