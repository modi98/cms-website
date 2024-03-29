import { usePrerenderData } from "@preact/prerender-data-provider";
import { h } from "preact";
import Spinner from "react-bootstrap/Spinner";
import SearchProducts from "../../components/searchProducts";
import { useState } from "preact/hooks";

const Products = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  const [loadFallback, setLoadFallback] = useState(false);

  setTimeout(() => setLoadFallback(true), 5000);

  if (!isLoading && data) {
    return <SearchProducts data={data} />;
  }
  return (
    <>
      {!loadFallback ? (
        <div className="spinner-container">
          <Spinner animation="border" role="status" className="m-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="text-center">No hay productos</div>
      )}
    </>
  );
};

export default Products;
