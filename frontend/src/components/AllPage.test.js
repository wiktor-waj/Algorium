import {fireEvent, render, screen} from '@testing-library/react';
import React from 'react';
import AllPage from "./AllPage";
import {Route, Router} from "react-router-dom";
import Switch from "@mui/material/Switch";
import * as path from "path";
import {ReactComponent} from "*.svg";

describe('testy AllPage.js' , () => {

    it('Render AllPage.js',() =>{
    render(<Switch> <Route> <AllPage /></Route> </Switch>);
    });

    it('Render AllPage.js',() => {
        render(<Switch> <Route> <AllPage/></Route> </Switch>);

    });


});