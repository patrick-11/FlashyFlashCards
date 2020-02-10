import React from "react";
import {View, Button} from "react-native";
import {Item, Input, Card} from "native-base";

const CardEditAdd = (props) => {

    const [front, setFront] = React.useState("");
    const [back, setBack] = React.useState("");

    props.navigation.setOptions({
        headerRight: () => <Button title = "Save" onPress = {() => {addCard()}}/>
    });

    const addCard = () => {
        if(front.length > 0 && back.length > 0) {
            props.container.addCard(props.deckName, {front: front, back: back});
            props.navigation.navigate("Decks");
        }
        else {
            alert("Enter front and back!")
        }
    }

    return (
        <View>
            <Card>
                <Item>
                    <Input
                        placeholder = "Front"
                        value = {front}
                        onChangeText = {(front) => setFront(front)}
                    />
                </Item>
                <Item>
                    <Input
                        placeholder = "Back"
                        value = {back}
                        onChangeText = {(back) => setBack(back)}
                    />
                </Item>
            </Card>
        </View>
    );
}

export default CardEditAdd;