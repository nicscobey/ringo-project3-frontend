import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Stack } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ShuffleIcon from '@mui/icons-material/Shuffle';


export default function PracticeNav(props) {

    const topButtons = [
        
        <Button onClick={props.randomizeCards} className="practiceNav left-top" variant="contained" color="secondary">
            <Stack direction="column"className="center-button"  spacing={2}>
                <ShuffleIcon />
                <p>Shuffle</p>
            </Stack>
        </Button>,
        <Button onClick={props.previousCard} className="practiceNav" variant="contained" color="secondary">
            <Stack direction="column"className="center-button"  spacing={2}>
                <ArrowBackIosNewIcon />
                <p>Previous</p>
            </Stack>
        </Button>,
        
        <Button onClick={props.nextCard} className="practiceNav" variant="contained" color="secondary">
            <Stack direction="column"className="center-button"  spacing={2}>
                <ArrowForwardIosIcon />
                <p>Next</p>
            </Stack>
        </Button>,
        
        <Button onClick={props.toggleSide} className="practiceNav right-top" variant="contained" color="secondary">
            <Stack direction="column"className="center-button"  spacing={2}>
                <AutorenewIcon />
                <p>Flip</p>
            </Stack>
        </Button>,
    ];

    const bottomButton = [
        <Button onClick={props.setFirstSide} className="practiceNav-wide" variant="contained" color="secondary">
            <Stack direction="column" className="center-button" spacing={2}>
                {props.showFrontFirst ? <p>Show Back First</p> : <p>Show Front First</p>}
            </Stack>
        </Button>,
    ]

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup className="two-row-nav" size="large" aria-label="large button group">
        <div className="center-button">
            {topButtons}
        </div>
        {bottomButton}
      </ButtonGroup>
    </Box>
  );
}