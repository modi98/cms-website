import { h } from "preact";
import { usePrerenderData } from "@preact/prerender-data-provider";
import SearchProducts from "../../components/searchProducts";

const Products = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  if (!isLoading && data) {
    return <SearchProducts data={data} />;
  }
  return <></>;
};

export default Products;
