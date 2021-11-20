import {Switch, Route, Link} from 'react-router-dom'
import {Button, Stack, toggleButtonClasses} from '@mui/material'
import { useState, useEffect } from 'react';
import CardPreview from '../../components/CardPreview'

const DecksShow = (props) => {

    const id = parseInt(props.match.params.id);
    const [showCards, setShowCards] = useState(false)
    const sampleCards = props.sampleCards.filter(card => card.deckId === id)
    console.log(sampleCards);

    const toggleShowCards = () => {
        setShowCards(!showCards)
    }



    const revealCards = () => {
        return (
            <>
                <Button variant="contained" className="fixed-width-button" onClick={toggleShowCards}>Hide Cards</Button>
                {sampleCards.map(card => {
                    return (
                        <CardPreview word={card.word} definition={card.definition} expanded={false} edit={false}/>
                    )
                })}
            </>
        )
    }

    const hideCards = () => {
        return (
            <Button variant="contained" className="fixed-width-button" onClick={toggleShowCards}>Reveal Cards</Button>
        )
    }

    return (
        <div>
            <h1>Decks Show</h1>
            <h3>Deck Id: {id}</h3> 
            <Stack className="center-items" direction="column" spacing={2}>
                <Button variant="contained" className="fixed-width-button">Practice Flashcards</Button>
                <Link to={`/my/decks/${id}/update`}><Button variant="contained" className="fixed-width-button">Add or Update Cards</Button></Link>
                {showCards ? revealCards() : hideCards()}
            </Stack>
        </div>
    )
}

export default DecksShow;