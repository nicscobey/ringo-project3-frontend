import {Switch, Route} from 'react-router-dom'

const DecksUpdate = (props) => {

    const id = props.match.params.id

    return (
        <div>
            <h1>Decks Update</h1>
            <h3>Deck Id: {id}</h3>
        </div>
    )
}

export default DecksUpdate;