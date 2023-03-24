import { h } from "preact";
import { usePrerenderData } from "@preact/prerender-data-provider";
import ItemCard from '../../components/itemCard';

const Products = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  console.log(data)
  return (
    <div>
      {!isLoading && data ? (
        <>
          {data.data.edges.map((product) => (
            <ItemCard title={product.details.title} description={product.details.description} image={product.details.image} />
          ))}
        </>
      ) : null}
    </div>
  )
};

export default Products;
