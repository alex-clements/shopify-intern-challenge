import React, {useState} from 'react';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';
import {motion} from 'framer-motion';

/**
 * Functional component for the image card media.  Shows either the loading skeleton or an image.
 * @param props React props.
 * @returns React functional component.
 */
export default function CardMediaComponent(props : CardMediaComponentProps) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageData, setImageData] = useState(props.imageURL);

    /**
     * handler function for when the image has loaded.
     * Sets the imageLoaded state variable to true, changing the height of the image and skeleton.
     */
    const handleLoad = () => {
        setImageLoaded(true);
    }

    /**
     * animation variants for the image div
     */
    const variants = {
        "opacity": imageLoaded ? "100%" : "0%"
    }

    /**
     * initial state props for image div
     */
    const initialProps = {
        "opacity": "0%"
    }

    return (
        <div>
            <motion.div initial={initialProps} animate={variants}>
                <CardMedia
                        component="img"
                        height={imageLoaded ? "300" : "0"}
                        image={imageData}
                        onLoad={handleLoad}
                        />
            </motion.div>
            <Skeleton variant="rectangular" width={300} height={imageLoaded ? 0 : 300} />
        </div>
    )
}