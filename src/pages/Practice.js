// import { Stack } from '@mui/material';
// import Flashcard from '../components/Flashcard';
// import PracticeNav from '../components/PracticeNav';
// import { useState, useEffect } from 'react';
// import LoadingIcon from '../components/LoadingIcon';
// import ProgressBar from '../components/ProgressBar';

// const Practice = (props) => {

//     // const id = props.match.params.id;
//     // const cards = props.cards.filter(card => card.deckId === parseInt(id))
//     // const deckName = cards[0].deckTag
//     const [cardNumber, setCardNumber] = useState(0)
//     const [showFront, setShowFront] = useState(true)
//     const [showFrontFirst, setShowFrontFirst] = useState(true)
//     const [randomizedCards, setRandomizedCards] = useState([])
//     let id = ""
//     let cards = [];
//     let deckName = "";

    

//     const randomizeCards = () => {

//         console.log(props)
//         id = props.match.params.id;
//         cards = props.cards.filter(card => card.deckId === id)
//         deckName = cards[0].deckTag
//         console.log(cards[0])
//         console.log(cards[0].deckTag)

//         let i = cards.length
//         const tempArray = []
//         while (i > 0) {
//             let j = Math.floor(Math.random() * (cards.length))
//             tempArray.push(cards[j])
//             cards.splice(j, 1)
//             i--
//         }
//         setRandomizedCards(tempArray)
//         setCardNumber(0)
//         console.log(randomizedCards)
//     }

//     useEffect(() => {console.log(props)}, [])

//     // if (props.cards) randomizeCards()


//     // const previousCard = () => {
//     //     if (cardNumber === 0) {
//     //         setCardNumber(randomizedCards.length-1)
//     //     }
//     //     else {
//     //         setCardNumber(cardNumber-1)
//     //     }
//     //     setShowFront(showFrontFirst)
//     // }

//     // const nextCard = () => {
//     //     if (cardNumber === randomizedCards.length -1) {
//     //         setCardNumber(0)
//     //     }
//     //     else {
//     //         setCardNumber(cardNumber+1)
//     //     }
//     //     // console.log(showFrontFirst)
//     //     setShowFront(showFrontFirst)
//     // }

//     // const toggleSide = () => {
//     //     setShowFront(!showFront)
//     // }

//     // const setFirstSide = () => {
//     //     setShowFrontFirst(!showFrontFirst)
//     // }
    

//     const loadedData = () => {

//         console.log(props)
//         // const id = props.match.params.id;
//         // const cards = props.cards.filter(card => card.deckId === id)
//         // const deckName = cards[0].deckTag
//         // const [cardNumber, setCardNumber] = useState(0)
//         // const [showFront, setShowFront] = useState(true)
//         // const [showFrontFirst, setShowFrontFirst] = useState(true)
//         // const [randomizedCards, setRandomizedCards] = useState([])

//         // let i = cards.length
//         // const tempArray = []
//         // while (i > 0) {
//         //     let j = Math.floor(Math.random() * (cards.length))
//         //     tempArray.push(cards[j])
//         //     cards.splice(j, 1)
//         //     i--
//         // }
//         // setRandomizedCards(tempArray)
//         // setCardNumber(0)

//         // const randomizeCards = () => {
//         //     let i = cards.length
//         //     const tempArray = []
//         //     while (i > 0) {
//         //         let j = Math.floor(Math.random() * (cards.length))
//         //         tempArray.push(cards[j])
//         //         cards.splice(j, 1)
//         //         i--
//         //     }
//         //     setRandomizedCards(tempArray)
//         //     setCardNumber(0)
//         //     console.log(cards);
//         //     console.log(tempArray)
//         // }

//         const previousCard = () => {
//             if (cardNumber === 0) {
//                 setCardNumber(randomizedCards.length-1)
//             }
//             else {
//                 setCardNumber(cardNumber-1)
//             }
//             setShowFront(showFrontFirst)
//         }

//         const nextCard = () => {
//             if (cardNumber === randomizedCards.length -1) {
//                 setCardNumber(0)
//             }
//             else {
//                 setCardNumber(cardNumber+1)
//             }
//             // console.log(showFrontFirst)
//             setShowFront(showFrontFirst)
//         }

//         const toggleSide = () => {
//             setShowFront(!showFront)
//         }

//         const setFirstSide = () => {
//             setShowFrontFirst(!showFrontFirst)
//         }

//         return (
//             <>
//             <h1>Loaded Data</h1>
//                 <div>
//                     <h1>{deckName}</h1>
//                     <Stack className="center-items" >
//                         {randomizedCards.length > 0 ? <Flashcard showFront={showFront} card={randomizedCards[cardNumber]}/> : <LoadingIcon />}
//                     </Stack>
//                     <ProgressBar steps={randomizedCards.length} activeStep={cardNumber} />
//                     <PracticeNav randomizeCards={randomizeCards} toggleSide={toggleSide} previousCard={previousCard} nextCard={nextCard} showFront={showFront} showFrontFirst={showFrontFirst} setFirstSide={setFirstSide}/>
//                 </div>
//             </>
//         )
//     }

//     return (
//         // <div>
//         //     <h1>{deckName}</h1>
//         //     <Stack className="center-items" >
//         //         {randomizedCards.length > 0 ? <Flashcard showFront={showFront} card={randomizedCards[cardNumber]}/> : <LoadingIcon />}
//         //     </Stack>
//         //     <ProgressBar steps={randomizedCards.length} activeStep={cardNumber} />
//         //     <PracticeNav randomizeCards={randomizeCards} toggleSide={toggleSide} previousCard={previousCard} nextCard={nextCard} showFront={showFront} showFrontFirst={showFrontFirst} setFirstSide={setFirstSide}/>
//         // </div>
//         <div>
//             {props.cards ? loadedData() : <LoadingIcon />}
//         </div>
//     )

