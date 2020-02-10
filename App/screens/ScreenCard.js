import React from "react";
import {Subscribe} from "unstated";

import Cards from "../components/Cards";
import DeckContainer from "../container/DeckContainer";

const ScreenCard = (props) => {

    const {deckName} = props.route.params;

    return (
        <Subscribe to = {[DeckContainer]}>
            {
                (deckContainer) => (
                    <Cards
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