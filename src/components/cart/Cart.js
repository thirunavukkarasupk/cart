
import { React } from 'react';
import Basket from './Basket';
import Total from './TotalButton';

const Cart = (context) => {
	const { state: { total }} = context;

	return <div>
		<h2>CART</h2><br/>
		<Basket { ...context }/>
		<Total { ...context }/>
		<h4>{total}</h4>
	</div>;
};

export default Cart;
