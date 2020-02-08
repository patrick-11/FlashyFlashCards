import React from "react";
import {Button} from "react-native";
import {Subscribe} from "unstated";

import DeckList from "../components/DeckList";
import DeckContainer from "../container/DeckContainer";

const ScreenCard = (props) => {
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

ScreenCard.navigationOptions = ({navigation}) => {
	return {
        headerTitle: navigation.getParam("deckName"),
		headerRight: <Button title = "Edit" onPress = {() => alert("TEST")}/>
	};
};

export default ScreenCard;