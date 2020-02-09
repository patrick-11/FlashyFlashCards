import React from "react";
import {View, Text, Button} from "react-native";
import {ListItem, Right, Body, Icon} from "native-base";

const CardStats = (props) => {

    const right = props.answered.filter(card => card.answer).length;
    const wrong = props.answered.filter(card => !card.answer).length;
    const left = props.cards.length;

    return (
        <View>
            <Text>Right: {right} Wrong: {wrong} Cards left: {left}</Text>
        </View>
    );
}

export default CardStats;