import {Link, useHistory} from 'react-router-dom'
import { Button, Stack, Box, Typography, Modal, TextField } from '@mui/material';
import { useState, useEffect } from 'react';

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

const Home = (props) => {

    const newDeck = props.newDeck

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const history = useHistory()
    
    useEffect(()=> setOpen(props.new), [])

    const [form, setForm] = useState({deckName: "", word: ""});

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        handleClose()
        newDeck({"deckTag": form.word})
        setForm({deckName: "", word: ""})
        history.push('/my/decks')
    }

    return (
        <div>
            <h2>Select an option below:</h2>
            <Stack className="flex-center" spacing={4}>
                <Link to="/my/decks"><Button className="fixed-width-button" variant="contained">View Flashcard Decks</Button></Link>
                <Button onClick={handleOpen} className="fixed-width-button" variant="contained">Add a New Flashcard Deck</Button>
            </Stack>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create a New Deck
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField onChange={handleChange} name="word" id="outlined-basic" label="Enter deck name..." variant="standard" value={form.word}  />
                        <Stack className="flex-column-center margin-top" direction="row" spacing={4} >
                            <Button variant="contained" type="submit">Create Deck</Button>
                            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                        </Stack>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

export default Home;