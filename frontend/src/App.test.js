import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import React from 'react';
import {createTheme} from "@mui/material/styles";

const add = (a,b) => a + b;


describe('testy App.js' , () => {

  // it('add two values', function () {
  //   expect(add(2,4)).toBe(6);
  // });
  //
  // test('object assignment', () => {
  //   const data = {one: 1};
  //   data['two'] = 2;
  //   expect(data).toEqual({one: 1, two: 2});
  // });
  //
  //
  // test('adding positive numbers is not zero', () => {
  //   for (let a = 1; a < 10; a++) {
  //     for (let b = 1; b < 10; b++) {
  //       expect(a + b).not.toBe(0);
  //     }
  //   }
  // });
  //
  //
  // test('two plus two', () => {
  //   const value = 2 + 2;
  //   expect(value).toBeGreaterThan(3);
  //   expect(value).toBeGreaterThanOrEqual(3.5);
  //   expect(value).toBeLessThan(5);
  //   expect(value).toBeLessThanOrEqual(4.5);
  //
  //   // toBe and toEqual are equivalent for numbers
  //   expect(value).toBe(4);
  //   expect(value).toEqual(4);
  // });
  //
  // test('there is no I in team', () => {
  //   expect('team').not.toMatch(/I/);
  // });
  //
  // test('but there is a "stop" in Christoph', () => {
  //   expect('Christoph').toMatch(/stop/);
  // });
  //
  //
  // function compileAndroidCode() {
  //   throw new Error('you are using the wrong JDK');
  // }
  //
  // test('compiling android goes as expected', () => {
  //   expect(() => compileAndroidCode()).toThrow();
  //   expect(() => compileAndroidCode()).toThrow(Error);
  //
  //   // You can also use the exact error message or a regexp
  //   expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  //   expect(() => compileAndroidCode()).toThrow(/JDK/);
  // });

  it('App.js render', () => {
    render(<App></App>)
  });


  it('App.js theme', () => {
    render(<App></App>)
    expect(createTheme()).toBeTruthy();
    expect(createTheme().palette.primary.main).toBe('#1976d2');
    expect(createTheme().palette.secondary.main).toBe('#9c27b0');
    expect(createTheme().palette.mode).toBe('light');
  });


  it('change theme',  () => {
    render(<App></App>);
    expect(createTheme().palette.mode).toBe('light');
    createTheme().palette.mode = 'dark';
    const theme = createTheme();
    theme.palette.mode = 'dark';
    expect(theme.palette.mode).toBe('dark');
  });


});



//opaowac w describe
// zeby sprawdzic czy kompontent w ogole sie renderuje
//reneder(<>komponent</>)
//screen.getByText()// nazwa wyrenderowanego komponentu
//fireEvent.change(input, opcje)
//expect(in