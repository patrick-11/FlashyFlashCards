import React from "react";
import {Text, Button} from "react-native";
import {Card, CardItem, Body} from "native-base";

const CardFront = (props) => {
    return (
        <Card>
            <CardItem bordered>
                <Body style = {{alignItems: "center"}}>
                    <Text>{props.front}</Text>
                </Body>
            </CardItem>
            <CardItem bordered>
                <Body style = {{alignItems: "center"}}>
                    <Button title = "Flip" onPress = {() => {props.flip()}}/>
                </Body>
            </CardItem>
        </Card>
    );
}

export default CardFront;