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


export default function ImageCard(props : any) {
    const [imageData, setImageData] = useState(props.data)
    const [expanded, setExpanded] = useState(false)
    const [mouseHovering, setMouseHovering] = useState(false)
    const [componentTabIndex, setComponentTabIndex] = useState(props.componentTabIndex);

    const handleClick = () => {
        setExpanded(!expanded);
    }

    const initialStuff = {
        "opacity": "0%",
        "boxShadow": "0px 2px 0px 2px #888888",
    }

    const variants = {
        "opacity": "100%",
        "boxShadow": (!isMobile && mouseHovering) ? "1px 2px 10px 10px #888888" : "0px 0px 5px 3px #888888",
    }

    const handleMouseEnter = () => {
        setMouseHovering(true);
    }

    const handleMouseLeave = () => {
        setMouseHovering(false);
    }

    const handleKeyDown = (e : React.KeyboardEvent) => {
        if (e.code === "Enter") {
            handleClick();
        }
    }

    return (
        <motion.div whileHover={{scale: 1.01}} style={{maxWidth: 300, margin: "auto", marginTop: "20px", borderRadius: 5}} initial={initialStuff} animate={variants} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Card sx={{maxWidth: 300, margin: "auto"}}>
                <div onClick={handleClick}>
                    <CardMediaComponent imageURL={imageData['url']} />
                    <CardContent tabIndex={0} onKeyDown={handleKeyDown} sx={{paddingX: 0, paddingBottom: 0, "&:last-child": {paddingBottom: 0}}}>
                        <Accordion expanded={expanded} imageDate={imageData['date']} imageTitle={imageData['title']} imageExplanation={imageData['explanation']} />
                    </CardContent>
                </div>
                <CardActions>
                    <FavouriteButton componentTabIndex={0} imageDate={imageData['date']} />
                </CardActions>
            </Card>
        </motion.div>
    )
}