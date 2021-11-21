import { Switch } from "react-router-dom"
import { Route } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"
import * as React from "react"

const Card = (props) => {
    
    const id = props.match.params.id
    const card = props.card
    const deleteCard = props.deleteCard;
    // const cards = card.find(p => p._id === id_)
    
    // *DO WE NEED THIS?: state for form
    // const [editCard, setEditCard] = useState(card) // DO WE NEED THIS?

    // *DO WE NEED THIS?: handleSubmit function for form
    // const handleSubmit = event => {
    //     event.preventDefault()
    //     props.updatePeople(editForm)
    //     props.history.push("/")
    // }

    // *DO WE NEED THIS?: delete/remove card from deck
    // const deleteCard = () => {
    //     props.deleteDeck(card._id)
    //     props.history.push("/")
    // }

    return (
    <div className="card">
        <h1>{card.word}</h1> 
        <h2>Definition: {card.definition}</h2>
        <h3>Example: {card.example}</h3>
        <button id="delete" onClick={deleteCard}>
            Delete Card
        </button>
    </div>
    )
}

export default Card;