import React from 'react';
import { Paper, Tab } from '@mui/material';
import {
	Home as HomeIcon,
	MenuBook as MenuBookIcon,
	Help as HelpIcon,
} from '@mui/icons-material';
import { TabContext, TabList } from '@mui/lab';
import ColorModeSwitch from './ColorMode';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#2a2b2c' : '#f0f0f0',
	...theme.typography.body2,
	padding: theme.spacing(1),
	margin: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	height: '40px',
}));

const StyledTabPanel = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	zIndex: -1,
	padding: 20,
	minHeight: '100vh',
}));

const tabs = [
	{
		to: '/strona-glowna',
		icon: <HomeIcon />,
		label: 'Strona główna',
	},

	{
		to: '/moduly',
		icon: <MenuBookIcon />,
		label: 'Moduły',
	},
	{
		to: '/info',
		icon: <HelpIcon />,
		label: 'Informacje',
	},
];

export const NavBar = ({ toggleDark, setToggleDark }) => {
	const [currentTab, setCurrentTab] = React.useState(0);
	const location = useLocation();
	const navigate = useNavigate();

	React.useEffect(() => {
		const firstNestedPath = `/${location.pathname.split('/')[1]}`;
		const tab = tabs.findIndex(({ to }) => to === firstNestedPath);
		if (tab === -1) {
			navigate('/strona-glowna', { replace: true });
		} else {
			setCurrentTab(tab);
		}
	}, [location.pathname, navigate]);

	const handleTabChange = (event, newTab) => {
		setCurrentTab(parseInt(newTab));
	};

	return (
		<TabContext value={currentTab.toString()}>
			<Paper elevation={3}>
				<Grid container spacing={2}>
					<Grid item xs>
						<Item elevation={0}>
							<div
								style={{
									textAlign: 'left',
									fontSize: '25px',
									marginBottom: 0,
									marginTop: 0,
									verticalAlign: 'middle',
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<img
									alt=''
									src='img/logo.png'
									width={'40px'}
									style={{ margin: 'auto 10px' }}
								></img>
								<span>Algorium</span>
							</div>
						</Item>
					</Grid>
					<Grid item>
						<TabList
							onChange={handleTabChange}
							variant='scrollable'
							scrollButtons
							allowScrollButtonsMobile
							aria-label='scrollable icon label tabs example'
						>
							{tabs.map((tab, index) => {
								return (
									<Tab
										key={tab.to}
										label={tab.label}
										to={tab.to}
										component={Link}
										iconPosition='start'
										icon={tab.icon}
										value={index.toString()}
									/>
								);
							})}
						</TabList>
					</Grid>
					<Grid item>
						<Item elevation={0}>
							<ColorModeSwitch
								name='toggleDark'
								color='default'
								checked={toggleDark}
								onChange={() => setToggleDark(!toggleDark)}
							/>
						</Item>
					</Grid>
				</Grid>
			</Paper>
			<StyledTabPanel>
				<Outlet />
			</StyledTabPanel>
		</TabContext>
	);
};
