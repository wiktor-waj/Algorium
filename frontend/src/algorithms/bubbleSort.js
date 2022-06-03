export const bubbleSort = (array) => {
	let moves = [];
	for (let i = 0; i < array.length - 1; ++i) {
		for (let j = 0; j < array.length - i - 1; ++j) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				moves.push({ indexLeft: j, indexRight: j + 1, swap: true });
			} else {
				moves.push({ indexLeft: j, indexRight: j + 1, swap: false });
			}
		}
	}
	console.log(array);
	return moves;
};
