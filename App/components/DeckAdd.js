import React from "react";
import {View, Button} from "react-native";
import {Item, Input, Card} from "native-base";


const DeckAdd = (props) => {

    const [deckName, setDeckName] = React.useState("");

    props.navigation.setOptions({
        headerRight: () => <Button title = "Save" onPress = {() => deckAdd()}/>
    });

    const deckAdd = () => {
        if(deckName.length > 0) {
            props.container.addDeck({name: deckName, cards: []});
            props.navigation.navigate("Decks");
        }
        else {
            alert("Enter a Deck name!")
        }
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