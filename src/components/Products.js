import { React } from 'react';
import AddToCart from './AddtoCart';

const Products = (context) => {
	const { config: { fruits }} = context;

	return fruits.map((fruit, index) =>
		<div key={ index }>
			<div className="left'">
				<h4>{fruit.item}</h4><h4>Rs.{fruit.rate}/kg</h4>
			</div>
			<div className="right">
				<AddToCart { ...{ ...context, item: fruit } }/>
			</div>
		</div>);
};

export default Products;
