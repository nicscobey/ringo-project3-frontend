import {Switch, Route, Link} from 'react-router-dom'
import { Button } from '@mui/material';
import { Stack, TextField } from '@mui/material';

const Login = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('logged in!')
    }

    return (
        <div>            
            <h1>APP'S NAME</h1>
            <h3>Log In</h3>
            <form onSubmit={handleSubmit}>
                <Stack className="flex-center" spacing={2}>
                    <TextField label="Email" variant="standard" className="fixed-width-button" name="email"/>
                    <TextField label="Password" variant="standard" className="fixed-width-button" type="password" name="password"/>
                </Stack>
                <Button className="fixed-width-button" type="submit" variant="contained">Log In</Button>
                <p>Don't have an account? <Link to="/welcome/signup">Sign Up!</Link></p>
            </form>
        </div>
    )
}

export default Login;