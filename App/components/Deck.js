import React from "react";
import {Text} from "react-native";
import {ListItem, Right, Body, Icon} from "native-base";

const Deck = (props) => {

    const deck = props.deck.item;

    return (
        <ListItem noIndent onPress = {() => props.navigation.navigate("Cards", {deckName: deck.name})}>
            <Body>
                <Text style = {{fontWeight: "bold"}}>{deck.name}</Text>
                <Text>Cards: {deck.cards.length}</Text>
            </Body>
            <Right>
                <Icon name = "arrow-forward"/>
            </Right>
        </ListItem>
    );
}

export default Deck;