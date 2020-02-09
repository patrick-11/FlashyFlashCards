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
        //AsyncStorage.clear();
    }

	persist = {
		key: "Deck",
		storage: AsyncStorage
    }

    getDecks = () => {
        return this.state.decks;
    }

    addDeck = (deck) => {
        this.setState((curr) => ({decks: [...curr.decks, deck]}));
    }

    deleteDeck = (deckName) => {
        const decks = this.state.decks.filter(deck => deck.name !== deckName);
        this.setState({decks: decks});
    }

    getDeck = (deckName) => {
        return this.state.decks.filter(deck => deck.name === deckName);
    }
}