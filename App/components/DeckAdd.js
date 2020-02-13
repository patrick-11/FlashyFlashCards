import React from "react";
import {View, Button} from "react-native";
import {Item, Input, Card} from "native-base";


const DeckAdd = (props) => {

    const [deckName, setDeckName] = React.useState("");

    props.navigation.setOptions({
        headerRight: () => <Button title = "Save" disabled = {!deckName} onPress = {() => deckAdd()}/>
    });

    const deckAdd = () => {
        props.container.addDeck({name: deckName, cards: []});
        props.navigation.navigate("Decks");
    }

    return (
        <View>
            <Card>
                <Item>
                    <Input
                        placeholder = "Name"
                        value = {deckName}
                        onChangeText = {(deckName) => setDeckName(deckName)}
                    />
                </Item>
            </Card>
        </View>
    );
}


export default DeckAdd;