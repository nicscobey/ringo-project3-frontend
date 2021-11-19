import {Switch, Route, Link} from 'react-router-dom'
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'

const Decks = (props) => {

    console.log(props)

    const deckButtons = () => {
        return props.sampleDeckNames.map((deck) => (
            <Link to="/my/decks/hi"><Button className="fixed-width-button" variant="contained">{deck}</Button></Link>
        ))
    }

    return (
        <div>
            <h1>My Flashcard Decks</h1>
            <Stack className="flex-center" spacing={4}>
                {deckButtons()}
            </Stack>
        </div>
    )
}

export default Decks;