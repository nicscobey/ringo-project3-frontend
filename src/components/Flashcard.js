import { Button, Card, Typography, CardActions, CardContent } from "@mui/material";

const Flashcard = (props) => {

    const showFront = () => {
        return (
            <Card sx={{ width: 500, height: 300 }} className="card-front">
                <CardContent className="center-text">
                    <Typography variant="h5" component="div">
                        {props.card.word}
                    </Typography>
                </CardContent>
            </Card>
        )
    }

    const showBack = () => {
        return (
            <Card sx={{ width: 500, height: 300 }} className="card-back">
                <CardContent className="center-text">
                    {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography> */}
                    <Typography variant="h6" component="div">
                        {props.card.definition}
                    </Typography>
                    {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography> */}
                </CardContent>
            </Card>
        )
    }

    return (
        <>
            {props.showFront ? showFront() : showBack()}
        </>
    )
}

export default Flashcard;