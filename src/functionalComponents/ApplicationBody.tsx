import React from 'react';
import {useEffect, useState} from 'react';
import ImageCard from './ImageCard';
import Grid from '@mui/material/Grid';
import { CircularProgress } from '@mui/material';
import getStorageItems from '../scripts/getStorageItems';
import fetchDataAbstract from '../scripts/fetchDataAbstract';


export default function ApplicationBody(props : any) {
    const [imageData, setImageData] = useState<Array<any>>([]);
    const [imageDataLoaded, setImageDataLoaded] = useState(false);
    const [viewMode, setViewMode] = useState(props.viewMode);
    const [nextAvailableDate, setNextAvailableDate] = useState(new Date().toString())
    const [currentSavedIndex, setCurrentSavedIndex] = useState(0);
    const [savedImageDates, setSavedImageDates] = useState(getStorageItems());

    useEffect(() => {
        console.log("Application Body");
        if (viewMode === "random") {
            fetchImageDataRandom();
        } else if (viewMode === "chronological") {
            fetchImageDataChron();
        } else if (viewMode === "saved") {
            fetchImageDataSaved();
        }
    }, [])

    useEffect(() => {
        if (props.loadMoreData) {
            if (viewMode == "random") {
                fetchAdditionalDataRandom();
            } else if (viewMode === "chronological") {
                fetchAdditionalDataChron();
            } else if (viewMode === "saved") {
                fetchImageDataSaved();
            }
            
        }
    }, [props.loadMoreData]);

    useEffect(() => {
        setViewMode(props.viewMode);
    }, [props.viewMode])

    const fetchImageDataChron = () => {
        let startDate : Date = new Date();
        let endDate : Date = new Date();

        startDate.setDate(new Date(nextAvailableDate).getDate());
        endDate.setDate(new Date(nextAvailableDate).getDate() - 5);

        let startDateString : string = formatDate(startDate);
        let endDateString : string = formatDate(endDate);

        let apiString = "https://api.nasa.gov/planetary/apod?api_key=Bm1rwlnBAeqpKdnPnc5Qqke49sbZONaRPJvejW0O&start_date=" + endDateString + "&end_date=" + startDateString;

        fetch(apiString)
        .then(response => response.json())
        .then(data => imageDataHandler(data));

        let nextDate : Date = new Date();
        nextDate.setDate(startDate.getDate() - 6);
        setNextAvailableDate(nextDate.toString());
        console.log("Next Date = " + nextDate);
    }

    const fetchImageDataSaved = () => {
        let allDates : Array<string> = savedImageDates;
        let index : number = currentSavedIndex;
        let allDatesLength = allDates.length;
        fetchSavedImageOne(allDates[0]);

        var i;

        for (i = index + 1; i < index + 5; i++) {
            if (i < allDatesLength) {
                fetchAdditionalSavedImage(allDates[i])
            }
        }

        if (i >= allDates.length) {
            console.log("i = " + i);
            console.log("allDates.length = " + allDates.length);
            props.onNoMoreData();
        }

        setCurrentSavedIndex(index + 5);
    }

    const fetchAdditionalSavedImage = (dateString : string) => {
        console.log(dateString)
        let apiString : string = "https://api.nasa.gov/planetary/apod?api_key=Bm1rwlnBAeqpKdnPnc5Qqke49sbZONaRPJvejW0O&date=" + dateString;
        fetch(apiString)
        .then(response => response.json())
        .then(data => fetchAdditionalSavedImageHandler(data));
    }

    const fetchAdditionalSavedImageHandler = (data : any) => {
        const newImageData = imageData;
        newImageData.push(data);
        setImageData(newImageData);
    }

    const fetchSavedImageOne = (dateString : string) => {
        console.log(dateString);
        let apiString : string = "https://api.nasa.gov/planetary/apod?api_key=Bm1rwlnBAeqpKdnPnc5Qqke49sbZONaRPJvejW0O&date=" + dateString;
        fetch(apiString)
        .then(response => response.json())
        .then(data => savedImageDataHandler(data));
    }

    const savedImageDataHandler = (data : any) => {
        let myArray = imageData;
        myArray.push(data);
        setImageData(myArray);
        setImageDataLoaded(true);
        props.onDataLoaded();
    }

    const fetchAdditionalDataChron = () => {
        let startDate : Date = new Date(nextAvailableDate);
        let endDate : Date = new Date(nextAvailableDate);

        endDate.setDate(startDate.getDate() - 5);
        
        let startDateString : string = formatDate(startDate);
        let endDateString : string = formatDate(endDate);

        let apiString = "https://api.nasa.gov/planetary/apod?api_key=Bm1rwlnBAeqpKdnPnc5Qqke49sbZONaRPJvejW0O&start_date=" + endDateString + "&end_date=" + startDateString;

        fetch(apiString)
        .then(response => response.json())
        .then(data => additionalImageDataHandler(data));

        let dateOffset : number = (24 * 60 * 60 * 1000) * 6;
        let nextDate : Date = new Date();
        nextDate.setTime(startDate.getTime() - dateOffset);
        setNextAvailableDate(nextDate.toString());
    }

    const formatDate = (myDate : Date) => {
        let myDays : string = myDate.getDate().toString();
        let myMonths : string = (myDate.getMonth() + 1).toString();
        let myYear : string = myDate.getFullYear().toString();
        let myString : string = myYear + "-" + myMonths.padStart(2, "0") + "-" + myDays.padStart(2, "0");
        return myString;
    }

    const fetchAdditionalDataRandom = () => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=Bm1rwlnBAeqpKdnPnc5Qqke49sbZONaRPJvejW0O&count=5')
        .then(response => response.json())
        .then(data => additionalImageDataHandler(data));
    }

    const fetchImageDataRandom = () => {
        let apiString : string = 'https://api.nasa.gov/planetary/apod?api_key=Bm1rwlnBAeqpKdnPnc5Qqke49sbZONaRPJvejW0O&count=5';
        fetch(apiString)
        .then(response => response.json())
        .then(data => imageDataHandler(data));
    }

    const imageDataHandler = (data : any) => {
        if (viewMode == "chronological") {
            data = data.reverse();
        }
        setImageData(data);
        setImageDataLoaded(true);
        console.log("Image data loaded");
        props.onDataLoaded();
    }

    const additionalImageDataHandler = (data : any) => {
        if (viewMode == "chronological") {
            data = data.reverse();
        }
        const existingImageData = imageData;
        const newArray = existingImageData.concat(data);
        setImageData(newArray);
        props.onExtraDataLoaded(); 
    }

    const styleProps = {
        "backgroundColor": "#e1e1e1",
        "paddingTop": "10px",
        "paddingBottom": "20px",
        "minHeight": "calc(100vh - 65px)"
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