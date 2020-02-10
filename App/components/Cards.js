import React from "react";
import {View, Button} from "react-native";
import {Card, CardItem, Body, Icon} from "native-base";

import CardFront from "./CardFront";
import CardBack from "./CardBack";
import CardStats from "./CardStats";

const Cards = (props) => {

    const [front, setFront] = React.useState(true);
    const [cards, setCards] = React.useState(props.container.getDeck(props.deckName).cards);
    const [answered, setAnswered] = React.useState([]);
    const [time, setTime] = React.useState(Date.now());

    props.navigation.setOptions({
        headerTitle: props.deckName,
        headerRight: () => <Button title = "Edit" onPress = {() => props.navigation.navigate("Edit", {deckName: props.deckName, currCard: currCard()})}/>
    });

    const cardsLeft = () => cards.length > 0;

    const currCard = () => cards[0];

    const popCurrCard = () => {
        const rest = ([first, ...rest]) => rest;
        setCards(rest(cards));
    }

    const flip = () => setFront(!front);

    const getTime = () => Date.now() - time;

    const answer = (answer) => {
        const newAnswer = {card: currCard(), answer: answer, time: getTime()};
        setAnswered([newAnswer, ...answered]);
        popCurrCard();
        flip();
        setTime(Date.now());
	}

	const orderCards = () => {
        const longTimeFirst = (a, b) => {a.time > b.time};
		const right = answered.filter(card => card.answer).sort(longTimeFirst);
		const wrong = answered.filter(card => !card.answer).sort(longTimeFirst);

		return [
			...wrong.map(answer => answer.card),
			...right.map(answer => answer.card)
        ];
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
                    <CardBack card = {currCard()} flip = {answer}/>
                :
                <Card>
                    <CardStats answered = {answered}/>
                    <CardItem bordered>
                        <Body style = {{alignItems: "center"}}>
                            <Button title = "Restart" onPress = {() => {restart()}}/>
                        </Body>
                    </CardItem>
                </Card>
            }
        </View>
    );
}

export default Cards;