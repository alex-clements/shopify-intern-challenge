import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function CustomProgress(props : any) {
    const customProgressStyleProps = {
        "marginTop": "50vh"
    }
    return (
        <div style={customProgressStyleProps}>
            <CircularProgress />
        </div>
    )
}