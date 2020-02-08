import React from "react";
import {Text} from "react-native";
import {ListItem, Right, Body, Icon} from "native-base";

const Deck = (props) => {
    return (
        <ListItem noIndent onPress = {() => alert("Test")}>
            <Body>
                <Text>{props.deck.item.name}</Text>
                <Text>Cards: {props.deck.item.cards.length}</Text>
            </Body>
            <Right>
                <Icon name = "arrow-forward"/>
            </Right>
        </ListItem>
    );
}

export default Deck;