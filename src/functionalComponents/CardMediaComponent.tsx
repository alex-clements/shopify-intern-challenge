import React, {useEffect, useState} from 'react';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';
import {motion} from 'framer-motion';

export default function CardMediaComponent(props : any) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageData, setImageData] = useState(props.imageURL);

    const handleLoad = () => {
        setImageLoaded(true);
        console.log("Image loaded: ", imageData['title']);
    }

    const variants = {
        "opacity": imageLoaded ? "100%" : "0%"
    }

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