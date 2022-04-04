import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { algoriumTheme } from 'theme';

function App() {
  return (
    <ThemeProvider theme={algoriumTheme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
