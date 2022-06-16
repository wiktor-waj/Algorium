import React from 'react';
import Latex from 'react-latex';
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
	Shuffle as ShuffleIcon,
} from '@mui/icons-material';
import { useAlgoSort } from '../../hooks';
import { useAlgoPreviewForm } from '.';

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
	height: '400px',
	margin: 'auto',
	borderRadius: '15px',
	border: '1px solid #aaa',
	background: 'white',
});

const InputContainer = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyItems: 'center',
	alignItems: 'center',
	gap: '.5em',
	'& > div': {
		display: 'flex',
		justifyItems: 'center',
		alignItems: 'center',
	},
});

export const AlgoPreview = ({ title, description, type }) => {
	const {
		inputNumbersEl,
		inputNumbersListError,
		handleAddNumbersValidation,
		inputNumbersLengthEl,
		inputNumbersLengthError,
		handleRandomValidation,
	} = useAlgoPreviewForm();

	const {
		step,
		play,
		stop,
		isPlayed,
		reset,
		addNumbers,
		random,
		AlgoVisual,
		algoVisualProps,
	} = useAlgoSort(type)();

	const handlePlay = () => {
		play();
	};

	const handleStop = () => {
		stop();
	};

	const handlePlayStop = () => {
		if (isPlayed) {
			handleStop();
		} else {
			handlePlay();
		}
	};

	const handleStep = () => {
		step();
	};

	const handleReset = () => {
		reset();
	};

	const handleRandom = () => {
		if (!inputNumbersLengthError) {
			const inputRandom = inputNumbersLengthEl.current.value;
			random(parseInt(inputRandom));
		}
	};

	const handleAddNumbers = () => {
		const inputNumbers = inputNumbersEl.current.value.trim();
		if (!inputNumbersListError) {
			const listNumbers = inputNumbers
				.split(/,|\s/)
				.map((n) => parseInt(n));
			addNumbers(listNumbers);
		}
	};

	return (
		<Container component={Box} elevation={3}>
			<div style={{paddingTop: "10px"}}>
			<AlgoHeader variant='h5' gutterBottom align='center'>
				{title}
			</AlgoHeader>
			</div>
			
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
						{isPlayed ? (
							<StopCircleIcon></StopCircleIcon>
						) : (
							<PlayCircleIcon></PlayCircleIcon>
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
				<InputContainer>
					<div>
						<TextField
							defaultValue={'5 4 3 2 1'}
							label='Dane liczbowe'
							size='small'
							onChange={handleAddNumbersValidation}
							error={inputNumbersListError}
							inputRef={inputNumbersEl}
						/>
						<Tooltip placement='top' title='Dodaj nowy element'>
							<IconButton
								disabled={inputNumbersListError}
								onClick={handleAddNumbers}
								size='large'
							>
								<AddCircleIcon />
							</IconButton>
						</Tooltip>
					</div>
					<Divider flexItem orientation='horizontal'></Divider>
					<div>
						<TextField
							defaultValue={5}
							label='Ilość elementów'
							size='small'
							onChange={handleRandomValidation}
							error={inputNumbersLengthError}
							inputRef={inputNumbersLengthEl}
						/>
						<Tooltip placement='top' title='Wylosuj elementy'>
							<IconButton
								disabled={inputNumbersLengthError}
								onClick={handleRandom}
								size='large'
							>
								<ShuffleIcon />
							</IconButton>
						</Tooltip>
					</div>
				</InputContainer>
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
					<Typography>
						<Latex>{description}</Latex>
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Container>
	);
};
