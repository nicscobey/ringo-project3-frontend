import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Stack } from '@mui/material';
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ShuffleIcon from '@mui/icons-material/Shuffle';


export default function PracticeNav(props) {

    const topButtons = [
        
        <Button onClick={props.randomizeCards} className="practiceNav left-top" variant="contained" key="three">
            <Stack direction="column"className="center-button"  spacing={2}>
                <ShuffleIcon />
                <p>Shuffle</p>
            </Stack>
        </Button>,
        <Button onClick={props.previousCard} className="practiceNav" variant="contained" key="two">
            <Stack direction="column"className="center-button"  spacing={2}>
                <ArrowBackIosNewIcon />
                <p>Previous</p>
            </Stack>
        </Button>,
        
        <Button onClick={props.nextCard} className="practiceNav" variant="contained" key="three">
            <Stack direction="column"className="center-button"  spacing={2}>
                <ArrowForwardIosIcon />
                <p>Next</p>
            </Stack>
        </Button>,
        
        <Button onClick={props.toggleSide} className="practiceNav right-top" variant="contained" key="three">
            <Stack direction="column"className="center-button"  spacing={2}>
                <AutorenewIcon />
                <p>Flip</p>
            </Stack>
        </Button>,
    ];

    const bottomButton = [
        <Button onClick={props.setFirstSide} className="practiceNav-wide" variant="contained" key="one">
            <Stack direction="column" className="center-button" spacing={2}>
                {/* <FlipToFrontIcon /> */}
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