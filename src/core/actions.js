
import calculateTotal from '../services/calculateTotal';

const addFruit = ({ state: { cartItems }, data: fruit }) =>
	({
		cartItems: { ...cartItems, [fruit]: (cartItems[fruit] || 0) + 1 },
	});

const plusFruit = ({ state: { cartItems }, data: { fruit, quantity }}) =>
	({
		cartItems: { ...cartItems, [fruit]: quantity + 1 },
	});

const minusFruit = ({ state: { cartItems }, data: { fruit, quantity }}) =>
	({
		cartItems: { ...cartItems, [fruit]: quantity - 1 },
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
