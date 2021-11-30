import { Link } from "react-router-dom"
import * as React from "react"
import { Button } from "@mui/material"

const Card = (props) => {
    console.log(props)

    const id = props.match.params.id
    const cards = props.cards
    const deleteCard = props.deleteCard;
    const card = cards.find(p => p._id === id)
   
    const removeCard = () => {
        deleteCard(id)
    }

    return (
    <div className="card">
        <h1>{card.word}</h1> 
        <h2>Definition: {card.definition}</h2>
        <h3>Example: {card.example}</h3>
        <Link to={`/my/decks/${card.deckId}`}>
            <Button variant="outlined" onClick= {removeCard}>
            Delete Card
             </Button>
        </Link>
    </div>
    )
}

export default Card;