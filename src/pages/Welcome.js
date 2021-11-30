import {Link} from 'react-router-dom'
import { Button } from '@mui/material';
import { Stack } from '@mui/material';

const Welcome = (props) => {


    return (
        <div className="App-header">
            {/* <h1>COOL PIC</h1> */}
            <img alt="logo" id="logo" src="https://i.imgur.com/L9Ef3sJ.png" />
            <div>
                <h1>CardStack</h1>
                <h3>Catchy Tagline</h3>
                <Stack spacing={2}>
                    <Link to="/my"><Button className="fixed-width-button" variant="contained">Get Started</Button></Link>
                    {/* <Link to="/login"><Button className="fixed-width-button" variant="contained">Log In</Button></Link>
                    <Link to="/signup"><Button className="fixed-width-button" variant="outlined">Sign Up</Button></Link> */}
                </Stack>
            </div>
        </div>
    )
}

export default Welcome;