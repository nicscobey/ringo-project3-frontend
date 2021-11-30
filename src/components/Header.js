import {AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar className="header-bar">
          <div className="flex">
            <Link to="/" className="white"><Button  color="inherit">
              <img src="https://i.imgur.com/L9Ef3sJ.png" alt="logo" width="25px"/>
              <Typography variant="h6" component="div" className="mansalva">
                &nbsp;CardStack
              </Typography>
            </Button>
            </Link>
            <Link to="/my" className="white"><Button variant="text" color="inherit">HOME</Button></Link>
            <Link to="/my/decks" className="white"><Button variant="text" color="inherit">DECKS</Button></Link>
            {/* <Link to="/my/new" className="white" ><Button variant="text" color="inherit">NEW DECK</Button></Link> */}
          </div>
          {/* <Link to="/" className="white"><Button variant="text" color="inherit">LOG OUT</Button></Link> */}
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Header;