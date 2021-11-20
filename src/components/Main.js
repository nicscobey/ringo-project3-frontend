import {Switch, Route, useRouteMatch} from 'react-router-dom'
import Card from '../pages/Cards/Card'
import Decks from '../pages/Decks/Decks'
import DecksUpdate from '../pages/Decks/DecksUpdate'
import DecksShow from '../pages/Decks/DecksShow'
import DecksNew from '../pages/Decks/DELETE-DecksNew'
import { useState } from 'react'
import { TableBody } from '@mui/material'

const Main = () => {

    let { path, url } = useRouteMatch();
    const URL = ""

    const sampleDeckNames = ["Deck 1", "Deck 2", "Deck 3"]
    const sampleDecks = [
        {
            deckTag: "animals",
            _id: 1234
        },
        {
            deckTag: "flowers",
            _id: 2345
        },
        {
            deckTag: "presidents",
            _id: 3456
        }
    ]
    const sampleCards = [
        {
            word: "cat",
            definition: "Furry feline",
            example: "Dr. Seuss is a cat in a hat.",
            deckTag: "animals",
            deckId: 1234
        },
        {
            word: "dog",
            definition: "A barking cat",
            example: "Hey there, dog.",
            deckTag: "animals",
            deckId: 1234
        },
        {
            word: "elephant",
            definition: "A big, leathery mouse",
            example: "See the elephant?",
            deckTag: "animals",
            deckId: 1234
        },
        {
            word: "rose",
            definition: "watch for thorns!",
            example: "Rosey O'Donnel",
            deckTag: "flowers",
            deckId: 2345
        },
        {
            word: "daisy",
            definition: "it's also a name",
            example: "Lazy Daisy",
            deckTag: "flowers",
            deckId: 2345
        },
        {
            word: "dandelion",
            definition: "it's a weed - yes or no",
            example: "Well, that's dandy",
            deckTag: "flowers",
            deckId: 2345
        },
    ]

    //CARD FUNCTIONS: getCards, updateCard, deleteCard, newCard

    const [cards, setCards] = useState(null)

    const getCards = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setCards(data);
    }

    const updateCard = async (card, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(card)
        })
        getCards()
    }

    const deleteCard = async (id) => {
        await fetch(URL + id, {
            method: "delete"
        })
        getCards()
    }

    const newCard = async (card) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(card)
        }) 
        getCards();
    }

    //DECK FUNCTIONS: getDecks, updateDeck, deleteDeck, newDeck

    const [decks, setDecks] = useState(null)

    const getDecks = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setDecks(data)
    }

    const updateDeck = async (deck, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(deck)
        })
        getDecks()
    }

    const deleteDeck = async (id) => {
        await fetch(URL + id, {
            method: "delete"
        })
        getDecks()
    }

    const newDeck = async (deck) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(deck)
        })
        getDecks()
    }

    return (
        <Switch>
            <Route exact path={path}>
               
            </Route>
            <Route exact path={`${path}/decks`}>
                <Decks decks={decks} sampleDecks={sampleDecks} sampleDeckNames={sampleDeckNames}/>
            </Route>
            {/* <Route path={`${path}/decks/new`}>
                <DecksNew decks={decks} newDeck={newDeck} sampleDeck={sampleDeck}/>
            </Route> */}
            <Route path={`${path}/decks/:id/update`} render={(rp) => (
                    <DecksUpdate decks={decks} sampleCards={sampleCards} sampleDecks={sampleDecks} sampleDeck={sampleCards} {...rp} updateDeck={updateDeck} />
                )}
            />
            <Route path={`${path}/decks/:id`} render={(rp) => (
                    <DecksShow decks={decks} sampleCards={sampleCards} sampleDecks={sampleDecks} {...rp} />
                )}
            />
            <Route path="/my/card/:id">
                <Card cards={cards} sampleCards={sampleCards} />
            </Route>
        </Switch>
    )
}

export default Main;