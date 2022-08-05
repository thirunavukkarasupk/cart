import addAFruit from '../services/addAFruit';
import calculateTotal from '../services/calculateTotal';
import updateQuantity from '../services/updateQuantity';

const addFruit = (context) =>
	({
		cartItems: addAFruit.addFruit(context),
	});

const plusFruit = (context) =>
	({
		cartItems: updateQuantity.addFruit(context),
	});

const minusFruit = (context) =>
	({
		cartItems: updateQuantity.deleteFruit(context),
	});

const getTotal = (context) =>
	({
		total: calculateTotal.getTotal(context),
	});

const actions = {
	addFruit,
	plusFruit,
	minusFruit,
	getTotal,
};

export default actions;
