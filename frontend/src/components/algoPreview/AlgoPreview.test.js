import {fireEvent, render, screen} from '@testing-library/react';
import React from 'react';
import {AlgoPreview} from "./AlgoPreview";
import {Route} from "react-router-dom";
import App from "../../App";





describe('testy AlgoPreview.js' , () => {

    it('should render AlgoPreview.js', () => {
        render(<App> <AlgoPreview></AlgoPreview>  </App>);
    });

    it('should do smth',() => {
        const preview = render(<App> <AlgoPreview></AlgoPreview>  </App>);
        expect(preview).toBeTruthy();

    });


    it('preview.container',() => {
        const preview = render(<App> <AlgoPreview></AlgoPreview>  </App>);
        expect(preview.container).toBeTruthy();
    });

    it('preview.container',() => {
        const preview = render(<App> <AlgoPreview></AlgoPreview>  </App>);
        expect(preview.container).toBeInTheDOM();
    });


    it('should ', () => {
        render(<App> <AlgoPreview></AlgoPreview>  </App>);
        expect(<AlgoPreview />).toBeTruthy();
    });

});
