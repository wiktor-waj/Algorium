import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { selectionSort } from '../../../algorithms';
import { SelectionSort } from './SelectionSort';


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

export const useSelectionSort = () => {
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
		let prevNum = deepClone(numbers);
		if (currentIndex < moves.length) {
			let step = moves[currentIndex];
			if (step.firstElement === false) {
				if (step.check) {
					prevNum[step.minIndex] = { ...prevNum[step.minIndex], color: "red" };
					prevNum[step.indexCheck] = { ...prevNum[step.indexCheck], color: "red" };
					setNumbers(prevNum);
				} else {
					prevNum[step.indexCheck] = { ...prevNum[step.indexCheck], color: "black" };
					if (step.minIndex === step.indexCheck) {
						prevNum[step.oldMin] = { ...prevNum[step.oldMin], color: "black" };
						prevNum[step.minIndex] = { ...prevNum[step.minIndex], color: "red" };
					}
					setNumbers(prevNum);
				}
			} else {
				let k = step.indexCheck;
				for (let i = step.indexCheck; i < step.val.length; i++) {
					prevNum[i].value = step.val[k++]
					prevNum[i].color = "black"
				}
				prevNum[step.indexCheck] = { ...prevNum[step.indexCheck], color: "green" };
				setNumbers(prevNum);
			}
			setCurrentIndex(currentIndex + 1);
		}
		else {
			for (let i = 0; i < numbers.length; i++) {
				prevNum[i].color = "green"
			}
			setNumbers(prevNum)
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
		for (let ii = 0; ii < moves.length; ii++) {
			let prevNum = deepClone(numbers);
			let step = moves[ii];
			await sleep(k);
			if (step.firstElement === false) {
				while (step.check) {
					prevNum[step.minIndex] = { ...prevNum[step.minIndex], color: "red" };
					prevNum[step.indexCheck] = { ...prevNum[step.indexCheck], color: "red" };
					setNumbers(prevNum);
					++ii;
					step = moves[ii];
					await sleep(k);
				}
					prevNum[step.indexCheck] = {...prevNum[step.indexCheck], color: "black"};
					if(step.minIndex === step.indexCheck){
						prevNum[step.oldMin] = {...prevNum[step.oldMin], color: "black"};
						prevNum[step.minIndex] = {...prevNum[step.minIndex], color: "red"};
					  }
					setNumbers(prevNum);
					await sleep(k);
			} else {
				let k = step.indexCheck;
				for (let i = step.indexCheck; i < step.val.length; i++) {
					numbers[i].value = step.val[k++]
					numbers[i].color = "black"
				}
				numbers[step.indexCheck] = { ...numbers[step.indexCheck], color: "green" };
				setNumbers(numbers);
			}
			await sleep(k);
		}
		for (let i = 0; i < numbers.length; i++) {
			numbers[i].color = "green"
		}
		setNumbers(numbers)
		
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
		const moves = selectionSort(tempArray);
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
	return <SelectionSort numbers={numbers} />;
};