import React from "react";
import { AsyncStorage } from "react-native";
import { PersistContainer } from "unstated-persist";

import deck from "../data/flashcards";

export default class DeckContainer extends PersistContainer {

    constructor(props) {
        super(props);

        this.state = {
            decks: []
        }
    }


	persist = {
		key: "Deck",
		storage: AsyncStorage
    }
}