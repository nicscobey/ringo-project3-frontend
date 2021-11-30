import {Link} from 'react-router-dom'
import {Button, Stack, Box, Typography, Modal} from '@mui/material'
import { useState} from 'react';
import CardPreview from '../../components/CardPreview'
import LoadingIcon from '../../components/LoadingIcon';

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

    const [showCards, setShowCards] = useState(false)
    const [open, setOpen] = useState(false);

    const loadedData = () => {

    const id = props.match.params.id;
    const cards = props.cards.filter(card => card.deckId === id)

    //SORT CARDS ALPHABETICALLY BY WORD
    function sortCards(a,b) {
        if (a.word.toLowerCase() > b.word.toLowerCase()) return 1
        return -1
    }
    cards.sort(sortCards)

    const deck = props.decks.find(deck => deck._id === id)

    const toggleShowCards = () => {
        setShowCards(!showCards)
    }

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
            <h1  className="mansalva blue medium">{deck.deckTag}</h1>
            <Stack className="center-items" direction="column" spacing={2}>
                <Link to={`/my/decks/${id}/practice`}><Button variant="contained" className="fixed-width-button">Practice Flashcards</Button></Link>
                <Link to={`/my/decks/${id}/update`}><Button variant="contained" className="fixed-width-button">Edit Deck</Button></Link>
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
                    <Stack className="flex-column-center margin-top" direction="row" spacing={4} >
                        <Link to="/my/decks"><Button variant="contained" type="submit" onClick={removeDeck}>Delete Deck</Button></Link>
                        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
        )
    }

    return (
        <>
            {props.cards && props.decks && props.deleteDeck ? loadedData() : <div className="center-button margin-top"><LoadingIcon /></div>}
        </>
    )
}

export default DecksShow;