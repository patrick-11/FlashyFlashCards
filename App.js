import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {Provider} from "unstated";

import ScreenDeck from "./App/screens/ScreenDeck";
import ScreenDeckAdd from "./App/screens/ScreenDeckAdd";
import ScreenCard from "./App/screens/ScreenCard";

const StackNavigator = createStackNavigator({
	Decks: {screen: ScreenDeck},
	"Add Deck": {screen: ScreenDeckAdd},
	Card: {screen: ScreenCard},
});

const AppContainer = createAppContainer(StackNavigator);

const App = () => {
	return (
		<Provider>
			<AppContainer/>
		</Provider>
	);
}

export default App;