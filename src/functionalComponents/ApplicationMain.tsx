import React from 'react';
import {useState, useEffect} from 'react';
import ApplicationBar from './ApplicationBar';
import ApplicationBody from './ApplicationBody';
import LoadMoreData from './LoadMoreData';

const initializeViewMode = () : string => {
    const name : string | null = localStorage.getItem("viewMode");

    if (name) {
        return name;
    } else {
        return "random";
    }
}

export default function ApplicationMain(props : any) {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [loadMoreData, setLoadMoreData] = useState(false);
    const [viewMode, setViewMode] = useState(initializeViewMode());
    const [moreData, setMoreData] = useState(true);
    

    useEffect(() => {
        console.log("Application Main");
        initializeViewMode();
    }, [])

    const handleDataLoaded = () => {
        setDataLoaded(true);
    }

    const handleLoadMoreDataVisible = () => {
        setLoadMoreData(true);
    }

    const handleExtraDataLoaded = () => {
        setLoadMoreData(false);
    }

    const handleMenuItemClick = (e : string) => {
        setViewMode(e);
        localStorage.setItem("viewMode", e);
        window.location.reload();
    }

    const handleNoMoreData = () => {
        setMoreData(false);
    }

    return (
        <div>
            <ApplicationBar onMenuItemClick={handleMenuItemClick} />
            <ApplicationBody onNoMoreData={handleNoMoreData} viewMode={viewMode} onExtraDataLoaded={handleExtraDataLoaded} loadMoreData={loadMoreData} onDataLoaded={handleDataLoaded} />
            <LoadMoreData visible={moreData} onVisible={handleLoadMoreDataVisible} dataLoaded={dataLoaded} />
        </div>
    )
}