import React from "react";
import {View, Button} from "react-native";
import {Item, Input, Card} from "native-base";

const CardEditRename = (props) => {

    const [newDeckName, setNewDeckName] = React.useState("");

    props.navigation.setOptions({
        headerRight: () => <Button title = "Save" disabled = {!newDeckName} onPress = {() => {deckRename()}}/>
    });

    const deckRename = () => {
        props.container.renameDeck(props.deckName, newDeckName);
        props.navigation.navigate("Decks");
    }

    return (
        <View>
            <Card>
                <Item>
                    <Input
                        placeholder = "Name"
                        value = {newDeckName}
                        onChangeText = {(newDeckName) => setNewDeckName(newDeckName)}
                    />
                </Item>
            </Card>
        </View>
    );
}

export default CardEditRename;