import React from "react";
import {View, FlatList, Button} from "react-native";

import Deck from "../components/Deck";

const DeckList = (props) => {

    props.navigation.setOptions({
        headerRight: () => <Button title = "Add" onPress = {() => props.navigation.navigate("Add Deck")}/>
    });

    return (
        <View style = {{flex: 1}}>
            <FlatList
                data = {props.container.getDecks()}
                renderItem = {(deck) => (
                    <Deck
                        navigation = {props.navigation}
                        deck = {deck}
                    />
                )}
                keyExtractor = {(_, index) => index.toString()}
            />
        </View>
    );
}

export default DeckList;