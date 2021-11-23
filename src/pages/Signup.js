import {Switch, Route, Link} from 'react-router-dom'
import { Button, TextField, Stack } from '@mui/material';

const Signup = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('account form submitted!')
    }

    return (
        <div>
            <h1>APP'S NAME</h1>
            <h3>Make an Account</h3>
            <form onSubmit={handleSubmit}>
                <Stack className="flex-center" spacing={2}>
                    <TextField label="Email" variant="standard" className="fixed-width-button" name="email"/>
                    <TextField  label="Verify Email" variant="standard" className="fixed-width-button" name="verifyEmail"/>
                    <TextField label="Password" variant="standard" className="fixed-width-button" type="password" name="password"/>
                    <TextField label="Verify Password" variant="standard" className="fixed-width-button" type="password" name="verifyPassword"/>
                </Stack>
                <Stack spacing={2} className="flex-center" >
                    <Button className="fixed-width-button" type="submit" variant="contained">Create Account</Button>
                    <Link to="/welcome"><Button className="fixed-width-button" variant="outlined">Cancel</Button></Link>
                </Stack>
            </form>
        </div>
    )
}

export default Signup;