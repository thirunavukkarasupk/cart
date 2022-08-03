/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';

const MinusButton = (context) => {
	const { actions, data } = context;

	return <button
		onClick={ () => actions.minusFruit(data) }
	       >
		-
	</button>;
};

export default MinusButton;
