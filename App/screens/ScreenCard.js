import React from "react";
import {Subscribe} from "unstated";

import DeckList from "../components/DeckList";
import DeckContainer from "../container/DeckContainer";

const ScreenCard = (props) => {
    return (
        <Subscribe to = {[DeckContainer]}>
            {
                (deckContainer) => (
                    <DeckList
                        navigation = {props.navigation}
                        container = {deckContainer}
                    />
                )
            }
        </Subscribe>
    );
}

export default ScreenCard;