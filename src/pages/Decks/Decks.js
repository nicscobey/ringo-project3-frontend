import {Link} from 'react-router-dom'
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import LoadingIcon from '../../components/LoadingIcon';

const Decks = (props) => {

    const decks = props.decks;

    if (decks) {
    function sortDecks(a,b) {
        if (a.deckTag.toLowerCase() > b.deckTag.toLowerCase()) return 1
        return -1
    }
    decks.sort(sortDecks)
    }

    const deckButtons = () => {

        return decks.map((deck) => (
            <Link to={`/my/decks/${deck._id}`}><Button className="fixed-width-button" variant="contained">{deck.deckTag}</Button></Link>
        ))
    }

    return (
        <div>
            <h1>Flashcard Decks</h1>
            <Stack className="flex-center" spacing={4}>
                {decks ? deckButtons() : <LoadingIcon />}
            </Stack>
        </div>
    )
}

export default Decks;