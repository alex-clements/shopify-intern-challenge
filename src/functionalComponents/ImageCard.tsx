import React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Accordion from './Accordion';
import { motion } from 'framer-motion';
import CardMediaComponent from './CardMediaComponent';
import FavouriteButton from './FavouriteButton';
import {isMobile} from 'react-device-detect';

/**
 * Card component carrying the space image, title, date, description, like button
 * @param props React props.
 * @returns React functional component.
 */
export default function ImageCard(props : ImageCardProps) {
    const [imageData, setImageData] = useState(props.data)
    const [expanded, setExpanded] = useState(false)
    const [mouseHovering, setMouseHovering] = useState(false)

    /**
     * handler for a click event on the image, title, date, or description
     */
    const handleClick = () => {
        setExpanded(!expanded);
    }

    /**
     * initial animation props for the card.
     */
    const initialStuff = {
        "opacity": "0%",
        "boxShadow": "0px 0px 5px 3px #888888",
    }

    /**
     * animation variants for the card.
     */
    const variants = {
        "opacity": "100%",
        "boxShadow": (!isMobile && mouseHovering) ? "1px 2px 10px 10px #888888" : "0px 0px 5px 3px #888888",
    }

    /**
     * handler for the mouse enter event over the card.
     */
    const handleMouseEnter = () => {
        setMouseHovering(true);
    }

    /**
     * handler for the mouse leave event from the card.
     */
    const handleMouseLeave = () => {
        setMouseHovering(false);
    }

    /**
     * handler for a key press event.  If the key is enter (and the focusable potion of the card is focused), 
     * then the card will be expanded.
     * @param e keyboard event
     */
    const handleKeyDown = (e : React.KeyboardEvent) => {
        if (e.code === "Enter") {
            handleClick();
        }
    }

    return (
        <motion.div whileHover={{scale: 1.01}} style={{maxWidth: 300, margin: "auto", marginTop: "20px", borderRadius: 5}} 
        initial={initialStuff} animate={variants} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Card sx={{maxWidth: 300, margin: "auto"}}>
                <div onClick={handleClick}>
                    <CardMediaComponent imageURL={imageData['url']} />
                    <CardContent tabIndex={0} onKeyDown={handleKeyDown} sx={{paddingX: 0, paddingBottom: 0, 
                        "&:last-child": {paddingBottom: 0}}}>
                        <Accordion expanded={expanded} imageDate={imageData['date']} imageTitle={imageData['title']} 
                        imageExplanation={imageData['explanation']} />
                    </CardContent>
                </div>
                <CardActions>
                    <FavouriteButton imageDate={imageData['date']} />
                </CardActions>
            </Card>
        </motion.div>
    )
}