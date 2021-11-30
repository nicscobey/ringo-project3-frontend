// import {Switch, Route} from 'react-router-dom'
// import { Button, TextField, Modal, Box, Typography, Stack } from '@mui/material';
// import {useState} from 'react'
// import CardPreview from '../../components/CardPreview'
// import EditIcon from '@mui/icons-material/Edit';
// import IconButton from '@mui/material/IconButton';


// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     boxShadow: 24,
//     p: 4,
//     "border-radius": "20px"
// };

// const DecksUpdate = (props) => {


//     const cards = props.cards;

//     const id = props.match.params.id
//     const deckName = props.decks.find(deck => deck._id === id).deckTag
//     const deleteCard = props.deleteCard
//     const newCard = props.newCard
//     const myDeck = props.decks.find(deck => deck._id === id)
//     const updateDeck = props.updateDeck

//     const filteredCards = cards.filter(card => card.deckId===id)

//     function sortCards(a,b) {
//         if (a.word > b.word) return 1
//         return -1
//     }
//     filteredCards.sort(sortCards)

//     const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/"
//     const [word, setWord] = useState(null);
//     const getWord = async (word) => {
//         const response = await fetch(URL+word)
//         console.log(response)
//         if (response.status !== 404) {
//             const data = await response.json()
//             console.log(data)
//             setWord(data);
//         }
//         else {
//             setWord(null)
//         }
//     }

//     const [form, setForm] = useState({deckName: "", word: ""});
//     const [deck, setDeck] = useState(myDeck)
//     const [nameForm, setNameForm] = useState({deckTag: deck.deckTag});
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//     const [openName, setOpenName] = useState(false);
//     const handleOpenName = () => setOpenName(true);
//     const handleCloseName = () => setOpenName(false);

//     const handleChange = (event) => {
//         setForm({...form, [event.target.name]: event.target.value})
//     }

//     const handleChangeNameForm = (event) => {
//         setNameForm({...nameForm, [event.target.name]: event.target.value})
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         getWord(form.word)
//         handleOpen();
//     }

//     const handleSubmitName = (event) => {
//         event.preventDefault();
//         handleCloseName();
//         let updatedDeck = {...deck, deckTag: nameForm.deckTag}
//         updateDeck(updatedDeck, id) 
//         setDeck(updatedDeck)
//     }    

//     const cancelWord = () => {
//         handleClose()
//         setForm({deckName: "", word: ""})
//     }

//     const loadedCards = () => {
//         return (
//             <div>
//                 {filteredCards.map(card => {
//                     return (
//                         <CardPreview cardId={card._id} word={card.word} definition={card.definition} expanded={true} edit={true} deleteCard={deleteCard} />
//                     )
//                 })}
//             </div>
//         )
//     }

//     const loadedWord = () => {
//         return (
//             <div>
//                 <b>Definition:&nbsp;</b> 
//                 {word[0].meanings[0].definitions[0].definition}
//                 <Stack className="flex-column-center margin-top" direction="row" spacing={4}>
//                     {word ? <Button variant="contained" onClick={addCard}>Add to Deck</Button> : null}
//                     <Button variant="outlined" onClick={cancelWord}>Cancel</Button>
//                 </Stack>
//             </div>
//         )
//     }

//     const noWordFound = () => {
//         return (
//             <div>
//                 <p>No definition found. Double check your spelling or search another word.</p>
//                 <Button variant="outlined" onClick={cancelWord}>Cancel</Button>
//             </div>
//         )
//     }

//     const addCard = () => {
//         newCard(word, id, deckName)
//         handleClose()
//         setForm({deckName: "", word: ""})
//     }

//     const loadedData = () => {
//         return (
//             <div>
                
//             </div>
//         )
//     }

//     return (
//         <div>
//             <div className="center-button">
//                 <h1>Update {deck.deckTag}</h1>
//                 <IconButton onClick={handleOpenName}>
//                     <EditIcon alt="Edit Deck Name"/>
//                 </IconButton>
//             </div>
//             <p>To add a card to the deck, search for a word below.</p>
//             <form className="center-items" onSubmit={handleSubmit}>
//                 <TextField onChange={handleChange} name="word" id="outlined-basic" label="Type a word..." variant="standard" value={form.word}/>
//                 {form.word === "" ? 
//                 <Button type="submit" variant="contained" disabled>Search</Button> :
//                 <Button type="submit" variant="contained">Search</Button>
//                 } 
//             </form>
//             <h4>{filteredCards.length} cards in this deck</h4>
//             <Stack className="center-items" direction="column" spacing={2}>
//                 {cards ? loadedCards() : null}
//             </Stack>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box sx={style}>
//                     <Typography id="modal-modal-title" variant="h6" component="h2">
//                         Results for &#8220;{form.word}&#8221;
//                     </Typography>
//                     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                         {word ? loadedWord() : noWordFound()}
//                     </Typography>
//                     {/* <Stack className="flex-column-center" direction="row" spacing={4}>
//                         {word ? <Button variant="contained" onClick={addCard} >Add to Deck</Button> : null}
//                         <Button variant="outlined" onClick={cancelWord}>Cancel</Button>
//                     </Stack> */}
//                 </Box>
//             </Modal>
//             <Modal
//                 open={openName}
//                 onClose={handleCloseName}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box sx={style}>
//                     <Typography id="modal-modal-title" variant="h6" component="h2">
//                         Edit Deck Name
//                     </Typography>
//                     <form onSubmit={handleSubmitName}>
//                         <TextField onChange={handleChangeNameForm} name="deckTag" id="outlined-basic" label="Enter deck name..." variant="standard" value={nameForm.deckTag}  />
//                         <Stack className="flex-column-center margin-top" direction="row" spacing={4} >
//                             <Button variant="contained" type="submit">Update Name</Button>
//                             <Button variant="outlined" onClick={handleCloseName}>Cancel</Button>
//                         </Stack>
//                     </form>
//                 </Box>
//             </Modal>
            
