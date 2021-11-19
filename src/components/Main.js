import {Switch, Route, useRouteMatch} from 'react-router-dom'
import Card from '../pages/Cards/Card'
import Decks from '../pages/Decks/Decks'
import DecksUpdate from '../pages/Decks/DecksUpdate'
import DecksShow from '../pages/Decks/DecksShow'
import DecksNew from '../pages/Decks/DecksNew'

const Main = () => {

    let { path, url } = useRouteMatch();

    const sampleDeckNames = ["Deck 1", "Deck 2", "Deck 3"]

    const sampleDeck = [
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
    ]

    return (
        <Switch>
            <Route exact path={path}>
               
            </Route>
            <Route exact path={`${path}/decks`}>
                <Decks  sampleDeckNames={sampleDeckNames}/>
            </Route>
            <Route path={`${path}/decks/new`}>
                <DecksNew sampleDeck={sampleDeck}/>
            </Route>
            <Route path={`${path}/decks/:id/update`} render={(rp) => (
                    <DecksUpdate {...rp} />
                )}
            />
            <Route path={`${path}/decks/:id`} render={(rp) => (
                    <DecksShow {...rp} />
                )}
            />
            <Route path="/my/card/:id">
                <Card />
            </Route>
        </Switch>
    )
}

export default Main;