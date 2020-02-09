import React from "react";
import {View, Text, Button} from "react-native";
import {ListItem, Right, Body, Icon} from "native-base";

import CardFront from "./CardFront";
import CardBack from "./CardBack";
import CardStats from "./CardStats";

const Card = (props) => {

    const [front, setFront] = React.useState(true);
    const [cards, setCards] = React.useState(props.container.getDeck(props.deckName)[0].cards);
    const [answered, setAnswered] = React.useState([]);

    props.navigation.setOptions({
        headerRight: () => <Button title = "Edit" onPress = {() => props.navigation.navigate("Edit", {deckName: props.deckName})}/>
    });

    const cardsLeft = () => cards.length > 0;

    const currCard = () => cards[0];

    const popCurrCard = () => {
        const rest = ([first, ...rest]) => rest;
        setCards(rest(cards));
    }

    const flip = () => setFront(!front);

    const answer = (answer) => {
        const newAnswer = {card: currCard(), answer: answer};
        setAnswered([newAnswer, ...answered]);
        popCurrCard();
        flip();
	}

	const orderCards = () => {
		const right = answered.filter(card => card.answer);
		const wrong = answered.filter(card => !card.answer);

		return [
			...wrong.map(answer => answer.card),
			...cards,
			...right.map(answer => answer.card),
		]
	}
	
	const restart = () => {
		const cards = orderCards();
		setCards(cards);
		setAnswered([]);
	}

    return (
        <View>
            {cardsLeft() ?
                front ?
                    <CardFront front = {currCard().front} flip = {flip}/>
                    :
                    <CardBack back = {currCard().back} flip = {answer}/>
                :
                <View>
                    <CardStats cards = {cards} answered = {answered}/>
                    <Button title = "Restart" onPress = {() => {restart()}}/>
                </View>

            }


        </View>
    );
}

export default Card;