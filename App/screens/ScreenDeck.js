import React from "react";
import {Button} from "react-native";
import {Subscribe} from "unstated";

import DeckList from "../components/DeckList";
import DeckContainer from "../container/DeckContainer";

const ScreenDeck = (props) => {
    return (
        <Subscribe to = {[DeckContainer]}>
            {
                (deckContainer) => (
                    <DeckList
                        navigation = {props.navigation}
                        container = {deckContainer}
                    />
                )
            }
        </Subscribe>
    );
}

ScreenDeck.navigationOptions = ({navigation}) => {
	return {
		headerRight: <Button title = "Add" onPress = {() => navigation.navigate("Add Deck")}/>
	};
};

export default ScreenDeck;