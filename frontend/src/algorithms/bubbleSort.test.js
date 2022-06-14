import { bubbleSort } from '.';

it('Should not swap indexes', () => {
	const array = [1, 2];
	const move = bubbleSort(array)[0];
	expect(move.swap).toBeFalsy();
});

it('Should swap indexes', () => {
	const array = [2, 1];
	const move = bubbleSort(array)[0];
	expect(move.swap).toBeTruthy();
});