//         </div>
//     )
// }

// export default DecksUpdate;


import {Switch, Route} from 'react-router-dom'
import { Button, TextField, Modal, Box, Typography, Stack } from '@mui/material';
import {useState} from 'react'
import CardPreview from '../../components/CardPreview'
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
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

const DecksUpdate = (props) => {


    

   

    const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/"
    const [word, setWord] = useState(null);
    const getWord = async (word) => {
        const response = await fetch(URL+word)
        console.log(response)
        if (response.status !== 404) {
            const data = await response.json()
            console.log(data)
            setWord(data);
        }
        else {
            setWord(null)
        }
    }

    const [form, setForm] = useState({deckName: "", word: ""});
    const [deck, setDeck] = useState(null)
    const [nameForm, setNameForm] = useState({deckTag: null});
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openName, setOpenName] = useState(false);
    const handleOpenName = () => setOpenName(true);
    const handleCloseName = () => setOpenName(false);

    

    const loadedData = () => {

        const cards = props.cards;

        const id = props.match.params.id
        const deckName = props.decks.find(deck => deck._id === id).deckTag
        const deleteCard = props.deleteCard
        const newCard = props.newCard
        const myDeck = props.decks.find(deck => deck._id === id)
        const updateDeck = props.updateDeck

        const filteredCards = cards.filter(card => card.deckId===id)

        function sortCards(a,b) {
            if (a.word.toLowerCase() > b.word.toLowerCase()) return 1
            return -1
        }
        filteredCards.sort(sortCards)
        
        const handleChange = (event) => {
            setForm({...form, [event.target.name]: event.target.value})
        }
    
        const handleChangeNameForm = (event) => {
            setNameForm({...nameForm, [event.target.name]: event.target.value})
        }
    
        const handleSubmit = (event) => {
            event.preventDefault();
            getWord(form.word)
            handleOpen();
        }
    
        const handleSubmitName = (event) => {
            event.preventDefault();
            handleCloseName();
            let updatedDeck = {...deck, deckTag: nameForm.deckTag}
            updateDeck(updatedDeck, id) 
            setDeck(updatedDeck)
        }    
    
        const cancelWord = () => {
            handleClose()
            setForm({deckName: "", word: ""})
        }
    
        const loadedCards = () => {
            return (
                <div>
                    {filteredCards.map(card => {
                        return (
                            <CardPreview cardId={card._id} word={card.word} definition={card.definition} expanded={true} edit={true} deleteCard={deleteCard} />
                        )
                    })}
                </div>
            )
        }
    
        const loadedWord = () => {
            return (
                <div>
                    <b>Definition:&nbsp;</b> 
                    {word[0].meanings[0].definitions[0].definition}
                    <Stack className="flex-column-center margin-top" direction="row" spacing={4}>
                        {word ? <Button variant="contained" onClick={addCard}>Add to Deck</Button> : null}
                        <Button variant="outlined" onClick={cancelWord}>Cancel</Button>
                    </Stack>
                </div>
            )
        }
    
        const noWordFound = () => {
            return (
                <div>
                    <p>No definition found. Double check your spelling or search another word.</p>
                    <Button variant="outlined" onClick={cancelWord}>Cancel</Button>
                </div>
            )
        }
    
        const addCard = () => {
            newCard(word, id, deckName)
            handleClose()
            setForm({deckName: "", word: ""})
        }


        return (
            <div>
                <div className="center-button">
                    <h1>Update {myDeck.deckTag}</h1>
                    <IconButton onClick={handleOpenName}>
                        <EditIcon alt="Edit Deck Name"/>
                    </IconButton>
                </div>
                <p>To add a card to the deck, search for a word below.</p>
                <form className="center-items" onSubmit={handleSubmit}>
                    <TextField onChange={handleChange} name="word" id="outlined-basic" label="Type a word..." variant="standard" value={form.word}/>
                    {form.word === "" ? 
                    <Button type="submit" variant="contained" disabled>Search</Button> :
                    <Button type="submit" variant="contained">Search</Button>
                    } 
                </form>
                <h4>{filteredCards.length} cards in this deck</h4>
                <Stack className="center-items" direction="column" spacing={2}>
                    {cards ? loadedCards() : null}
                </Stack>
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
                            {word ? loadedWord() : noWordFound()}
                        </Typography>
                        {/* <Stack className="flex-column-center" direction="row" spacing={4}>
                            {word ? <Button variant="contained" onClick={addCard} >Add to Deck</Button> : null}
                            <Button variant="outlined" onClick={cancelWord}>Cancel</Button>
                        </Stack> */}
                    </Box>
                </Modal>
                <Modal
                    open={openName}
                    onClose={handleCloseName}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Edit Deck Name
                        </Typography>
                        <form onSubmit={handleSubmitName}>
                            <TextField onChange={handleChangeNameForm} name="deckTag" id="outlined-basic" label="Enter deck name..." variant="standard" value={nameForm.deckTag}  />
                            <Stack className="flex-column-center margin-top" direction="row" spacing={4} >
                                <Button variant="contained" type="submit">Update Name</Button>
                                <Button variant="outlined" onClick={handleCloseName}>Cancel</Button>
                            </Stack>
                        </form>
                    </Box>
                </Modal>
            </div>
        )
    }

    return (
        <div>
            {props.cards ? loadedData() : <div className="center-button margin-top"><LoadingIcon /></div> }
        </div>
    )
}

export default DecksUpdate;