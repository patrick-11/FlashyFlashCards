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
        this.setState((curr) => ({decks: [deck, ...curr.decks]}));
    }

    deleteDeck = (deckName) => {
        const decks = this.state.decks.filter(deck => deck.name !== deckName);
        this.setState({decks: decks});
    }

    getDeck = (deckName) => {
        return this.state.decks.find(deck => deck.name === deckName);
    }

    renameDeck = (deckName, newDeckName) => {
        const deck = this.getDeck(deckName);
        this.deleteDeck(deckName);
        deck.name = newDeckName;
        this.addDeck(deck);
    }

    addCard = (deckName, card) => {
        const deck = this.getDeck(deckName);
        this.deleteDeck(deckName);
        deck.cards.push(card);
        this.addDeck(deck);
    }

    deleteCard = (deckName, card) => {
        const deck = this.getDeck(deckName);
        this.deleteDeck(deckName);
        deck.cards = deck.cards.filter(_card => (_card.front !== card.front && _card.back !== card.back));
        this.addDeck(deck);
    }
}