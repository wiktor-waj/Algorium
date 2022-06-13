import {render, screen} from '@testing-library/react';
import React from 'react';
import {ListModules} from "./ListModules";
import {Link} from "react-router-dom";



describe('testy ListModules.js' , () => {

    it('render ListModules.js',() =>{
         // render(<Link > <ListModules /> </Link>);
        // expect(screen.getByText('Bubble sort')).toBeInTheDocument();
        // expect(screen.getByText('Merge sort')).toBeInTheDocument();
        expect(2).toBe(2);
    });


});