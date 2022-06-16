import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import React from 'react';
import {createTheme} from "@mui/material/styles";

const add = (a,b) => a + b;


describe('testy App.js' , () => {


  it('should render App.js', () => {
    render(<App></App>)

  });


  it('App.js defeault theme', () => {
    render(<App></App>)
    expect(createTheme()).toBeTruthy();
    expect(createTheme().palette.primary.main).toBe('#1976d2');
    expect(createTheme().palette.secondary.main).toBe('#9c27b0');
    expect(createTheme().palette.mode).toBe('light');
  });


  it('App.js change theme', () => {
    render(<App></App>);
    expect(createTheme().palette.mode).toBe('light');
    createTheme().palette.mode = 'dark';
    const theme = createTheme();
    theme.palette.mode = 'dark';
    expect(theme.palette.mode).toBe('dark');
  });

  it('palette.background.default ', () =>{
    const theme = createTheme();
    expect(theme.palette.background.default).toBe('#fff');
  });

  it('.palette.background.paper ', () =>{
    const theme = createTheme();
    expect(theme.palette.background.paper).toBe('#fff');
  });


});