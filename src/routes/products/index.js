import { usePrerenderData } from "@preact/prerender-data-provider";
import { h } from "preact";
import Spinner from "react-bootstrap/Spinner";
import SearchProducts from "../../components/searchProducts";

const Products = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  if (!isLoading && data) {
    return <SearchProducts data={data} />;
  }
  return (
    <div className="spinner-container">
      <Spinner animation="border" role="status" className="m-auto">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Products;
