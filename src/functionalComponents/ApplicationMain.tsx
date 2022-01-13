import React from 'react';
import {useState, useEffect} from 'react';
import ApplicationBar from './ApplicationBar';
import ApplicationBody from './ApplicationBody';
import LoadMoreData from './LoadMoreData';

const initializeViewMode = () : ViewMode => {
    const name : string | null = localStorage.getItem("viewMode");

    if (name) {
        return name as ViewMode;
    } else {
        return "random";
    }
}
/**
 * Component representing the entire application, including the app bar and and app body.
 * @param props React props.
 * @returns React functional component.
 */
export default function ApplicationMain(props : ApplicationMainProps) {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [loadMoreData, setLoadMoreData] = useState(false);
    const [viewMode, setViewMode] = useState<ViewMode>(initializeViewMode());
    const [moreData, setMoreData] = useState(true);

    /**
     * handler function for when the initial data fetch is complete.
     * Sets the dataLoaded state variable to true.
     */
    const handleDataLoaded = () => {
        setDataLoaded(true);
    }

    /**
     * Handler function for when the LoadMoreData component is visible on the screen.
     * Sets the loadMoreData state variable to true, triggering an additional data fetch.
     */
    const handleLoadMoreDataVisible = () => {
        setLoadMoreData(true);
    }

    /**
     * Handler function for when more data is fetched.
     * Sets the loadMoreData state variable to false.
     */
    const handleExtraDataLoaded = () => {
        setLoadMoreData(false);
    }

    /**
     * Handler for the view mode selection from the side menu.
     * @param e one of the applicable view modes
     */
    const handleMenuItemClick = (e : ViewMode) => {
        setViewMode(e);
        localStorage.setItem("viewMode", e);
        window.location.reload();
    }

    /**
     * Sets the moreData state variable to false. Indicates that there is no additional data fetches required.
     */
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