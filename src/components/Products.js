import { React } from 'react';
import AddToCart from './AddToCart';

const Products = (context) => {
	const { config: { fruits }} = context;

	return fruits.map((fruit, index) =>
		<div key={ index }>
			<div>
				<h4>{fruit.item}</h4><h4>Rs.{fruit.rate}/kg</h4>
			</div>
			<div>
				<AddToCart { ...{ ...context, item: fruit.item } }/>
			</div>
		</div>);
};

export default Products;
