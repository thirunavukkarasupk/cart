/* eslint-disable no-console */

const addFruit = ({ state: { cartItems }, data: fruit }) =>
	({
		cartItems: { ...cartItems, [fruit]: cartItems[fruit] + 1 },
	});

const plusFruit = ({ state: { cartItems }, data: { fruit, quantity }}) =>
	({
		cartItems: { ...cartItems, [fruit]: quantity + 1 },
	});

const minusFruit = ({ state: { cartItems }, data: { fruit, quantity }}) =>
	({
		cartItems: { ...cartItems, [fruit]: quantity - 1 },
	});

const actions = {
	addFruit,
	plusFruit,
	minusFruit,
};

export default actions;
