const addAFruit = {
	addFruit: ({ state: { cartItems }, data: fruit }) =>
		({ ...cartItems, [fruit.item]: (cartItems[fruit.item] || 0) + 1 }),
};

export default addAFruit;
