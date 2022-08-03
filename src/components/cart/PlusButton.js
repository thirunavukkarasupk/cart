import { React } from 'react';

const PlusButton = ({ actions, data }) =>
	<button
		onClick={ () => actions.plusFruit(data) }
	>
		+
	</button>;

export default PlusButton;
