import React from "react";
import {View, Text, Button} from "react-native";
import {Card, CardItem, Body, Left, Right} from "native-base";

const CardBack = (props) => {
    return (
        <Card>
            <CardItem bordered>
                <Body style = {{alignItems: "center"}}>
                    <Text>{props.card.front}</Text>
                </Body>
            </CardItem>
            <CardItem bordered>
                <Body style = {{alignItems: "center"}}>
                    <Text>{props.card.back}</Text>
                </Body>
            </CardItem>
            <CardItem bordered>
                <Left>
                    <Button title = "Wrong" onPress = {() => {props.flip(false)}}/>
                </Left>
                <Right>
                    <Button title = "Right" onPress = {() => {props.flip(true)}}/>
                </Right>
            </CardItem>
        </Card>
    );
}

export default CardBack;