import React from 'react';
import {useEffect} from 'react';
import ApplicationBar from './ApplicationBar';
import ApplicationBody from './ApplicationBody';

export default function ApplicationMain(props : any) {
    useEffect(() => {
        console.log("Application Main");
    }, [])

    return (
        <div>
            <ApplicationBar />
            <ApplicationBody />
        </div>
    )
}