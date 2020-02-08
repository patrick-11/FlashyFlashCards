import React from "react";
import { AsyncStorage } from "react-native";
import { PersistContainer } from "unstated-persist";

import deck from "../data/flashcards";

export default class DeckContainer extends PersistContainer {

    constructor(props) {
        super(props);

        this.state = {
            decks: deck
        }
    }

	persist = {
		key: "Deck",
		storage: AsyncStorage
    }

    getDecks = () => {
        return this.state.decks;
    }

    addDecks = (deck) => {
        this.setState((prev) => [deck, ...prev.decks]);
    }
}