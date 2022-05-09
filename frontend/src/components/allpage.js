import React from "react";
import Tmp from "./tmp";
import MainMenu from "./mainmenu";
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import { TabContext } from '@mui/lab';
import AlgPreview from "./algpreview";


export default class AllPage extends React.Component {
    render() {
        return <>
        <TabContext value={this.props.tabID}>
            <MainMenu oggleDark={this.props.toggleDark} settoggleDark={this.props.settoggleDark}
                    tabID={this.props.tabID} settabID={this.props.settabID}
                    algActive={this.props.algActive} setalgActive={this.props.setalgActive} />
            <Switch>
                <Route  exact path='/' element={<Tmp
                    toggleDark={this.props.toggleDark} settoggleDark={this.props.settoggleDark}
                    tabID={this.props.tabID} settabID={this.props.settabID}
                    algActive={this.props.algActive} setalgActive={this.props.setalgActive}
                />}></Route> 
                <Route exact path='/moduly' element={<AlgPreview algActive={this.props.algActive} setalgActive={this.props.setalgActive} />}></Route>
                 <Route exact path='/info' element={<Tmp
                    toggleDark={this.props.toggleDark} settoggleDark={this.props.settoggleDark}
                    tabID={this.props.tabID} settabID={this.props.settabID}
                    algActive={this.props.algActive} setalgActive={this.props.setalgActive}
                />}></Route>
            </Switch>
            </TabContext>
        </>
    }
}