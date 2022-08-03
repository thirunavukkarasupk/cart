
import { React } from 'react';
import Basket from './Basket';

const Cart = (context) => {
	const { state: { total }} = context;

	return <div>
		<h2>CART</h2><br/>
		<Basket { ...context }/>
		<h2>TOTAL:{total}</h2>
	</div>;
};

export default Cart;
