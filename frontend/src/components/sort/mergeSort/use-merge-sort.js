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
							prevNum[i] = { ...prevNum[i], color: "orange" }
							setNumbers(prevNum);
							break;
						case 'R':
							prevNum[i] = { ...prevNum[i], color: "purple" }
							setNumbers(prevNum);
							break;
						case '':
							prevNum[i] = { ...prevNum[i], color: step.isSorting ? "red" : "black" }
							setNumbers(prevNum);
							break;
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
	const play = () => {
		setIsPlayed(true);
	};

	const stop = () => {
		setIsPlayed(false);
	};

	const makeDefaultValues = () => {
		setCurrentIndex(0);
		setMoves([]);
	};

	const reset = () => {
		makeDefaultValues();
		setNumbers(defaultNumbers);
	};

	const random = (numbersLength) => {
		makeDefaultValues();
		makeRandomNumbers(numbersLength);
	};

	const addNumbers = (listNumbers) => {
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