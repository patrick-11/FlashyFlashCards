import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {Provider} from "unstated";

import ScreenDeck from "./App/screens/ScreenDeck";
import ScreenDeckAdd from "./App/screens/ScreenDeckAdd";

const StackNavigator = createStackNavigator({
	Decks: {screen: ScreenDeck},
	Add: {screen: ScreenDeckAdd}
});

const AppContainer = createAppContainer(StackNavigator);

const App = () => {
	return (
		<Provider>
			<AppContainer/>
		</Provider>
	)
}

export default App;