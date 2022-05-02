import React from "react";
import MainMenu from "./mainmenu";

export default class AllPage extends React.Component {
    render() {
        return <>
            <MainMenu toggleDark={this.props.toggleDark} settoggleDark={this.props.settoggleDark} tabID={this.props.tabID} settabID={this.props.settabID}></MainMenu>
        </>
    }
}