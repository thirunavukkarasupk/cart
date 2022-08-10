
import { React } from 'react';

const AddToCart = ({ actions, data }) =>
	<button
		onClick={ () => {
			actions.addFruit(data);
			actions.getTotal(data);
		} }
	>
		AddToCart
	</button>
	;

export default AddToCart;
