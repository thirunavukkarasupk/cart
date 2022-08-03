import { map, entries } from '@laufire/utils/collection';

const calculateTotal = {
	getTotal: (context) => {
		const { config: { fruits }, state: { cartItems }} = context;
		const priceList = map(entries(cartItems), ([item, quantity]) =>
			calculateTotal.getUnitPrice(fruits, item) * quantity);

		return priceList.reduce((acc, curr) => acc + curr);
	},
	getUnitPrice: (fruits, item) => {
		const fruitData = fruits.find((fruit) => fruit.item === item);

		return fruitData.rate
		+ (fruitData.rate * (fruitData.tax || 0))
		- (fruitData.rate * (fruitData.discount || 0));
	},

};

export default calculateTotal;
