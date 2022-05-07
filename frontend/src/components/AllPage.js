import React from "react";
import MainMenu from "./MainMenu";

export default class AllPage extends React.Component {
    render() {
        return <MainMenu 
                toggleDark={this.props.toggleDark} settoggleDark={this.props.settoggleDark} 
                tabID={this.props.tabID} settabID={this.props.settabID}
                algActive={this.props.algActive} setalgActive={this.props.setalgActive}
            />
    }
}