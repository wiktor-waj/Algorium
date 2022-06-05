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
			});
		}
		setNumbers(_numbers);
	}, []);

	return [numbers, setNumbers];
};

export const useMergeSort = () =>{
	const [numbers, setNumbers] = useRandomNumbers();
	const [moves, setMoves] = React.useState([]);
	const [isPlayed, setIsPlayed] = React.useState(false);
	const [currentIndex, setCurrentIndex] = React.useState(0);
    let prevNum=numbers;

    const getListMoves = () =>{
        const tempArr = numbers.map((num)=>num.value);
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

	const makeMove = (move) => {
		const arr = [...numbers];
		if (move.swap) {
			[arr[move.indexLeft], arr[move.indexRight]] = [
				arr[move.indexRight],
				arr[move.indexLeft],
			];
		}
		return arr;
	};

    const updateArray = () => {
		if (currentIndex < moves.length) {
			let step = moves[currentIndex];
			for(let i=step.left;i<=step.right; i++){
				prevNum[i]={...prevNum[i], value: step.val[i - step.left]}
				setNumbers(prevNum);
				console.log(step.val)
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

	const reset = () => {};

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
	return <MergeSort  numbers={numbers} />;
};