import React from 'react';
import { styled } from '@mui/material';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Divider,
	IconButton,
	Paper,
	Stack,
	TextField,
	Tooltip,
	Typography,
} from '@mui/material';
import {
	PlayCircle as PlayCircleIcon,
	StopCircle as StopCircleIcon,
	RotateLeft as ResetIcon,
	NotStarted as NotStartedIcon,
	AddCircle as AddCircleIcon,
	ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import { useAlgoSort } from '../hooks';
import { BubbleSort } from './sort/bubbleSort';

const Container = styled(Paper)({
	marginX: '5%',
	paddingX: '1%',
	paddingY: '15px',
	borderRadius: '10px !important',
});

const AlgoHeader = styled(Typography)({
	marginTop: '10px',
	marginBottom: '20px',
});

const AlgoWindow = styled('div')({
	width: '64%',
	height: '350px',
	margin: 'auto',
	borderRadius: '15px',
	border: '1px solid #aaa',
	background: 'white',
});

export const AlgoPreview = () => {
	const inputNumbersEl = React.useRef(null);
	const { step, play, AlgoVisual, algoVisualProps } =
		useAlgoSort('bubbleSort')();

	const handlePlay = () => {};
	const handleStop = () => {};
	const handlePlayStop = () => {
		if (play) {
			handlePlay();
		} else {
			handleStop();
		}
	};

	const handleStep = () => {
		step();
	};

	const handleReset = () => {
		console.log('reset');
	};

	const inputValidation = (input) => {};

	const handleAddNumbers = () => {
		const inputNumbers = inputNumbersEl.current.value;
		if (inputValidation(inputNumbers)) {
			// const listNumbers = inputNumbers.split(/,|\s/).map(n => parseInt(n));
		}

		console.log(inputNumbersEl.current.value);
		// console.log(inputNumbersEl.current.value());
	};

	return (
		<Container component={Box} elevation={3}>
			<AlgoHeader variant='h5' gutterBottom align='center'>
				Algorytm
			</AlgoHeader>
			<AlgoWindow>
				<AlgoVisual {...algoVisualProps} />
			</AlgoWindow>
			<Stack
				sx={{
					alignItems: 'center',
					justifyContent: 'center',
					my: '10px',
				}}
				direction='row'
				spacing={1}
			>
				<Tooltip placement='top' title={play ? 'Uruchom' : 'Zatrzymaj'}>
					<IconButton
						size='large'
						onClick={handlePlayStop}
						color='primary'
					>
						{play ? (
							<PlayCircleIcon></PlayCircleIcon>
						) : (
							<StopCircleIcon></StopCircleIcon>
						)}
					</IconButton>
				</Tooltip>
				<Tooltip placement='top' title='Następny krok'>
					<IconButton onClick={handleStep} size='large'>
						<NotStartedIcon />
					</IconButton>
				</Tooltip>
				<Tooltip onClick={handleReset} placement='top' title='Resetuj'>
					<IconButton size='large'>
						<ResetIcon />
					</IconButton>
				</Tooltip>
				<Divider flexItem orientation='vertical'></Divider>
				<TextField
					label='Dane liczbowe'
					size='small'
					inputRef={inputNumbersEl}
				/>
				<Tooltip placement='top' title='Dodaj nowe element'>
					<IconButton onClick={handleAddNumbers} size='large'>
						<AddCircleIcon />
					</IconButton>
				</Tooltip>
			</Stack>

			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'
				>
					<Typography variant='h6'>Opis algorytmu</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Tekst</Typography>
				</AccordionDetails>
			</Accordion>
		</Container>
	);
};
