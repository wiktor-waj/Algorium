import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { bubbleSort } from '../../../algorithms';
import { BubbleSort } from './BubbleSort';

const colors = {
	default: '#000',
	swapped: '#009900',
	finished: '#0066ff',
};

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

export const useBubbleSort = () => {
	let {
		numbers,
		setNumbers,
		makeRandomNumbers,
		defaultNumbers,
		updateNumbersByListValues,
	} = useVisualNumbers(defaultNumbersLength);
	const [moves, setMoves] = React.useState([]);
	const [isPlayed, setIsPlayed] = React.useState(false);
	const [currentIndex, setCurrentIndex] = React.useState(0);
	const [previousCurrentIndex, setPreviousCurrentIndex] = React.useState(-1);
	const [highlight, setHighlight] = React.useState(true);
	const [highlightIndex, setHighlightIndex] = React.useState(null);
	const playRef = React.useRef(null);

	const makeMove = React.useCallback(
		(move) => {
			const arr = deepClone(numbers);
			if (move.swap) {
				[arr[move.indexLeft], arr[move.indexRight]] = [
					arr[move.indexRight],
					arr[move.indexLeft],
				];
			}
			return arr;
		},
		[numbers]
	);

	const indexSwap = (moves, index, i) =>
		index === moves[i].indexLeft || index === moves[i].indexRight;

	const step = React.useCallback(() => {
		if (currentIndex < moves.length) {
			//TODO : Refactor all code in highlight if (when true)
			if (highlight) {
				const updatedArrayNumbers = deepClone(numbers);
				if (
					moves[currentIndex].hasOwnProperty('highlightLastElement')
				) {
					updatedArrayNumbers[highlightIndex].color = colors.finished;
					setHighlightIndex(highlightIndex - 1);
				}
				updatedArrayNumbers.forEach((_, index) => {
					if (updatedArrayNumbers[index].color !== colors.finished) {
						updatedArrayNumbers[index].color = colors.default;
					}
					if (indexSwap(moves, index, currentIndex)) {
						updatedArrayNumbers[index].color = colors.swapped;
					}
				});
				setNumbers(updatedArrayNumbers);
				setHighlight(false);
			} else {
				const updatedArrayNumbers = makeMove(moves[currentIndex]);

				setNumbers(updatedArrayNumbers);
				setHighlight(true);
				setPreviousCurrentIndex(currentIndex);
				setCurrentIndex(currentIndex + 1);
			}
		} else {
			if (isPlayed) {
				setIsPlayed(false);
			}
		}
	}, [
		makeMove,
		numbers,
		setNumbers,
		moves,
		currentIndex,
		isPlayed,
		highlight,
		highlightIndex,
	]);

	const play = async () => {
		setIsPlayed(true);
	};

	const stop = () => {
		setIsPlayed(false);
		clearInterval(playRef.current);
	};

	const makeDefaultValues = () => {
		setCurrentIndex(0);
		setPreviousCurrentIndex(-1);
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

	const getListMoves = React.useCallback(() => {
		const tempArray = numbers.map((number) => number.value);
		const moves = bubbleSort(tempArray);
		return moves;
	}, [numbers]);

	React.useEffect(() => {
		if (isPlayed && currentIndex !== previousCurrentIndex) {
			clearTimeout(playRef.current);
			playRef.current = setTimeout(() => step(), 500);
		}
	}, [isPlayed, currentIndex, step, previousCurrentIndex]);

	React.useEffect(() => {
		if (moves.length === 0) {
			setMoves(getListMoves());
		}
	}, [moves, getListMoves]);

	React.useEffect(() => {
		if (numbers.length > 0 && highlightIndex === null) {
			setHighlightIndex(numbers.length - 1);
		}
	}, [highlightIndex, numbers]);

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
	return <BubbleSort numbers={numbers} />;
};
