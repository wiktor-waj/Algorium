import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavBar } from './components/NavBar';
import { Main } from './components/Main/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AlgoPreview } from './components/algoPreview';
import { ModulesList } from './components/ModulesList';
import { modules } from './utils/listModules';
import '@fontsource/roboto';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AboutInfo from './components/Main/About';

const App = () => {
	const [toggleDark, setToggleDark] = React.useState(false);

	const algoriumTheme = createTheme({
		palette: {
			mode: toggleDark ? 'dark' : 'light',
			type: toggleDark ? 'dark' : 'light',
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
		<div style={{ background: algoriumTheme.palette.background.default }}>
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
							<Route path='/moduly' element={<ModulesList />} />
							{modules.map((module) => {
								if (module.algoProps.type) {
									return (
										<Route
											key={module.to}
											path={`/moduly/${module.to}`}
											element={
												<AlgoPreview
													{...module.algoProps}
												/>
											}
										/>
									);
								} else return <></>;
							})}
							<Route path='/info' element={<AboutInfo />}/>
						</Route>
					</Routes>
				</Router>
			</ThemeProvider>
		</div>
	);
};

export default App;
