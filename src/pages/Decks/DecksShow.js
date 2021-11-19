import {Switch, Route} from 'react-router-dom'

const DecksShow = (props) => {

    const id = props.match.params.id;

    return (
        <div>
            <h1>Decks Show</h1>
            <h3>Deck Id: {id}</h3>
        </div>
    )
}

export default DecksShow;