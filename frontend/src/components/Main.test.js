import {fireEvent, render, screen} from '@testing-library/react';
import React from 'react';
import {Main} from "./Main";



describe('testy Main.js' , () => {

    it('Render Main.js',() => {
        render(<Main />);
    });

    it('Render main div',() => {
        render(<Main />);
        const element = screen.getByText('main');
        expect(element).toBeInTheDocument();
    });

});



