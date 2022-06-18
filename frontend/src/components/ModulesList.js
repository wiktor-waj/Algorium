import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { CardActionArea, Grid, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { modules } from '../utils/listModules';

const CardComponent = ({ module }) => {
	return (
		<Grid item xs={3} md={2.4} lg={2}>
			<Card sx={{ maxWidth: 345}}>
				<CardActionArea sx={{display: 'flex', flexDirection:'column', jusitfyItems: 'center', pt: '1.5em'}} component={Link} to={module.to}>
					{module.icon}
					<CardContent>
						<Typography
							gutterBottom
							variant='h5'
							component='div'
							align='center'
						>
							{module.algoProps.title}
						</Typography>
						<Typography
							sx={{ mb: 1.5 }}
							color='text.secondary'
							align='center'
						>
							{module.tag}
						</Typography>
						<Typography variant='body2' align='center'>
							{module.algoProps.description}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
};

export const ModulesList = () => {
	return (
		<>
			<Outlet />
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
				justifyContent="center"
			>
				{modules.map((module) => (
					<CardComponent key={module.to} module={module} />
				))}
			</Grid>
		</>
	);
};
