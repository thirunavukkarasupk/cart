import { React } from 'react';

const MinusButton = (context) => {
	const { actions, data } = context;

	return (
		<button
			onClick={ () => {
				actions.minusFruit(data);
				actions.getTotal(data);
			} }
		>
			-
		</button>);
};

export default MinusButton;
