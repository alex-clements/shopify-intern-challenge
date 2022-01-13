import React from 'react';
import {useEffect, useState} from 'react';
import ImageCard from './ImageCard';
import getStorageItems from '../scripts/getStorageItems';
import fetchDataAbstract from '../scripts/fetchDataAbstract';
import {HelperFunctions} from '../scripts/HelperFunctions';
import CustomProgress from './CustomProgress';
import fetchSavedData from '../scripts/fetchSavedData';

export default function ApplicationBody(props : ApplicationBodyProps) {
    let helper_functions : HelperFunctions = new HelperFunctions();
    const [imageData, setImageData] = useState<Array<any>>([]);
    const [imageDataLoaded, setImageDataLoaded] = useState<boolean>(false);
    const [viewMode, setViewMode] = useState<ViewMode>(props.viewMode);
    const [nextAvailableDate, setNextAvailableDate] = useState<string>(new Date().toString())
    const [currentSavedIndex, setCurrentSavedIndex] = useState<number>(0);
    const [savedImageDates, setSavedImageDates] = useState<Array<string>>(getStorageItems());

    /**
     * Calls a data fetching function depending on the view mode
     */
    useEffect(() => {
        switch (viewMode) {
            case "random": {
                fetchImageDataRandom();
                break;
            }
            case "chronological": {
                fetchImageDataChron();
                break;
            }
            case "saved": {
                fetchImageDataSaved();
                break;
            }
        }
    }, [])

    /**
     * Called when the loadMoreData prop changed. Calls specific data fetching function for additional data, depending on the viewMode.
     */
    useEffect(() => {
        if (props.loadMoreData) {
            switch(viewMode) {
                case "random": {
                    fetchAdditionalDataRandom();
                    break;
                }
                case "chronological": {
                    fetchAdditionalDataChron();
                    break;
                }
                case "saved": {
                    fetchAdditionalSavedImage();
                }
            }
        }
    }, [props.loadMoreData]);

    /**
     * Called when the viewMode prop changes. Sets the viewMode state variable to the new viewMode prop.
     */
    useEffect(() => {
        setViewMode(props.viewMode);
    }, [props.viewMode])

    /**
     * Initial image data fetch for the saved viewMode
     */
    const fetchImageDataSaved = () => {
        let allDates : Array<string> = savedImageDates;
        let index : number = currentSavedIndex;
        let allDatesLength = allDates.length;
        let myArray : Array<string> = [];
        var i : number;

        for (i = index; i < index + 5; i++) {
            if (i < allDatesLength) {
                myArray.push(allDates[i])
            }
        }

        fetchSavedData(myArray)
        .then(data => savedImageDataHandler(data))
        .then(() => {
            if (i >= allDates.length) {
                props.onNoMoreData();
            }
        })

        setCurrentSavedIndex(index + 5);
    }

    /**
     * Additional data fetch for the saved viewMode
     */
    const fetchAdditionalSavedImage = () => {
        let allDates : Array<string> = savedImageDates;
        let index : number = currentSavedIndex;
        let allDatesLength = allDates.length;
        let myArray : Array<string> = [];
        var i : number;

        for (i = index; i < index + 5; i++) {
            if (i < allDatesLength) {
                myArray.push(allDates[i])
            }
        }

        fetchSavedData(myArray)
        .then(data => additionalImageDataHandler(data))
        .then(() => {
            if (i >= allDates.length) {
                props.onNoMoreData();
            }
        });
        setCurrentSavedIndex(index + 5);
        
    }

    /**
     * Initial data fetch for the chronological viewMode
     */
    const fetchImageDataChron = async () => {
        let startDateEndDateStrings = helper_functions.getEndDateStartDate(nextAvailableDate);
        let startDateString : string = startDateEndDateStrings[0];
        let endDateString : string = startDateEndDateStrings[1];

        let apiString = "&start_date=" + endDateString + "&end_date=" + startDateString;
        fetchDataAbstract(apiString).then(new_data => imageDataHandler(new_data));

        let nextDate : string = helper_functions.getNextDate(nextAvailableDate);
        setNextAvailableDate(nextDate);
    }

    const fetchAdditionalDataChron = () => {
        let startDateEndDateStrings = helper_functions.getEndDateStartDate(nextAvailableDate);
        let startDateString : string = startDateEndDateStrings[0];
        let endDateString : string = startDateEndDateStrings[1];

        let apiString = "&start_date=" + endDateString + "&end_date=" + startDateString;
        fetchDataAbstract(apiString).then(new_data => additionalImageDataHandler(new_data));

        let nextDate : string = helper_functions.getNextDate(nextAvailableDate);
        setNextAvailableDate(nextDate);
    }

    const fetchImageDataRandom = () => {
        let apiString : string = '&count=5';
        fetchDataAbstract(apiString).then(new_data => imageDataHandler(new_data));
    }

    const fetchAdditionalDataRandom = () => {
        let apiString : string = '&count=5';
        fetchDataAbstract(apiString).then(new_data => additionalImageDataHandler(new_data));
    }

    const imageDataHandler = (data : any) => {
        if (viewMode == "chronological") {
            data = data.reverse();
        }
        setImageData(data);
        setImageDataLoaded(true);
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

    const savedImageDataHandler = (data : any) => {
        setImageData(data);
        setImageDataLoaded(true);
        props.onDataLoaded();
    }

    /**
     * Style props for the Application Body wrapper.
     */
    const styleProps = {
        "backgroundColor": "#e1e1e1",
        "paddingTop": "10px",
        "paddingBottom": "20px",
        "minHeight": "calc(100vh - 200px)",
    }

    return (
        <div style={styleProps}>
                {imageDataLoaded ? imageData.map((item, index) => <ImageCard data={item} key={index} componentTabIndex={index * 2 + 2} />) : <CustomProgress />}
        </div>
    )
}