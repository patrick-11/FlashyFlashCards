import React from "react";
import {View, Text, Button} from "react-native";
import {ListItem, Right, Body, Icon} from "native-base";

const CardEdit = (props) => {

    const deleteDeck = () => {
        props.container.deleteDeck(props.deckName);
        props.navigation.navigate("Decks");
    }

    const renameDeck = () => {
    }

    return (
        <View>
            <Button title = "Delete Deck" onPress = {() => {deleteDeck()}}/>
        </View>
    );
}

export default CardEdit;