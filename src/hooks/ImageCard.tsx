import React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';

export default function ImageCard(props : any) {
    const [imageData, setImageData] = useState(props.data)
    const [expanded, setExpanded] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        console.log(imageData);
    })

    const handleClick = () => {
        setExpanded(!expanded);
    }

    const handleLoad = () => {
        setImageLoaded(true);
        console.log("Image loaded: ", imageData['title']);
    }

    return (
        <Card sx={{maxWidth: 300, margin: "auto", marginTop: 2}}>
            <div onClick={handleClick}>
                <CardMedia
                component="img"
                height={imageLoaded ? "300" : "0"}
                image={imageData['url']}
                onLoad={handleLoad}
                />
                <Skeleton variant="rectangular" width={300} height={imageLoaded ? 0 : 300} />
                <CardContent sx={{paddingX: 0, paddingY: 1, paddingBottom: 1}}>
                    <Accordion expanded={expanded} 
                    sx={{width: 300, border: "none", "boxShadow": "0px 0px", "textAlign": "center", "& .MuiAccordionSummary-content": {"marginY": "0px"}}}
                    >
                        <AccordionSummary sx={{paddingX: 1, marginTop: 0}}>
                        <Typography gutterBottom variant="h5" component="div">{imageData['title']}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography variant="body2" color="text.secondary">{imageData['explanation']}</Typography>
                        </AccordionDetails>
                    </Accordion>
                </CardContent>
            </div>
            <CardActions>
                <Button>Like</Button>
            </CardActions>
        </Card>
    )
}