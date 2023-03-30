import { h } from 'preact';
import { usePrerenderData } from '@preact/prerender-data-provider';

const Product = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	return (
		<div>
			product
		</div>
	);
};

export default Product;