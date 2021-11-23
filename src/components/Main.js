import {Switch, Route, useRouteMatch} from 'react-router-dom'
import Card from '../pages/Cards/Card'
import Decks from '../pages/Decks/Decks'
import DecksUpdate from '../pages/Decks/DecksUpdate'
import DecksShow from '../pages/Decks/DecksShow'
import Home from '../pages/Home'
import DecksNew from '../pages/Decks/DELETE-DecksNew'
import { useState, useEffect } from 'react'
import { TableBody } from '@mui/material'
import Practice from '../pages/Practice'

const Main = () => {

    let { path, url } = useRouteMatch();
    // const URL = ""

    // const sampleDeckNames = ["Deck 1", "Deck 2", "Deck 3"]
    // const sampleDecks = [
    //     {
    //         deckTag: "animals",
    //         _id: 1234
    //     },
    //     {
    //         deckTag: "flowers",
    //         _id: 2345
    //     },
    //     {
    //         deckTag: "presidents",
    //         _id: 3456
    //     }
    // ]
    // const sampleCards = [
    //     {
    //         word: "cat",
    //         definition: "Furry feline",
    //         example: "Dr. Seuss is a cat in a hat.",
    //         deckTag: "animals",
    //         deckId: 1234
    //     },
    //     {
    //         word: "doggie",
    //         definition: "A barking cat",
    //         example: "Hey there, dog.",
    //         deckTag: "animals",
    //         deckId: 1234
    //     },
    //     {
    //         word: "elephant",
    //         definition: "A big, leathery mouse",
    //         example: "See the elephant?",
    //         deckTag: "animals",
    //         deckId: 1234
    //     },
    //     {
    //         word: "rose",
    //         definition: "watch for thorns!",
    //         example: "Rosey O'Donnel",
    //         deckTag: "flowers",
    //         deckId: 2345
    //     },
    //     {
    //         word: "daisy",
    //         definition: "it's also a name",
    //         example: "Lazy Daisy",
    //         deckTag: "flowers",
    //         deckId: 2345
    //     },
    //     {
    //         word: "dandelion",
    //         definition: "it's a weed - yes or no",
    //         example: "Well, that's dandy",
    //         deckTag: "flowers",
    //         deckId: 2345
    //     },
    // ]

    //CARD FUNCTIONS: getCards, updateCard, deleteCard, newCard

    const [cards, setCards] = useState(null)
    const cardURL = "https://ringo-flashcards.herokuapp.com/api/my/card/"

    const getCards = async () => {
        const response = await fetch(cardURL);
        const data = await response.json();
        setCards(data);
    }


    // const updateCard = async (card, id) => {
    //     await fetch(cardURL + id, {
    //         method: "put",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(card)
    //     })
    //     getCards()
    // }

    const deleteCard = async (id) => {
        console.log(id)
        await fetch(cardURL + id, {
            method: "delete"
        })
        getCards()
    }


    const newCard = async (card, id, deckName) => {
        
        //also need to add deckTag and deckId
        const data = {
            "word": card[0].word,
            "definition": card[0].meanings[0].definitions[0].definition,
            "deckId": id,
            "deckTag": deckName
        }
        await fetch(cardURL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }) 
        getCards();
    }

    //DECK FUNCTIONS: getDecks, updateDeck, deleteDeck, newDeck

    const [decks, setDecks] = useState(null)
    const deckURL = "https://ringo-flashcards.herokuapp.com/api/my/decks/";

    const getDecks = async () => {
        const response = await fetch(deckURL)
        const data = await response.json()
        console.log(data);
        console.log('hello')
        setDecks(data)
    }

    const updateDeck = async (deck, id) => {
        await fetch(deckURL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(deck)
        })
        getDecks()
    }

    const deleteDeck = async (id) => {
        await fetch(deckURL + id, {
            method: "delete"
        })
        getDecks()
    }

    const newDeck = async (deck) => {
        await fetch(deckURL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(deck)
        })
        getDecks()
    }

    useEffect(() => getDecks(), [])
    useEffect(() => getCards(), [])


    return (
        <Switch>
            <Route exact path={path}>
                <Home newDeck={newDeck} getDecks={getDecks} decks={decks} />
            </Route>
            <Route exact path={`${path}/decks`}>
                <Decks decks={decks}/>
            </Route>
            {/* <Route path={`${path}/decks/new`}>
                <DecksNew decks={decks} newDeck={newDeck} sampleDeck={sampleDeck}/>
            </Route> */}
            <Route path={`${path}/decks/:id/update`} render={(rp) => (
                    <DecksUpdate newCard={newCard} deleteCard={deleteCard} decks={decks} cards={cards} {...rp} updateDeck={updateDeck} />
                )}
            />
            <Route path={`${path}/decks/:id/practice`} render={(rp) => (
                    <Practice cards={cards} decks={decks} {...rp} />
                )}
            />
            <Route path={`${path}/decks/:id`} render={(rp) => (
                    <DecksShow cards={cards} decks={decks} deleteDeck={deleteDeck} {...rp} />
                )}
            />
            <Route path="/my/card/:id" render={(rp) => (
                <Card 
                    cards={cards}
                    deleteCard={deleteCard}
                    {...rp} 
                />
                )}
                >
            </Route>
        </Switch>
    )
}

export default Main;