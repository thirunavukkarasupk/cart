import { React } from 'react';
import { map } from '@laufire/utils/collection';
import { entries } from '@laufire/utils/lib';
import PlusButton from './PlusButton';
import MinusButton from './MinusButton';

const Basket = (context) => {
	const { state: { cartItems }} = context;

	return map(entries(cartItems), ([fruit, quantity]) =>
		<div key={ fruit }>
			<h4>{fruit}</h4>
			<MinusButton { ...{ ...context, data: { fruit, quantity }} }/>
			<h4>{quantity}</h4>
			<PlusButton { ...{ ...context, data: { fruit, quantity }} }/>
		</div>);
};

export default Basket;
