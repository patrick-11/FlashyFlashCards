import React from "react";
import {View, Text, Button} from "react-native";
import {Item, Input} from "native-base";

const CardEditRename = (props) => {

    const [newDeckName, setNewDeckName] = React.useState("");

    props.navigation.setOptions({
        headerRight: () => <Button title = "Save" onPress = {() => {deckRename()}}/>
    });

    const deckRename = () => {
        if(newDeckName.length > 0) {
            props.container.renameDeck(props.deckName, newDeckName);
            props.navigation.navigate("Decks");
        }
        else {
            alert("Enter a Deck name!")
        }
    }

    return (
        <View>
            <Item>
                <Input
                    placeholder = "Name"
                    value = {newDeckName}
                    onChangeText = {(newDeckName) => setNewDeckName(newDeckName)}
                />
            </Item>
        </View>
    );
}

export default CardEditRename;