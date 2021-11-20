import { Button, Card, Typography, CardActions, CardContent } from "@mui/material";

const Flashcard = () => {
    return (
        <Card className="card-back">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    Text
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Flip Card</Button>
            </CardActions>
        </Card>
    )
}

export default Flashcard;