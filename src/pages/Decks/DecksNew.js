import {Switch, Route} from 'react-router-dom'
import { Button, TextField, Modal, Box, Typography, Stack } from '@mui/material';
import {useState} from 'react'

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

const DecksNew = (props) => {

    const sampleCards = props.sampleDeck;

    const showSampleCards = () => {
        return sampleCards.map((card) => (
            <div>
                {card.word}
            </div>
        ))
    }

    const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/"
    const [word, setWord] = useState(null);
    const getWord = async (word) => {
        console.log(URL + word);
        const response = await fetch(URL+word)
        const data = await response.json()
        console.log(data)
        setWord(data);
    }

    const [form, setForm] = useState({deckName: "", word: ""});
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getWord(form.word)
        handleOpen();
    }

    const loadingWord = () => {
        return (
            <div>
                Loading...
            </div>
        )
    }

    const loadedWord = () => {
        return (
            <div>
                {word[0].meanings[0].definitions[0].definition}
            </div>
        )
    }

    return (
        <div>
            <h1>CREATE A NEW DECK</h1>
            <h2>Enter Deck Name</h2>
            <form className="center-items" onSubmit={handleSubmit}>
                {/* <TextField required onChange={handleChange} name="word" id="outlined-basic" label="Type a word..." variant="standard" value={form.word}/> */}
                <TextField onChange={handleChange} name="word" id="outlined-basic" label="Type a word..." variant="standard" value={form.word}/>
                <Button type="submit" variant="contained">Search</Button>
            </form>
            <h4>{sampleCards.length} cards in this deck</h4>
            {showSampleCards()}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Results for &#8220;{form.word}&#8221;
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <b>Definition:</b> {word ? loadedWord() : loadingWord()}
                    </Typography>
                    <Stack className="flex-column-center" direction="row" spacing={4}>
                        <Button variant="contained">Add to Deck</Button>
                        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    )
}

export default DecksNew;