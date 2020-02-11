# Flashy Flash Cards

Simple mobile flash card application created in [React Native](https://facebook.github.io/react-native/).

## Table of Contents

* [General info](#general-info)
* [Features](#features)
* [Technologies](#technologies)
* [Launch](#launch)
* [Sources](#sources)

## General info

The user can select one of the decks. The front of the card is shown and the user has to guess the answer. After the user guessed all cards, the user can see his/her score and restart the game. Also after the first run the cards will be probably in a different order. First all cards that were guessed wrong are shown (sorted by time taken to answer). Then all cards that were guessed right are shown (sorted by time taken to answer).

## iOS App Preview

<img src = "Preview/ios_decks.png" height = "700">
<img src = "Preview/ios_flip.png" height = "700">
<img src = "Preview/ios_guess.png" height = "700">


## Android App Preview

* Pics

## Features

* Adding a new deck
* Deleting a deck
* Renaming a deck
* Adding new cards
* Deleting cards

### TODO

* Delete multiple cards

## Technologies

* JavaScript, React, React Native
* Navigation: React Navigation
* Persistency: Unstated Persist
* Style: NativeBase

## Launch

### Expo

* Try the App on Expo (link)

### Setup

```
$ cd ../FlashyFlashCards
$ npm install
$ npm start
```

## Sources

* [React](https://reactjs.org/)
* [React Native](https://facebook.github.io/react-native/)
* [React Navigation](https://reactnavigation.org/)
* [NativeBase](https://nativebase.io/)
* [Unstated Persist](https://github.com/rt2zz/unstated-persist)