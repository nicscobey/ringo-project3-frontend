import {Switch, Route, Link} from 'react-router-dom'
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import LoadingIcon from '../../components/LoadingIcon';

const Decks = (props) => {

    const decks = props.decks;

    const deckButtons = () => {
        return decks.map((deck) => (
            <Link to={`/my/decks/${deck._id}`}><Button className="fixed-width-button" variant="contained">{deck.deckTag}</Button></Link>
        ))
    }

    return (
        <div>
            <h1>My Flashcard Decks</h1>

            <Link to={`/my/card/61998bc409e75aab8e6aba86`}>
             <button>click here</button>
            </Link>

            <Stack className="flex-center" spacing={4}>
                {decks ? deckButtons() : <LoadingIcon />}
            </Stack>
        </div>
    )
}

export default Decks;