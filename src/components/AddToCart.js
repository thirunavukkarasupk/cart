
import { React } from 'react';

const AddToCart = (context) =>
	<button
		onClick={ () => {
			context.actions.addFruit(context);
			context.actions.getTotal(context);
		} }
	>
		AddToCart
	</button>
	;

export default AddToCart;
