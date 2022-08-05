
import { React } from 'react';
import Basket from './Basket';

const Cart = (context) => {
	const { state: { total }} = context;

	return <div>
		<h2>CART</h2><br/>
		<Basket { ...context }/>
		<h4>TOTAL: { total}</h4>
	</div>;
};

export default Cart;
