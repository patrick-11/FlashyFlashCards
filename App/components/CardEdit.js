import React from "react";
import {Button} from "react-native";
import {Card, CardItem, Body} from "native-base";

const CardEdit = (props) => {

    const deleteDeck = () => {
        props.container.deleteDeck(props.deckName);
        props.navigation.navigate("Decks");
    }

    const renameDeck = () => {
        props.navigation.navigate("Rename Deck", {deckName: props.deckName});
    }

    const addCard = () => {
        props.navigation.navigate("Add Card", {deckName: props.deckName});
    }

    const deleteCard = () => {
        props.container.deleteCard(props.deckName, props.currCard);
        props.navigation.navigate("Decks");
    }

    return (
        <Card>
            <CardItem bordered>
                <Body style = {{alignItems: "center"}}>
                    <Button title = "Delete Deck" onPress = {() => {deleteDeck()}}/>
                </Body>
            </CardItem>
            <CardItem bordered>
                <Body style = {{alignItems: "center"}}>
                    <Button title = "Rename Deck" onPress = {() => {renameDeck()}}/>
                </Body>
            </CardItem>
            <CardItem bordered>
                <Body style = {{alignItems: "center"}}>
                    <Button title = "Add Card" onPress = {() => {addCard()}}/>
                </Body>
            </CardItem>
            <CardItem bordered>
                <Body style = {{alignItems: "center"}}>
                    <Button title = "Delete Current Card" onPress = {() => {deleteCard()}}/>
                </Body>
            </CardItem>
        </Card>
    );
}

export default CardEdit;