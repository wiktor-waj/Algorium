import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { mergeSort } from '../../../algorithms';
import { MergeSort } from './MergeSort';


const deepClone = (arr) => JSON.parse(JSON.stringify(arr));

const useVisualNumbers = (defaultNumbersLength) => {
	const [numbers, setNumbers] = React.useState([]);
	const [defaultNumbers, setDefaultNumbers] = React.useState([]);

	const makeRandomNumbers = (numbersLength) => {
		const _numbers = [];
		for (let i = 0; i < numbersLength; i++) {
			_numbers.push({
				id: uuidv4(),
				value: Math.floor(Math.random() * 10),
				color: '#000',
				isSorting: false,
				isSorted: false,
			});
		}
		setNumbers(_numbers);
		setDefaultNumbers(deepClone(_numbers));
	};

	const makeNumberObj = (value) => {
		return {
			id: uuidv4(),
			value,
			color: '#000',
			isSorting: false,
			isSorted: false,
		};
	};

	const updateNumbersByListValues = (listNumbers) => {
		const updatedArray = [];
		listNumbers.forEach((number) => {
			updatedArray.push(makeNumberObj(number));
		});
		setNumbers(updatedArray);
		setDefaultNumbers(deepClone(updatedArray));
	};

	React.useEffect(() => {
		makeRandomNumbers(defaultNumbersLength);
	}, [defaultNumbersLength]);

	return {
		numbers,
		setNumbers,
		makeRandomNumbers,
		defaultNumbers,
		updateNumbersByListValues,
	};
};

const defaultNumbersLength = 5;

export const useMergeSort = () => {
	const {
		numbers,
		setNumbers,
		makeRandomNumbers,
		defaultNumbers,
		updateNumbersByListValues,
	} = useVisualNumbers(defaultNumbersLength);
	const [moves, setMoves] = React.useState([]);
	const [isPlayed, setIsPlayed] = React.useState(false);
	const [currentIndex, setCurrentIndex] = React.useState(0);

	const step = () => {
		if (moves.length === 0) {
			setMoves(getListMoves());
		} else {
			updateArray();
		}
	};

	const updateArray = () => {
		if (currentIndex < moves.length) {
			let m = currentIndex;
			if (currentIndex === 0) {
				while (moves[m].side === '') {
					++m;
				}
				setCurrentIndex(m);
			} else {
				let prevNum = deepClone(numbers);
				let step = moves[currentIndex];
				for (let i = step.left; i <= step.right; i++) {
					switch (step.side) {
						case 'L':
							console.log("orange " + i)
							prevNum[i] = { ...prevNum[i], color: "orange" }
							setNumbers(prevNum);
							break;
						case 'R':
							console.log("purple " + i)
							prevNum[i] = { ...prevNum[i], color: "purple" }
							setNumbers(prevNum);
							break;
						case '':
							console.log("red or black " + i)
							prevNum[i] = { ...prevNum[i], color: step.isSorting ? "red" : "black" }
							setNumbers(prevNum);
							break;
						default: break;
					}
				}

				if (step.isSorted) {
					console.log(step.val)
					let j = 0;
					for (let i = step.left; i <= step.right; i++) {
						prevNum[i].value = step.val[j++]
						setNumbers(prevNum);
					}
				}
				setCurrentIndex(currentIndex + 1);
			}
		}
		else {
			if (isPlayed) {
				setIsPlayed(false);
			}
		}
	};

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	const play = async () => {
		setIsPlayed(true);
		let k = 500
		for (let ii = 0; ii <= moves.length; ii++) {
			let prevNum = deepClone(numbers);
			let step = moves[ii];
			await sleep(k);

			if (step.side === 'L') {
				for (let i = step.left; i <= step.right; i++) {
					prevNum[i] = { ...prevNum[i], color: "orange" }
				}
				ii++;
				step = moves[ii];
				for (let i = step.left; i <= step.right; i++) {
					prevNum[i] = { ...prevNum[i], color: "purple" }
				}
				setNumbers(prevNum);
				await sleep(k);
			}
			if (step.side === '') {
				while (step.side === '') {
					if (step.isSorting) {
						for (let i = step.left; i <= step.right; i++) {
							prevNum[i] = { ...prevNum[i], color: step.isSorting ? "red" : "black" }
						}
						++ii;
						step = moves[ii];
						for (let i = step.left; i <= step.right; i++) {
							prevNum[i] = { ...prevNum[i], color: step.isSorting ? "red" : "black" }
						}
						setNumbers(prevNum);
						await sleep(k);
						await sleep(k);
						++ii;
						step = moves[ii];
						if (step.isSorted) {
							let j = 0;
							for (let i = step.left; i <= step.right; i++) {
								numbers[i].value = step.val[j++]
								numbers[i].color = "#000"
							}
							setNumbers(numbers);
						}
					}
					ii++;
					if (ii < moves.length) {
						step = moves[ii];
					} else {
						break;
					}
				}
				if (ii < moves.length) {
					--ii;
				} else {
					let j = 0;
					let step = moves[ii-1]
					for (let i = step.left; i <= step.right; i++) {
						prevNum[i] = { ...prevNum[i], color:  "green", value: step.val[j++] }	
					}
					setNumbers(prevNum);

					break;
				}
			}
			await sleep(k);
		}

		setIsPlayed(false);
	};


	const stop = () => {
		setIsPlayed(false);
	};

	const makeDefaultValues = () => {
		setIsPlayed(false);
		setCurrentIndex(0);
		setMoves([]);
	};

	const reset = () => {
		setIsPlayed(false);
		makeDefaultValues();
		setNumbers(defaultNumbers);
	};

	const random = (numbersLength) => {
		setIsPlayed(false);
		makeDefaultValues();
		makeRandomNumbers(numbersLength);
	};

	const addNumbers = (listNumbers) => {
		setIsPlayed(false);
		makeDefaultValues();
		updateNumbersByListValues(listNumbers);
	};

	const getListMoves = React.useCallback(() => {
		const tempArray = numbers.map((number) => number.value);
		const moves = mergeSort(tempArray);
		return moves;
	}, [numbers]);

	React.useEffect(() => {
		if (moves.length === 0) {
			setMoves(getListMoves());
		}
	}, [moves, getListMoves]);


	return {
		step,
		play,
		stop,
		isPlayed,
		reset,
		addNumbers,
		random,
		AlgoVisual,
		algoVisualProps: {
			numbers,
		},
	};
};


const AlgoVisual = ({ numbers }) => {
	return <MergeSort numbers={numbers} />;
};