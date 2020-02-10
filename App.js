import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Provider} from "unstated";

import ScreenDeck from "./App/screens/ScreenDeck";
import ScreenDeckAdd from "./App/screens/ScreenDeckAdd";
import ScreenCard from "./App/screens/ScreenCard";
import ScreenCardEdit from "./App/screens/ScreenCardEdit";
import ScreenCardEditRename from "./App/screens/ScreenCardEditRename";

const Stack = createStackNavigator();

const StackNavigator = () => {
	return (
		<Provider>
			<Stack.Navigator>
				<Stack.Screen name = "Decks" component = {ScreenDeck}/>
				<Stack.Screen name = "Add Deck" component = {ScreenDeckAdd}/>
				<Stack.Screen name = "Cards" component = {ScreenCard}/>
				<Stack.Screen name = "Edit" component = {ScreenCardEdit}/>
				<Stack.Screen name = "Rename" component = {ScreenCardEditRename}/>
			</Stack.Navigator>
		</Provider>
	);
}

const App = () => {
	return (
	<NavigationContainer>
		<StackNavigator/>
	</NavigationContainer>
	);

}

export default App;