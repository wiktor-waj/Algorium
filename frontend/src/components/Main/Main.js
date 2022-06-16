import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { PlayCircle, WidgetsRounded } from '@mui/icons-material';
import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import SchoolIcon from '@mui/icons-material/School';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.025)' : '#fafafa',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	boxShadow: 'none',
}));

export const Main = () => {
	const theme = useTheme();

	const icon_style = { fontSize: 90, marginBottom: "10px", color: theme.palette.primary.main };
	const h_style = { textAlign: 'center', marginBottom: "25px", fontWeight: 'light', color: theme.palette.mode === "dark" ? "#fff" : "#444" };

	const funcs = [
		{
			icon: <WidgetsRounded sx={icon_style}></WidgetsRounded>,
			title: "Algorytmy",
			desc: "Na naszej platformie dostępnych jest przedstawienie kilku najpopularniejszych algorytmów. Przejdź do listy modułów, aby wybrać wizualizację jednego z nich!",
		},
		{
			icon: <PlayCircle sx={icon_style}></PlayCircle>,
			title: "Wizualizacja algorytmów",
			desc: "W celu pełniejszego zrozumienia działania danego algorytmu, stworzyliśmy dla Ciebie narzędzie wizualizacji danego algorytmu. Oferuje ono m.in. możliwość przechodzenia co krok, wylosowania lub wprowadzenia własnych danych.",
		},
		{
			icon: <SchoolIcon sx={icon_style}></SchoolIcon>,
			title: "Nauka",
			desc: "Kreatywne przedstawienie zachodzących procesów w wybranym algorytmie pozwala na szybszą naukę i pełniejsze zrozumienie ich działania.",
		},
	];

	return (
		<>
			<div style={{ height: "370px", textAlign: "center", marginTop: "-35px", marginBottom: "30px", background: `radial-gradient(circle, ${theme.palette.secondary.main} 0%, transparent 40%), radial-gradient(circle, ${theme.palette.primary.main} 0%, transparent 80%)` }}>
				<Typography variant="h3" sx={h_style} component="div" style={{paddingTop: "120px"}}>
					Witaj w <strong>Algorium</strong>!
				</Typography>
				<p style={{color: theme.palette.mode === "dark" ? "#fff" : "#444"}}>Zanurz się w algorytmicznym świecie i poznaj jego najmniejsze zakamarki!</p>
			</div>

			<Typography variant="h4" gutterBottom sx={h_style} component="div">
				Funkcjonalności
			</Typography>

			<Grid container item spacing={3} style={{ marginBottom: "10px" }} justifyContent="center">
				{funcs.map((it) => (
					<Grid item xs={3}>
						<Item>
							{it.icon}
							<Typography variant="h6" component="div" style={{ marginBottom: "10px" }}>
								{it.title}
							</Typography>
							<p>{it.desc}</p>
						</Item>
					</Grid>
				))}
			</Grid>
		</>
	);
};
