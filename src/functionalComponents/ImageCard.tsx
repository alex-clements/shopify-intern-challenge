import React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Accordion from './Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import CardMediaComponent from './CardMediaComponent';
import FavouriteButton from './FavouriteButton';


export default function ImageCard(props : any) {
    const [imageData, setImageData] = useState(props.data)
    const [expanded, setExpanded] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)
    const [mouseHovering, setMouseHovering] = useState(false)

    const handleClick = () => {
        setExpanded(!expanded);
    }

    const initialStuff = {
        "opacity": "0%",
        "box-shadow": "0px 2px 0px 2px #888888",
    }

    const variants = {
        "opacity": "100%",
        "box-shadow": mouseHovering ? "1px 5px 5px 10px #888888" : "0px 2px 1px 3px #888888",
    }

    const handleMouseEnter = () => {
        setMouseHovering(true);
    }

    const handleMouseLeave = () => {
        setMouseHovering(false);
    }

    return (
        <motion.div whileHover={{scale: 1.01}} style={{maxWidth: 300, margin: "auto", marginTop: "20px", borderRadius: 5}} initial={initialStuff} animate={variants} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Card sx={{maxWidth: 300, margin: "auto"}}>
                <div onClick={handleClick}>
                    <CardMediaComponent imageURL={imageData['url']} />
                    <CardContent sx={{paddingX: 0, paddingBottom: 1}}>
                        <Accordion expanded={expanded} imageDate={imageData['date']} imageTitle={imageData['title']} imageExplanation={imageData['explanation']} />
                    </CardContent>
                </div>
                <CardActions>
                    <FavouriteButton imageDate={imageData['date']} />
                </CardActions>
            </Card>
        </motion.div>
    )
}