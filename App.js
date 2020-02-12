import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Provider} from "unstated";

import ScreenDeck from "./App/screens/ScreenDeck";
import ScreenDeckAdd from "./App/screens/ScreenDeckAdd";
import ScreenCard from "./App/screens/ScreenCard";
import ScreenCardEdit from "./App/screens/ScreenCardEdit";
import ScreenCardEditRename from "./App/screens/ScreenCardEditRename";
import ScreenCardEditAdd from "./App/screens/ScreenCardEditAdd";

const Stack = createStackNavigator();

const StackNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name = "Decks" component = {ScreenDeck}/>
				<Stack.Screen name = "Add Deck" component = {ScreenDeckAdd}/>
				<Stack.Screen name = "Cards" component = {ScreenCard}/>
				<Stack.Screen name = "Edit" component = {ScreenCardEdit}/>
				<Stack.Screen name = "Rename Deck" component = {ScreenCardEditRename}/>
				<Stack.Screen name = "Add Card" component = {ScreenCardEditAdd}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const App = () => {
	return (
	<Provider>
		<StackNavigator/>
	</Provider>
	);

}

export default App;