import React from "react";
import {Text} from "react-native";
import {CardItem, Right, Left} from "native-base";

const CardStats = (props) => {
    const right = props.answered.filter(card => card.answer).length;
    const wrong = props.answered.filter(card => !card.answer).length;

    return (
        <CardItem bordered>
            <Left>
                <Text>Wrong: {wrong}</Text>
            </Left>
            <Right>
                <Text>Right: {right}</Text>
            </Right>
        </CardItem>
    );
}

export default CardStats;