// }

// export default Practice;

import { Stack } from '@mui/material';
import Flashcard from '../components/Flashcard';
import PracticeNav from '../components/PracticeNav';
import { useState, useEffect } from 'react';
import LoadingIcon from '../components/LoadingIcon';
import ProgressBar from '../components/ProgressBar';

const Practice = (props) => {

    // const id = props.match.params.id;
    // const cards = props.cards.filter(card => card.deckId === parseInt(id))
    // const deckName = cards[0].deckTag
    const [cardNumber, setCardNumber] = useState(0)
    const [showFront, setShowFront] = useState(true)
    const [showFrontFirst, setShowFrontFirst] = useState(true)
    const [randomizedCards, setRandomizedCards] = useState([])
    let id = ""
    let cards = [];
    let deckName = "";

    

    const randomizeCards = () => {

        console.log(props)
        id = props.match.params.id;
        cards = props.cards.filter(card => card.deckId === id)
        console.log(cards[0])
        console.log(cards[0].deckTag)

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
        console.log(randomizedCards)
    }

    // if (props.cards) randomizeCards()


    // const previousCard = () => {
    //     if (cardNumber === 0) {
    //         setCardNumber(randomizedCards.length-1)
    //     }
    //     else {
    //         setCardNumber(cardNumber-1)
    //     }
    //     setShowFront(showFrontFirst)
    // }

    // const nextCard = () => {
    //     if (cardNumber === randomizedCards.length -1) {
    //         setCardNumber(0)
    //     }
    //     else {
    //         setCardNumber(cardNumber+1)
    //     }
    //     // console.log(showFrontFirst)
    //     setShowFront(showFrontFirst)
    // }

    // const toggleSide = () => {
    //     setShowFront(!showFront)
    // }

    // const setFirstSide = () => {
    //     setShowFrontFirst(!showFrontFirst)
    // }
    

    const loadedData = () => {

        console.log(props)
        id = props.match.params.id;
        cards = props.cards.filter(card => card.deckId === id)
        deckName = cards[0].deckTag


        // const id = props.match.params.id;
        // const cards = props.cards.filter(card => card.deckId === id)
        // const deckName = cards[0].deckTag
        // const [cardNumber, setCardNumber] = useState(0)
        // const [showFront, setShowFront] = useState(true)
        // const [showFrontFirst, setShowFrontFirst] = useState(true)
        // const [randomizedCards, setRandomizedCards] = useState([])

        // let i = cards.length
        // const tempArray = []
        // while (i > 0) {
        //     let j = Math.floor(Math.random() * (cards.length))
        //     tempArray.push(cards[j])
        //     cards.splice(j, 1)
        //     i--
        // }
        // setRandomizedCards(tempArray)
        // setCardNumber(0)

        // const randomizeCards = () => {
        //     let i = cards.length
        //     const tempArray = []
        //     while (i > 0) {
        //         let j = Math.floor(Math.random() * (cards.length))
        //         tempArray.push(cards[j])
        //         cards.splice(j, 1)
        //         i--
        //     }
        //     setRandomizedCards(tempArray)
        //     setCardNumber(0)
        //     console.log(cards);
        //     console.log(tempArray)
        // }

        const previousCard = () => {
            if (cardNumber === 0) {
                setCardNumber(randomizedCards.length-1)
            }
            else {
                setCardNumber(cardNumber-1)
            }
            setShowFront(showFrontFirst)
        }

        const nextCard = () => {
            if (cardNumber === randomizedCards.length -1) {
                setCardNumber(0)
            }
            else {
                setCardNumber(cardNumber+1)
            }
            // console.log(showFrontFirst)
            setShowFront(showFrontFirst)
        }

        const toggleSide = () => {
            setShowFront(!showFront)
        }

        const setFirstSide = () => {
            setShowFrontFirst(!showFrontFirst)
        }

        return (
            <>
            {/* <h1>Loaded Data</h1> */}
                <div>
                    <h1>{deckName}</h1>
                    <Stack className="center-items" >
                        {/* {cards.length > 0 ? <Flashcard showFront={showFront} card={randomizedCards[cardNumber]}/> : <LoadingIcon />} */}
                        {
                            randomizedCards.length > 0 ? <Flashcard showFront={showFront} card={randomizedCards[cardNumber]}/> : <Flashcard showFront={showFront} card={cards[cardNumber]}/>
                        }
                    </Stack>
                    <ProgressBar steps={randomizedCards.length} activeStep={cardNumber} />
                    <PracticeNav randomizeCards={randomizeCards} toggleSide={toggleSide} previousCard={previousCard} nextCard={nextCard} showFront={showFront} showFrontFirst={showFrontFirst} setFirstSide={setFirstSide}/>
                </div>
            </>
        )
    }

    return (
        // <div>
        //     <h1>{deckName}</h1>
        //     <Stack className="center-items" >
        //         {randomizedCards.length > 0 ? <Flashcard showFront={showFront} card={randomizedCards[cardNumber]}/> : <LoadingIcon />}
        //     </Stack>
        //     <ProgressBar steps={randomizedCards.length} activeStep={cardNumber} />
        //     <PracticeNav randomizeCards={randomizeCards} toggleSide={toggleSide} previousCard={previousCard} nextCard={nextCard} showFront={showFront} showFrontFirst={showFrontFirst} setFirstSide={setFirstSide}/>
        // </div>
        <div>
            {props.cards ? loadedData() : <div className="center-button margin-top"><LoadingIcon /></div>}
        </div>
    )

}

export default Practice;