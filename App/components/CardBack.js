import React from "react";
import {View, Text, Button} from "react-native";
import {ListItem, Right, Body, Icon} from "native-base";

const CardBack = (props) => {

    const deleteCard = () => {
        
    }

    return (
        <View>
            <Text>{props.back}</Text>
            <Button title = "Wrong" onPress = {() => {props.flip(false)}}/>
            <Button title = "Right" onPress = {() => {props.flip(true)}}/>
            <Button title = "Delete" onPress = {() => {null}}/>
        </View>
    );
}

export default CardBack;