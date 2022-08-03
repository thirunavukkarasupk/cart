
import { React } from 'react';

const AddToCart = ({ actions, item }) =>
	<button
		onClick={ () => {
			actions.addFruit(item);
		} }
	>
		AddToCart
	</button>
	;

export default AddToCart;
