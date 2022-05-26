import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
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
import { SortView } from './SortView';

export const AlgPreviewFn = () => {
	let is_running = true;
	return (
		<Paper
			marginX={'5%'}
			paddingX={'1%'}
			paddingY={'15px'}
			component={Box}
			elevation={3}
			borderRadius={'10px !important'}
		>
			<Typography
				variant='h5'
				gutterBottom
				align='center'
				marginTop={'10px'}
				marginBottom={'20px'}
			>
				Algorytm
			</Typography>
			<div
				style={{
					width: '64%',
					height: '350px',
					margin: 'auto',
					borderRadius: '15px',
					border: '1px solid #aaa',
					background: 'white',
				}}
			>
				<SortView />
			</div>
			<Stack
				direction='row'
				alignItems='center'
				spacing={1}
				justifyContent='center'
				marginY={'10px'}
			>
				<Tooltip
					placement='top'
					title={is_running ? 'Uruchom' : 'Zatrzymaj'}
				>
					<IconButton
						size='large'
						onClick={() => console.log('play')}
						color='primary'
					>
						{is_running ? (
							<PlayCircleIcon></PlayCircleIcon>
						) : (
							<StopCircleIcon></StopCircleIcon>
						)}
					</IconButton>
				</Tooltip>
				<Tooltip placement='top' title='Następny krok'>
					<IconButton size='large'>
						<NotStartedIcon />
					</IconButton>
				</Tooltip>
				<Tooltip placement='top' title='Resetuj'>
					<IconButton size='large'>
						<ResetIcon />
					</IconButton>
				</Tooltip>
				<Divider flexItem orientation='vertical'></Divider>
				<TextField label='Dane liczbowe' size='small' />
				<Tooltip placement='top' title='Dodaj wartość'>
					<IconButton size='large'>
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
		</Paper>
	);
};
