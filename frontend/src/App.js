import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AllPage from './components/allpage';

function App() {
  const [toggleDark, settoggleDark] = useState(false);
  const [tabID, settabID] = useState("0");

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
      <AllPage toggleDark={toggleDark} settoggleDark={settoggleDark} tabID={tabID} settabID={settabID}></AllPage>
    </ThemeProvider>
  );
}

export default App;
