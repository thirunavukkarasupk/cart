import { React } from 'react';

const PlusButton = (context) => {
	const { actions, data } = context;

	return (
		<button
			onClick={ () => {
				actions.plusFruit(data);
				actions.getTotal(data);
			} }
		>
			+
		</button>);
};

export default PlusButton;
