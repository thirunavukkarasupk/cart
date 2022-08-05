import { React } from 'react';
import './App.scss';
import Products from './components/Products';
import Cart from './components/cart/Cart';

const App = (context) =>
	<div className="App" role="App">
		<div className="Container">
			<Products { ...context }/>
		</div>
		<div className="Container">
			<Cart { ...context }/>
		</div>
	</div>;

export default App;
