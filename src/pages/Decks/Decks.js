import {Link} from 'react-router-dom'
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import LoadingIcon from '../../components/LoadingIcon';
import { useEffect } from 'react';

const Decks = (props) => {

    // const decks = props.decks;

    // function sortDecks(a,b) {
    //     if (a.deckTag > b.deckTag) return 1
    //     return -1
    // }
    // decks.sort(sortDecks)

    const decks = props.decks;
    console.log(props);
    console.log(props)
    console.log(decks)

    if (decks) {
    function sortDecks(a,b) {
        if (a.deckTag.toLowerCase() > b.deckTag.toLowerCase()) return 1
        return -1
    }
    decks.sort(sortDecks)
    }

    const deckButtons = () => {

        // props.getDecks()
        

        return decks.map((deck) => (
            <Link to={`/my/decks/${deck._id}`}><Button className="fixed-width-button" variant="contained">{deck.deckTag}</Button></Link>
        ))
    }

    // useEffect(() => props.getDecks(), [])

    return (
        <div>
            <h1>Flashcard Decks</h1>

            {/* <Link to={`/my/card/61998bc409e75aab8e6aba86`}>
             <button>click here</button>
            </Link> */}

            <Stack className="flex-center" spacing={4}>
                {decks ? deckButtons() : <LoadingIcon />}
            </Stack>
        </div>
    )
}

export default Decks;