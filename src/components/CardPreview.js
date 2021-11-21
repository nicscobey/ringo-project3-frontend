import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { TextField, Modal, Box, Stack } from '@mui/material';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  "border-radius": "20px"
};



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardPreview(props) {
  const [expanded, setExpanded] = React.useState(props.expanded);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const deleteCard = props.deleteCard;

  const word = props.word;
  const definition = props.definition;
  const edit = props.edit;
  const id = props.cardId;

  // const removeCard = () => {
  //   deleteCard(id)
  // }

  const showEditTools = () => {
      return (
          <>
            <Button variant="outlined" onClick={handleDeleteOpen} >Delete</Button>
          </>
      )
  }






  const removeCard = () => {
    props.deleteCard(id)
}

const [deleteOpen, setDeleteOpen] = useState(false);
    const handleDeleteOpen = () => setDeleteOpen(true);
    const handleDeleteClose = () => setDeleteOpen(false);

  return (
    <>
    <Card sx={{ width: 345 }} className="card-preview">
      <CardContent className="flex">
        <Typography color="text.secondary">
          {word}
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Definition:</Typography>
          <Typography paragraph>
            {definition}
          </Typography>
          {edit ? showEditTools() : null}
        </CardContent>
      </Collapse>
    </Card>

<Modal
open={deleteOpen}
onClose={handleDeleteClose}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
<Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h4">
        Are you sure you wish to delete this card? This action cannot be undone.
    </Typography>
    {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <b>Definition:</b> {word ? loadedWord() : null}
    </Typography> */}
    <Stack className="flex-column-center" direction="row" spacing={4} >
        <Button variant="contained" type="submit" onClick={removeCard}>Delete Card</Button>
        <Button variant="outlined" onClick={handleDeleteClose}>Cancel</Button>
    </Stack>
</Box>
</Modal>
</>
  );
}