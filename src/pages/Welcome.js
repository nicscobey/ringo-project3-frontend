import {Switch, Route, Link} from 'react-router-dom'
import { Button } from '@mui/material';
import { Stack, TextField } from '@mui/material';

const Welcome = (props) => {


    return (
        <div>
            <h1>APP'S NAME</h1>
            <h3>Catchy Tagline</h3>
            <Stack spacing={2}>
                <Link to="/welcome/login"><Button className="fixed-width-button" variant="contained">Log In</Button></Link>
                <Link to="/welcome/signup"><Button className="fixed-width-button" variant="outlined">Sign Up</Button></Link>
            </Stack>
        </div>
    )
}

export default Welcome;