import React from "react";
import {View, Text, Button} from "react-native";
import {ListItem, Right, Body, Icon} from "native-base";

const CardBack = (props) => {
    return (
        <View>
            <Text>{props.back}</Text>
            <Button title = "Wrong" onPress = {() => {props.flip(false)}}/>
            <Button title = "Right" onPress = {() => {props.flip(true)}}/>
        </View>
    );
}

export default CardBack;