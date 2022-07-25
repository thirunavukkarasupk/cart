import { React } from 'react';

const Cart = ({ context }) =>
	<div>
		<h2>CART</h2><br/>
		<h2>TOTAL:{context.state.total}</h2>
	</div>;

export default Cart;
