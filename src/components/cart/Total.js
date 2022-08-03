import { React } from 'react';

const Total = (context) =>

	<button
		onClick={ () => context.actions.getTotal() }
	>
		TOTAL
	</button>;

export default Total;
