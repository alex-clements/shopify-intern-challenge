import React from 'react';
import {useEffect, useState} from 'react';
import ImageCard from './ImageCard';
import Grid from '@mui/material/Grid';
import { CircularProgress } from '@mui/material';

export default function ApplicationBody(props : any) {
    const [imageData, setImageData] = useState([]);
    const [imageDataLoaded, setImageDataLoaded] = useState(false);

    useEffect(() => {
        console.log("Application Body");
        fetchImageData();
    }, [])

    const fetchImageData = () => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=Bm1rwlnBAeqpKdnPnc5Qqke49sbZONaRPJvejW0O&count=5')
        .then(response => response.json())
        .then(data => imageDataHandler(data));
    }

    const imageDataHandler = (data : any) => {
        setImageData(data);
        setImageDataLoaded(true);
        console.log("Image data loaded");
    }

    const styleProps = {
        "backgroundColor": "#e1e1e1",
        "paddingTop": "10px",
        "paddingBottom": "20px",
        "minHeight": "100vh"
    }

    const CustomProgress = (props : any) => {
        const customProgressStyleProps = {
            "marginTop": "50vh"
        }
        return (
            <div style={customProgressStyleProps}>
                <CircularProgress />
            </div>
        )
    }

    return (
        <div style={styleProps}>
                {imageDataLoaded ? imageData.map((item, index) => <ImageCard data={item} key={index} />) : <CustomProgress />}
        </div>
    )
}