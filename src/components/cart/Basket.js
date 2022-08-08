import { React } from 'react';
import { map, filter } from '@laufire/utils/collection';
import { entries } from '@laufire/utils/lib';
import PlusButton from './PlusButton';
import MinusButton from './MinusButton';

const Basket = (context) => {
	const { state: { cartItems }} = context;

	return map(entries(filter(cartItems, (quantity) => quantity !== 0)),
		([fruit, quantity]) =>
			<div key={ fruit }>
				<h4>{fruit}</h4>
				<MinusButton { ...{ ...context, data: { fruit, quantity }} }/>
				<h4>{quantity}</h4>
				<PlusButton { ...{ ...context, data: { fruit, quantity }} }/>
			</div>);
};

export default Basket;
