import { React } from 'react';
import './App.scss';
import Products from './components/Products';
import Cart from './components/cart/Cart';
import { peek } from '@laufire/utils/debug';

const App = (context) => {
	const { state } = context;

	peek(state);

	return <div className="App" role="App">
		<div>
			<Products { ...context }/>
		</div>
		<div>
			<Cart { ...context }/>
		</div>
	</div>;
};

export default App;
