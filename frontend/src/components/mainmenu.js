import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Paper, Tab } from "@mui/material";
import { Home as HomeIcon, MenuBook as MenuBookIcon, Help as HelpIcon } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ColorModeSwitch from "./colormode";
import Grid from '@mui/material/Grid';
import {  styled } from "@mui/system";
import AlgPreview from "./algpreview";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#2a2b2c' : '#f0f0f0',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "40px",
}));

const TabPanelThemed = styled(TabPanel)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    zIndex: -1,
    marginTop: 15,
    padding: 20,
}));

export default class MainMenu extends React.Component {
    handleModeChange = () => {
        this.props.settoggleDark(!this.props.toggleDark);
    };

    handleTabChange = (event, newValue) => {
        this.props.settabID(newValue);
    };

    constructor() {
        super();

        //...
    }

    render() {
        return <>
            <Paper elevation={3}>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Item elevation={0}>
                            <div style={{ textAlign: "left", fontSize: "25px", marginBottom: 0, marginTop: 0, verticalAlign: "middle", display: "flex", alignItems: "center" }}>
                                <img src="img/logo.png" width={"40px"} style={{ margin: "auto 10px" }}></img>
                                <span>Algorium</span>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item>
                        <TabList onChange={this.handleTabChange} variant="scrollable" scrollButtons allowScrollButtonsMobile aria-label="scrollable icon label tabs example">
                            <Link to="/"><Tab value="0" iconPosition="start" icon={<HomeIcon />} label="Strona główna" /></Link>
                            <Link to="/moduly"><Tab value="1" iconPosition="start" icon={<MenuBookIcon />} label="Moduły" /></Link>
                            <Link to="/info"><Tab value="2" iconPosition="start" icon={<HelpIcon />} label="Informacje" /></Link>
                        </TabList>
                    </Grid>
                    <Grid item>
                        <Item elevation={0}>
                            <ColorModeSwitch name="toggleDark" color="default" checked={this.props.toggleDark} onChange={this.handleModeChange}></ColorModeSwitch>
                        </Item>
                    </Grid>
                </Grid>
            </Paper>

        </>
    }
}