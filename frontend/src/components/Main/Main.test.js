import {fireEvent, render, screen} from '@testing-library/react';
import React from 'react';
import {Main} from "./Main";



describe('testy Main.js' , () => {

    it('should render Main.js',() => {
        render(<Main />);
    });


    // it('Create main div',() => {
    //     render(<Main />);
    //     const element = screen.getByText('main');
    //     expect(element).toBeInTheDocument();
    // });
    //
    // it('main div in the doom',() => {
    //     render(<Main />);
    //     const element = screen.getByText('main');
    //     expect(element).toBeInTheDOM();
    // });


});



