import { h } from 'preact';
import { Suspense } from 'preact/compat';
import { usePrerenderData } from '@preact/prerender-data-provider';

const Products = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  if (!isLoading) console.log(data);
  return (
    <div>
      Hello
    </div>
  );
};

export default Products;
