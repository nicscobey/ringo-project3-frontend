import {Switch, Route, Link} from 'react-router-dom'
import {Button, Stack, Box, Typography, Modal, TextField } from '@mui/material'
import { useState, useEffect } from 'react';
import CardPreview from '../../components/CardPreview'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    "border-radius": "20px"
};

const DecksShow = (props) => {

    console.log(props)


    const id = props.match.params.id;
    const [showCards, setShowCards] = useState(false)
    // const sampleCards = props.sampleCards.filter(card => card.deckId === id)
    const cards = props.cards.filter(card => card.deckId === id)
    console.log(id);
    console.log(cards)
    // console.log(sampleCards);
    const deck = props.decks.find(deck => deck._id === id)
    console.log(deck)

    const toggleShowCards = () => {
        setShowCards(!showCards)
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const revealCards = () => {
        return (
            <>
                <Button variant="contained" className="fixed-width-button" onClick={toggleShowCards}>Hide Cards</Button>
                {cards.map(card => {
                    return (
                        <CardPreview word={card.word} definition={card.definition} expanded={false} edit={false}/>
                    )
                })}
            </>
        )
    }

    const hideCards = () => {
        return (
            <Button variant="contained" className="fixed-width-button" onClick={toggleShowCards}>Reveal Cards</Button>
        )
    }

    const removeDeck = () => {
        props.deleteDeck(id)
    }

    return (
        <div>
            <h1>{deck.deckTag}</h1>
            <Stack className="center-items" direction="column" spacing={2}>
                <Button variant="contained" className="fixed-width-button">Practice Flashcards</Button>
                <Link to={`/my/decks/${id}/update`}><Button variant="contained" className="fixed-width-button">Add or Update Cards</Button></Link>
                {showCards ? revealCards() : hideCards()}
                <Button variant="outlined" className="fixed-width-button" onClick={handleOpen}>Delete Deck</Button>
            </Stack>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h4">
                        Are you sure you wish to delete this deck? This action cannot be undone.
                    </Typography>
                    {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <b>Definition:</b> {word ? loadedWord() : null}
                    </Typography> */}
                    <Stack className="flex-column-center" direction="row" spacing={4} >
                        <Link to="/my/decks"><Button variant="contained" type="submit" onClick={removeDeck}>Delete Deck</Button></Link>
                        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    )
}

export default DecksShow;