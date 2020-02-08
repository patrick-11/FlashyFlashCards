import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ScreenDeck from "./App/screens/ScreenDeck";
import ScreenDeckAdd from "./App/screens/ScreenDeckAdd";

const StackNavigator = createStackNavigator({
	Decks: {screen: ScreenDeck},
	Add: {screen: ScreenDeckAdd}
});

const AppContainer = createAppContainer(StackNavigator);

const App = () => {
	return (
		<AppContainer/>
	)
}

export default App;