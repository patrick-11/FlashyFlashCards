import React from "react";
import {Subscribe} from "unstated";

import Card from "../components/Card";
import DeckContainer from "../container/DeckContainer";

const ScreenCard = (props) => {

    const {deckName} = props.route.params;

    return (
        <Subscribe to = {[DeckContainer]}>
            {
                (deckContainer) => (
                    <Card
                        navigation = {props.navigation}
                        container = {deckContainer}
                        deckName = {deckName}
                    />
                )
            }
        </Subscribe>
    );
}

export default ScreenCard;