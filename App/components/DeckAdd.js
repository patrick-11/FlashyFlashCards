import React from "react";
import {View} from "react-native";
import {Item, Input} from "native-base";


const DeckAdd = (props) => {
    return (
        <View>
            <Item>
                <Input placeholder = "Name"/>
            </Item>
        </View>
    );
}


export default DeckAdd;