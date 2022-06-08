import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavBar } from './components/NavBar';
import { ListModules } from './components/ListModules';
import { Main } from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AlgoPreview } from './components/algoPreview';

const sortAlgosList = [
	{
		to: 'bubble-sort',
		algoProps: {
			title: 'Sortowanie bąbelkowe',
			description: `Sortowanie bąbelkowe (ang. bubble sort) – prosta metoda sortowania o złożoności czasowej $$O(n^{2})$$ i pamięciowej $$O ( 1 )$$. 

		Polega na porównywaniu dwóch kolejnych elementów i zamianie ich kolejności, jeżeli zaburza ona porządek, w jakim się sortuje tablicę. Sortowanie kończy się, gdy podczas kolejnego przejścia nie dokonano żadnej zmiany.`,
			type: 'bubbleSort',
		},
	},

	{
		to: 'merge-sort',
		algoProps: {
			title: 'Sortowanie przez scalanie',
			description: 'brak',
			type: 'mergeSort',
		},
	},
];
const App = () => {
	const [toggleDark, setToggleDark] = React.useState(false);

	const algoriumTheme = createTheme({
		palette: {
			mode: toggleDark ? 'dark' : 'light',
			primary: {
				light: '#97a7eb',
				main: '#7d91e7',
				dark: '#5765a1',
			},
			secondary: {
				light: '#e69ab5',
				main: '#e081a3',
				dark: '#9c5a72',
			},
		},
	});

	if (algoriumTheme.palette.mode === 'light') {
		algoriumTheme.palette.background = {
			default: '#fff',
			paper: '#f0f0f0',
		};
	} else {
		algoriumTheme.palette.background = {
			default: '#18191a',
			paper: '#18191a',
		};
	}

	return (
		<ThemeProvider theme={algoriumTheme}>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							<NavBar
								toggleDark={toggleDark}
								setToggleDark={setToggleDark}
							/>
						}
					>
						<Route path='/strona-glowna' element={<Main />} />
						<Route path='/moduly' element={<ListModules />}>
							{/* {sortAlgosList.map((algo) => {
								return (
									<Route
										key={algo.to}
										path={algo.to}
										element={
											<AlgoPreview {...algo.algoProps} />
										}
									/>
								);
							})} */}
							<Route
								path='bubble-sort'
								element={
									<AlgoPreview
										{...sortAlgosList[0].algoProps}
									/>
								}
							/>

							<Route
								path='merge-sort'
								element={	<AlgoPreview
									{...sortAlgosList[1].algoProps}
								/>}
							/>
						</Route>
						<Route path='/info' element={<div>info</div>} />
					</Route>
				</Routes>
			</Router>
		</ThemeProvider>
	);
};

export default App;
