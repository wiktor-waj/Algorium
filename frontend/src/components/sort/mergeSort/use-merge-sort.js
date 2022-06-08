import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { mergeSort } from '../../../algorithms';
import { MergeSort } from './MergeSort';

const useRandomNumbers = () => {
	const [numbers, setNumbers] = React.useState([]);
	React.useEffect(() => {
		const _numbers = [];
		for (let i = 0; i < 5; i++) {
			_numbers.push({
				id: uuidv4(),
				value: Math.floor(Math.random() * 10),
				color: '#000',
				isSorting: false,
				isSorted: false,
			});
		}
		setNumbers(_numbers);
	}, []);

	return [numbers, setNumbers];
};

export const useMergeSort = () => {
	const [numbers, setNumbers] = useRandomNumbers();
	const [moves, setMoves] = React.useState([]);
	const [isPlayed, setIsPlayed] = React.useState(false);
	const [currentIndex, setCurrentIndex] = React.useState(0);
	let prevNum = numbers;

	// useEffect(() => {    // Update the document title using the browser API   
	// 	setMoves(getListMoves());
	// 	});

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
		if (isPlayed) {
			setIsPlayed(false);
		} else {
			setIsPlayed(true);
		}
	};

	const reset = () => { };

	return {
		step,
		play,
		reset,
		AlgoVisual,
		algoVisualProps: {
			numbers,
		},
	};
};

const AlgoVisual = ({ numbers }) => {
	return <MergeSort numbers={numbers} />;
};