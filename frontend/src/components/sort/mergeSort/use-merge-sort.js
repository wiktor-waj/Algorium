import React  from 'react';
import { v4 as uuidv4 } from 'uuid';
import { mergeSort } from '../../../algorithms';
import { MergeSort } from './MergeSort';

const useVisualNumbers = (defaultNumbersLength) => {
	const [numbers, setNumbers] = React.useState([]);
	const [defaultNumbers, setDefaultNumbers] = React.useState([]);

	const makeRandomNumbers = (numbersLength) => {
		const _numbers = [];
		for (let i = 0; i < numbersLength; i++) {
			_numbers.push({
				id: uuidv4(),
				value: Math.floor(Math.random() * 10),
				color: colors.default,
			});
		}
		setNumbers(_numbers);
		setDefaultNumbers(deepClone(_numbers));
	};

	const makeNumberObj = (value) => {
		return {
			id: uuidv4(),
			value,
			color: colors.default,
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
	let prevNum = numbers;


	const getListMoves = () => {
		const tempArr = numbers.map((num) => num.value);
		const moves = mergeSort(tempArr);
		return moves
	}

	const step = () => {
		if (moves.length === 0) {
			setMoves(getListMoves());
		} else {
			updateArray();
		}
	};

	const updateArray = () => {
		let m=currentIndex;
		if(currentIndex===0){
		while( moves[m].side==='' ){
			++m;
		}
		setCurrentIndex(m);
	}
	else	if (currentIndex < moves.length) {
			let step = moves[currentIndex];
			for (let i = step.left; i <= step.right; i++) {
				switch(step.side){
					case 'L':
						prevNum[i] = { ...prevNum[i], color: "pink" }
						setNumbers(prevNum);
						break;
					case 'R':
							prevNum[i] = { ...prevNum[i], color: "violet" }
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
	};
	const play = () => {
		setIsPlayed(true);
	};

	const stop = () => {
		setIsPlayed(false);
	};

const makeDefaultValues = () => {
		setCurrentIndex(0);
		setHighlight(true);
		setHighlightIndex(null);
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