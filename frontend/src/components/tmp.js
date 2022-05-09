import React from "react";
import { Tab, Tabs } from "@mui/material";
import { Home as HomeIcon, MenuBook as MenuBookIcon, Help as HelpIcon } from "@mui/icons-material";
import { TabContext, TabPanel } from '@mui/lab';
import ColorModeSwitch from "./colormode";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default class Tmp extends React.Component {
    // handleModeChange = () => {
    //     this.props.settoggleDark(!this.props.toggleDark);
    // };

    // constructor() {
    //     super();

    //     this.state.tabID = '0';
    // }

    render() {
        return <>
            {/* <TabContext > */}
                {/* <Tabs value={this.state.tabID} onChange={null} variant="scrollable" scrollButtons allowScrollButtonsMobile aria-label="scrollable icon label tabs example">
                    <Tab iconPosition="start" icon={<HomeIcon />} label="Strona główna" />
                    <Tab iconPosition="start" icon={<MenuBookIcon />} label="Moduły" />
                    <Tab iconPosition="start" icon={<HelpIcon />} label="Informacje" />
                </Tabs> */}
                <p>Hello</p>
                {/* <ColorModeSwitch name="toggleDark" color="default" checked={this.props.toggleDark} onChange={this.handleModeChange}></ColorModeSwitch>
                <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel> */}
            {/* </TabContext> */}
        </>
    }
}