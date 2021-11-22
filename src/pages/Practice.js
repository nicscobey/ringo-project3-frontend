import {Switch, Route, Link} from 'react-router-dom'
import { Button, Stack } from '@mui/material';
import Flashcard from '../components/Flashcard';
import PracticeNav from '../components/PracticeNav';
import { useState, useEffect } from 'react';
import LoadingIcon from '../components/LoadingIcon';
import ProgressBar from '../components/ProgressBar';

const Practice = (props) => {
    const id = props.match.params.id;
    const cards = props.cards.filter(card => card.deckId === id)
    const [cardNumber, setCardNumber] = useState(0)
    const [showFront, setShowFront] = useState(true)
    const [randomizedCards, setRandomizedCards] = useState([])

    const randomizeCards = () => {
        let i = cards.length
        const tempArray = []
        while (i > 0) {
            let j = Math.floor(Math.random() * (cards.length))
            tempArray.push(cards[j])
            cards.splice(j, 1)
            i--
        }
        setRandomizedCards(tempArray)
        setCardNumber(0)
    }

    useEffect(() => {randomizeCards()}, [])

    const previousCard = () => {
        if (cardNumber === 0) {
            setCardNumber(randomizedCards.length-1)
        }
        else {
            setCardNumber(cardNumber-1)
        }
        setShowFront(true)
    }

    const nextCard = () => {
        if (cardNumber === randomizedCards.length -1) {
            setCardNumber(0)
        }
        else {
            setCardNumber(cardNumber+1)
        }
        setShowFront(true)
    }

    const toggleSide = () => {
        setShowFront(!showFront)
    }

    return (
        <div>
            <h1>Practice Card!</h1>
            {/* <h2>id: {id}</h2> */}
            <h6>Bonus: progress bar</h6>
            {/* <ProgressBar steps={randomizedCards.length} activeStep={cardNumber} /> */}
            <Stack className="center-items" >
                {randomizedCards.length > 0 ? <Flashcard showFront={showFront} card={randomizedCards[cardNumber]}/> : <LoadingIcon />}
            </Stack>
            <ProgressBar steps={randomizedCards.length} activeStep={cardNumber} />
            <PracticeNav randomizeCards={randomizeCards} toggleSide={toggleSide} previousCard={previousCard} nextCard={nextCard} />
        </div>
    )
}

export default Practice;