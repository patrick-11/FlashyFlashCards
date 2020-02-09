import React from "react";
import {Subscribe} from "unstated";

import DeckAdd from "../components/DeckAdd";
import DeckContainer from "../container/DeckContainer";

const ScreenDeckAdd = (props) => {
    return (
        <Subscribe to = {[DeckContainer]}>
            {
                (deckContainer) => (
                    <DeckAdd
                        navigation = {props.navigation}
                        container = {deckContainer}
                    />
                )
            }
        </Subscribe>
    );
}

export default ScreenDeckAdd;