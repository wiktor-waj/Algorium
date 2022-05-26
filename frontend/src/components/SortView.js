import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const AlgorithmView = styled('div')({
	width: 1800,
	height: 600,
	border: '2px solid black',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'black',
});

const Container = styled('div')({
	display: 'flex',
	alignItems: 'end',
});

const NumberColumn = styled(motion.div)((props) => ({
	fontSize: '1.5em',
	margin: '2em',
	padding: '2em .7em 0.2em',
	backgroundColor: props.color,
	borderRadius: '10px',
	height: props.height,
	display: 'flex',
	alignItems: 'end',
}));
let index = 0;
let secondIndex = 0;

const tempNumber = (value, color) => {
	return {
		value: Math.floor(Math.random() * 10),
		color: '#FFF',
	};
};

const _numbers = [];

for (let i = 0; i < 5; i++) {
	_numbers.push({ value: Math.floor(Math.random() * 10), color: '#FFF' });
}

console.log(_numbers);

export const SortView = () => {
	return <div>elo</div>;
	const [numbers, setNumbers] = React.useState(_numbers);
	const [inputValue, setInputValue] = React.useState('');
	const constraintsRef = React.useRef(null);

	const handleAddNumbers = () => {
		const nums = inputValue.split(' ').map((n) => Number(n));
		setNumbers(nums);
	};
	console.log(numbers);
	const setupDefaultColors = (arr) => {
		for (const v of arr) {
			v.color = '#FFF';
		}
	};

	const handleStep = () => {
		let inputArr = [...numbers];
		let len = inputArr.length;
		if (index < len) {
			setupDefaultColors(inputArr);
			inputArr[secondIndex + 1].color = '#3399ff';
			inputArr[secondIndex].color = 'red';
			if (inputArr[secondIndex].value > inputArr[secondIndex + 1].value) {
				let tmp = inputArr[secondIndex].value;
				inputArr[secondIndex].value = inputArr[secondIndex + 1].value;
				inputArr[secondIndex + 1].value = tmp;
			}

			secondIndex++;
			if (secondIndex === len - 1) {
				console.log('test');
				secondIndex = 0;
				index++;
			}
		} else {
			setupDefaultColors(inputArr);
		}
		setNumbers(inputArr);
	};

	const handlePlay = () => {};

	const handleStop = () => {};

	return (
		<div>
			<div>
				<label>Numbers to sort: </label>
				<input
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button onClick={handleAddNumbers}>add numbers</button>
			</div>
			<div>
				<button onClick={handleStep}>step</button>
				<button>play</button>
				<button>stop</button>
			</div>
			<AlgorithmView>
				<Container ref={constraintsRef}>
					{numbers.map((n, i) => {
						return (
							<NumberColumn
								key={i}
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{
									type: 'spring',
									stiffness: 260,
									damping: 20,
								}}
								height={`${n.value * 10}px`}
								color={n.color}
							>
								{n.value}
							</NumberColumn>
						);
					})}
				</Container>
			</AlgorithmView>
		</div>
	);
};
