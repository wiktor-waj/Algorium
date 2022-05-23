import './App.css';
import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AllPage from './components/allpage';

import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  const [toggleDark, settoggleDark] = useState(false);
  const [tabID, settabID] = useState(0);
  const [algActive, setalgActive] = useState(<div></div>);

  const algoriumTheme = createTheme({
    palette: {
      mode: toggleDark ? "dark" : "light",
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

  if (algoriumTheme.palette.mode == "light") {
    algoriumTheme.palette.background = {
      default: "#fff",
      paper: "#f0f0f0",
    };
  } else {
    algoriumTheme.palette.background = {
      default: "#18191a",
      paper: "#18191a",
    };
  }

  return (

    <ThemeProvider theme={algoriumTheme}>
      <Router basename={process.env.PUBLIC_URL}>
      <div style={{ background: algoriumTheme.palette.background.default }}>
          <AllPage
          toggleDark={toggleDark} settoggleDark={settoggleDark} tabID={tabID} settabID={settabID}
          algActive={algActive} setalgActive={setalgActive}
        ></AllPage>
      </div>
    </Router>
    </ThemeProvider >
  );
}

export default App;
