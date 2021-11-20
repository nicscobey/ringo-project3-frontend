import {AppBar, Box, Toolbar, Typography, Button, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const Header = (props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <div>

            </div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            7xFlashcards
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Header;