import React from "react";
import {Subscribe} from "unstated";

import CardEditAdd from "../components/CardEditAdd";
import DeckContainer from "../container/DeckContainer";

const ScreenCardEditAdd = (props) => {

    const {deckName} = props.route.params;

    return (
        <Subscribe to = {[DeckContainer]}>
            {
                (deckContainer) => (
                    <CardEditAdd
                        navigation = {props.navigation}
                        container = {deckContainer}
                        deckName = {deckName}
                    />
                )
            }
        </Subscribe>
    );
}

export default ScreenCardEditAdd;