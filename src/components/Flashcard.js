import { Card, Typography, CardContent } from "@mui/material";

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
                    <Typography variant="h6" component="div">
                        {props.card.definition}
                    </Typography>
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