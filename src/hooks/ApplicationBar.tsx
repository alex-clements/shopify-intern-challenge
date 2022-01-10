import React from 'react';
import {useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

export default function ApplicationBar(props : any) {
    useEffect(() => {
        console.log("Application Bar");
    }, [])
    return (
        <AppBar position="sticky" sx={{backgroundColor: "#cfcfcf", color: "black"}}>
            <Toolbar>
                <Typography variant="h6" component="div">Spacestagram</Typography>
            </Toolbar>
        </AppBar>
    )
}