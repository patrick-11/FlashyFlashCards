import React from "react";
import {View, Text, Button} from "react-native";
import {ListItem, Right, Body, Icon} from "native-base";

const CardFront = (props) => {
    return (
        <View>
            <Text>{props.front}</Text>
            <Button title = "Flip" onPress = {() => {props.flip()}}/>
        </View>
    );
}

export default CardFront;