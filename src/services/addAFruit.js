const addAFruit = {
	addFruit: ({ state: { cartItems }, data: { item: fruit }}) =>
		({ ...cartItems, [fruit]: (cartItems[fruit] || 0) + 1 }),
};

export default addAFruit;
