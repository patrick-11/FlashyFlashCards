import React from "react";
import {Subscribe} from "unstated";

import CardEditRename from "../components/CardEditRename";
import DeckContainer from "../container/DeckContainer";

const ScreenCardEditRename = (props) => {

    const {deckName} = props.route.params;

    return (
        <Subscribe to = {[DeckContainer]}>
            {
                (deckContainer) => (
                    <CardEditRename
                        navigation = {props.navigation}
                        container = {deckContainer}
                        deckName = {deckName}
                    />
                )
            }
        </Subscribe>
    );
}

export default ScreenCardEditRename;