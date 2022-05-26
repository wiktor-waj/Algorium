import React from 'react';
import MainMenu from './mainmenu';
import {
	BrowserRouter as Router,
	Route,
	Routes as Switch,
	useLocation,
} from 'react-router-dom';
import { TabContext } from '@mui/lab';
// import AlgPreview from "./algpreview";
import AlgPreview, { AlgPreviewFn } from './AlgPreviewFn';

export default class AllPage extends React.Component {
	getMainMenu(id) {
		this.props.settabID(id);

		let pg = <div></div>;

		switch (id) {
			case 0:
				break;
			case 1:
				pg = <AlgPreviewFn />;
				break;
			case 2:
				break;
			default:
		}

		return (
			<MainMenu
				toggleDark={this.props.toggleDark}
				settoggleDark={this.props.settoggleDark}
				tabID={this.props.tabID}
				settabID={this.props.settabID}
				algActive={this.props.algActive}
				setalgActive={this.props.setalgActive}
				page={pg}
				pageID={id}
			/>
		);
	}

	render() {
		return (
			<>
				<Switch>
					<Route exact path='/' element={this.getMainMenu(0)}></Route>
					<Route
						exact
						path='/moduly'
						element={this.getMainMenu(1)}
					></Route>
					<Route
						exact
						path='/info'
						element={this.getMainMenu(2)}
					></Route>
				</Switch>
			</>
		);
	}
}
