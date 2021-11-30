import {Link} from 'react-router-dom'
import { Button } from '@mui/material';
import { Stack } from '@mui/material';

const Welcome = (props) => {

    return (
        <div className="App-header">
            <img alt="logo" id="logo" src="https://i.imgur.com/eI6Sbup.png" />
            <div>
                <h1 className="mansalva blue large">CardStack</h1>
                <h3>Ready to broaden your vocabulary?</h3>
                <Stack spacing={2}>
                    <Link to="/my"><Button className="fixed-width-button" variant="contained">Get Started</Button></Link>
                </Stack>
            </div>
        </div>
    )
}

export default Welcome;