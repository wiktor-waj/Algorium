import React from 'react';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const AlgorithmView = styled('div')({
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

const Container = styled('div')({
	display: 'flex',
	alignItems: 'end',
});

const NumberColumn = styled(motion.div)((props) => ({
	transition: 'background-color 0.2s ease',
	fontSize: '1.1em',
	margin: '1.2em',
	padding: '2em .4em 0.2em',
	display: 'flex',
	alignItems: 'end',
	color: 'white',
	fontWeight: 'bold',
	backgroundColor: props.color,
	borderRadius: '10px',
	height: props.height,
}));

export const BubbleSort = ({ numbers }) => {
	const constraintsRef = React.useRef(null);

	return (
		<AlgorithmView>
			<Container ref={constraintsRef}>
				{numbers.map((n, i) => {
					return (
						<NumberColumn
							key={n.id}
							layout
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
	);
};
