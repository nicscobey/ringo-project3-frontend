import {Switch, Route} from 'react-router-dom'
import Card from '../pages/Cards/Card'
import Decks from '../pages/Decks/Decks'

const Main = () => {
    return (
        <Switch>
            <Route exact path="/">
               
            </Route>
            <Route exact path="/decks">
                <Decks />
            </Route>
            <Route path="/decks/:id">
                <Decks />
            </Route>
            <Route path="/card/:id">
                <Card />
            </Route>
        </Switch>
    )
}

export default Main;