import React from "react";
import {Button} from "react-native";
import {Subscribe} from "unstated";

import DeckAdd from "../components/DeckAdd";
import DeckContainer from "../container/DeckContainer";

const ScreenDeckAdd = (props) => {
    return (
        <Subscribe to = {[DeckContainer]}>
            {
                (deckContainer) => (
                    <DeckAdd
                        container = {deckContainer}
                    />
                )
            }
        </Subscribe>
    );
}

ScreenDeckAdd.navigationOptions = ({navigation}) => {
	return {
		headerRight: <Button title = "Save" onPress = {() => navigation.navigate("Decks")}/> 
	};
};

const DeckSave = (props) => {
    
}

export default ScreenDeckAdd;