import {Switch, Route, Link} from 'react-router-dom'
import { Button } from '@mui/material';

const Login = (props) => {

    return (
        <div>
            <h1>This is our app's home page</h1>
            <Button variant="contained">Log In</Button>
            <Link to="/signup"><Button variant="outlined">Sign Up</Button></Link>
        </div>
    )
}

export default Login;