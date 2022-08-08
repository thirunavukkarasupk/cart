
const updateQuantity = {

	addFruit: ({ state: { cartItems }, data: { fruit, quantity }}) =>
		({ ...cartItems, [fruit]: quantity + 1 }),

	deleteFruit: ({ state: { cartItems }, data: { fruit, quantity }}) =>
		({ ...cartItems, [fruit]: quantity - 1 }),
};

export default updateQuantity;
