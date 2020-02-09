import React from "react";
import {View, Button} from "react-native";
import {Item, Input} from "native-base";


const DeckAdd = (props) => {

    const [deckName, setDeckName] = React.useState("");

    props.navigation.setOptions({
        headerRight: () => <Button title = "Save" onPress = {() => onPress()}/>
    });

    const onPress = () => {
        if(deckName.length > 3) {
            props.container.addDeck({name: deckName, cards: []});
            console.log(props.container.getDecks())
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
                    value = {deckName}
                    onChangeText = {(deckName) => setDeckName(deckName)}
                />
            </Item>
        </View>
    );
}


export default DeckAdd;