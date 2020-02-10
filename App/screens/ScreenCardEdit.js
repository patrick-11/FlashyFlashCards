import React from "react";
import {Subscribe} from "unstated";

import CardEdit from "../components/CardEdit";
import DeckContainer from "../container/DeckContainer";

const ScreenCardEdit = (props) => {

    const {deckName, currCard} = props.route.params;

    return (
        <Subscribe to = {[DeckContainer]}>
            {
                (deckContainer) => (
                    <CardEdit
                        navigation = {props.navigation}
                        container = {deckContainer}
                        deckName = {deckName}
                        currCard = {currCard}
                    />
                )
            }
        </Subscribe>
    );
}

export default ScreenCardEdit;