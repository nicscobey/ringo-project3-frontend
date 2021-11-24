import {AppBar, Box, Toolbar, Typography, Button, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="header-bar">
          <div className="flex">
            <Link to="/my" className="white"><Button  color="inherit">
              <Typography variant="h6" component="div">
                APPNAME
              </Typography>
            </Button>
            </Link>
            <Link to="/my/decks" className="white"><Button variant="text" color="inherit">MY DECKS</Button></Link>
            {/* <Link to="/my/new" className="white" ><Button variant="text" color="inherit">NEW DECK</Button></Link> */}
          </div>
          <Link to="/" className="white"><Button variant="text" color="inherit">LOG OUT</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Header;