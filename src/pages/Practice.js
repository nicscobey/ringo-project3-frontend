import { Stack } from '@mui/material';
import Flashcard from '../components/Flashcard';
import PracticeNav from '../components/PracticeNav';
import { useEffect, useState} from 'react';
import LoadingIcon from '../components/LoadingIcon';
import ProgressBar from '../components/ProgressBar';

const Practice = (props) => {

    console.log(props)
    const [cardNumber, setCardNumber] = useState(0)
    const [showFront, setShowFront] = useState(true)
    const [showFrontFirst, setShowFrontFirst] = useState(true)
    const [randomizedCards, setRandomizedCards] = useState([])
    let id = ""
    let cards = [];
    let deckName = "";

    // const getDeckName = async => {
    //     const response = await fetch()
    // }

    // useEffect(() => {getDeckName()}, [])

    const randomizeCards = () => {

        id = props.match.params.id;
        cards = props.cards.filter(card => card.deckId === id)

        let i = cards.length
        const tempArray = []
        while (i > 0) {
            let j = Math.floor(Math.random() * (cards.length))
            tempArray.push(cards[j])
            cards.splice(j, 1)
            i--
        }
        setRandomizedCards(tempArray)
        setCardNumber(0)
    }

    const loadedData = () => {

        id = props.match.params.id;
        cards = props.cards.filter(card => card.deckId === id)
        deckName = cards[0].deckTag
        

        const previousCard = () => {
            if (cardNumber === 0) {
                setCardNumber(cards.length-1)
            }
            else {
                setCardNumber(cardNumber-1)
            }
            setShowFront(showFrontFirst)
        }

        const nextCard = () => {
            if (cardNumber === cards.length -1) {
                setCardNumber(0)
            }
            else {
                setCardNumber(cardNumber+1)
            }
            setShowFront(showFrontFirst)
        }

        const toggleSide = () => {
            setShowFront(!showFront)
        }

        const setFirstSide = () => {
            setShowFrontFirst(!showFrontFirst)
            toggleSide();
        }

        return (
            <>
                <div>
                    <h1 className="mansalva blue medium">{deckName}</h1>
                    <Stack className="center-items" >
                        {
                            randomizedCards.length > 0 ? <Flashcard showFront={showFront} card={randomizedCards[cardNumber]}/> : <Flashcard showFront={showFront} card={cards[cardNumber]}/>
                        }
                    </Stack>
                    {
                        randomizedCards.length > 0 ? <ProgressBar steps={randomizedCards.length} activeStep={cardNumber} /> : <ProgressBar steps={cards.length} activeStep={cardNumber} />
                    }
                    <PracticeNav randomizeCards={randomizeCards} toggleSide={toggleSide} previousCard={previousCard} nextCard={nextCard} showFront={showFront} showFrontFirst={showFrontFirst} setFirstSide={setFirstSide}/>
                </div>
            </>
        )
    }

    return (

        <div>
            {props.cards ? loadedData() : <div className="center-button margin-top"><LoadingIcon /></div>}
        </div>
    )

}

export default Practice;