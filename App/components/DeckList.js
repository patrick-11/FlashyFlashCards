import React from "react";
import {View, FlatList} from "react-native";

import Deck from "../components/Deck";

const DeckList = (props) => {
    return (
        <View>
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